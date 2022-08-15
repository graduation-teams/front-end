import React, { useEffect, useState, useMemo} from 'react';
import FilterAddTechStore from '@components/common/filterAddTechStore';
import DrawerTechStore from '@components/common/drawerTechStore';
import TableTechStore from '@components/common/tableTechStore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategoriesAction } from '@features/categories/categoriesActions';
import { useFilterContext } from '@contexts/filterContext';

function Categories(){
    const dispatch = useDispatch();
    const { filterValue } = useFilterContext();
    const svCategories = useSelector(state => state.categories.fetchAll);

    useEffect(() => {
      dispatch(fetchAllCategoriesAction());
    } ,[]);

    const dataCategory = useMemo(() => {
      if(svCategories?.failed) return [];
      if(svCategories?.success && svCategories?.data.length >0){
        return svCategories?.data
      }else{
        return [];
      };
  } ,[svCategories])


    return (
      <React.Fragment>
        <DrawerTechStore isCategories={true}/>
        <FilterAddTechStore title="Categories"  isCategories={true}/>
        <TableTechStore dataAPI={dataCategory} callingAPI={svCategories?.pending} isCategories={true}/>
      </React.Fragment>
    )
}

export default Categories;