import React, { useEffect, useState, useMemo } from 'react';
import FilterAddTechStore from '@components/common/filterAddTechStore';
import DrawerTechStore from '@components/common/drawerTechStore';
import TableTechStore from '@components/common/tableTechStore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategoriesAction } from '@features/categories/categoriesActions';
import { useFilterContext } from '@contexts/filterContext';
import { getColumnConfig } from './components/configColumCategories';
import UserModels from '@models/userModels';
import CategoriesModels from '@models/categoriesModels';
import { ModalConfirmTechStore } from '@components/common';
import { useKeywordContext } from '@contexts/keywordContext';

function Categories() {
    const dispatch = useDispatch();
    const { filterValue } = useFilterContext();
    const { keywordValue } = useKeywordContext();
    const svCategories = useSelector(state => state.categories.fetchAll);
    const svUser = useSelector(state => state?.user?.info);
    const [modalProps, setModalProps] = useState({});
    const [colConfigs, setColConfigs] = useState([]);

    const dataCategory = useMemo(() => {
        if (svCategories?.failed) return [];
        if (svCategories?.success && svCategories?.data.length > 0) {
            return new CategoriesModels()?.handleDataApiCategories(svCategories?.data, true);
        } else {
            return [];
        }
    }, [svCategories]);

    const dataUser = useMemo(() => {
        return new UserModels(svUser);
    }, [svUser]);

    useEffect(() => {
        dispatch(fetchAllCategoriesAction());
    }, []);

    useEffect(() => {
        setColConfigs(getColumnConfig(keywordValue, viewDetailItem, deleteItem, updateItem, dataUser));
    }, [dataCategory, dataUser]);

    function viewDetailItem(record) {
        console.log('viewDetail: ', record);
    }

    function deleteItem(record) {
        console.log('viewDetail: ', record);
        setModalProps({
            idItem: record?.id,
        });
    }
    
    function updateItem(record) {
      console.log('viewDetail: ', record);
    }

    return (
        <React.Fragment>
            <ModalConfirmTechStore dataModal={modalProps} isCategory={true} />
            <DrawerTechStore isCategories={true} />
            <FilterAddTechStore title="Categories" isCategories={true} />
            <TableTechStore dataAPI={dataCategory} callingAPI={svCategories?.pending} columConfigs={colConfigs}/>
        </React.Fragment>
    );
}

export default Categories;
