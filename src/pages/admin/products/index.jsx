import React, { useEffect, useState, useMemo} from 'react';
import FilterAddTechStore from '@components/common/filterAddTechStore';
import DrawerTechStore from '@components/common/drawerTechStore';
import TableTechStore from '@components/common/tableTechStore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductAction } from '@features/products/productActions';
import { useFilterContext } from '@contexts/filterContext';

function Products(){
    const dispatch = useDispatch();
    const { filterValue } = useFilterContext();
    const svProducts = useSelector(state => state.products.fetchAll);

    useEffect(() => {
      dispatch(fetchAllProductAction());
    } ,[]);

    const dataProducts = useMemo(() => {
        if(svProducts?.failed) return [];
        if(svProducts?.success && svProducts?.data.length >0){
          return svProducts?.data
        }else{
          return [];
        };
    } ,[svProducts])
  
    return (
        <React.Fragment>
            <DrawerTechStore title='Add Product' overrideTextButtonConfirm='Add Product'/>
            <FilterAddTechStore title="Product"/>
            <TableTechStore dataAPI={dataProducts} callingAPI={dataProducts?.pending}/>
        </React.Fragment>
    )
}

export default Products;