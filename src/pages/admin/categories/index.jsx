import React, { useEffect, useState,} from 'react';
import FilterAddTechStore from '@components/common/filterAddTechStore';
import DrawerTechStore from '@components/common/drawerTechStore';
import TableTechStore from '@components/common/tableTechStore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParameterCategoriesAction } from '@features/categories/categoriesActions';
import { useFilterContext } from '@contexts/filterContext';

function Categories(){
    const dispatch = useDispatch();
    const { handleFilter, filterValue } = useFilterContext();
    const svCategories = useSelector(state => state.categories.fetchParameter);
    
    // useEffect(() => {
    //     dispatch(fetchParameterCategoriesAction({parameter: 'all'}));
    // } ,[dispatch]);

    useEffect(() => {
      dispatch(fetchParameterCategoriesAction({parameter:filterValue}));
  } ,[filterValue]);


    useEffect(() => {
      svCategories?.data.length > 0 && console.log(svCategories?.data);
  } ,[svCategories])


    return (
      <React.Fragment>
        <DrawerTechStore/>
        <FilterAddTechStore title="Category" />
        <TableTechStore/>
      </React.Fragment>
    )
}

export default Categories;