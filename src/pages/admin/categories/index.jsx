import React, { useEffect, useState, useMemo } from 'react';
import FilterAddTechStore from '@components/common/filterAddTechStore';
import DrawerTechStore from '@components/common/drawerTechStore';
import TableTechStore from '@components/common/tableTechStore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategoriesAction } from '@features/categories/categoriesActions';
import { fetchAllTypeCategoriesAction } from '@features/type/typeActions';
import { useFilterContext } from '@contexts/filterContext';
import { getColumnConfig } from './components/configColumCategories';
import { getColumnConfigType } from './components/configColumType';
import UserModels from '@models/userModels';
import TypeModels from '@models/typeModels';
import CategoriesModels from '@models/categoriesModels';
import { ModalConfirmTechStore } from '@components/common';
import { useKeywordContext } from '@contexts/keywordContext';
import TypeCategories from './components/typeCategories';
import FromCategories from './components/fromCategories';

function Categories() {
    const dispatch = useDispatch();
    const { filterValue } = useFilterContext();
    const { keywordValue } = useKeywordContext();
    const svCategories = useSelector(state => state.categories.fetchAll);
    const svTypes = useSelector(state => state.type.fetchAll);
    const svUser = useSelector(state => state?.user?.info);
    const [modalProps, setModalProps] = useState({});
    const [colConfigsCategories, setColConfigsCategories] = useState([]);
    const [colConfigsTypes, setColConfigsTypes] = useState([]);

    const dataCategory = useMemo(() => {
        if (svCategories?.failed) return [];
        if (svCategories?.success && svCategories?.data.length > 0) {
            return new CategoriesModels()?.handleDataApiCategories(svCategories?.data, true);
        } else {
            return [];
        }
    }, [svCategories]);

    const dataType = useMemo(() => {
        if (svTypes?.failed) return [];
        if (svTypes?.success && svTypes?.data.length > 0) {
            return new TypeModels()?.handleDataApiType(svTypes?.data);
        } else {
            return [];
        }
    }, [svTypes]);

    const dataUser = useMemo(() => {
        return new UserModels(svUser);
    }, [svUser]);

    useEffect(() => {
        dispatch(fetchAllTypeCategoriesAction());
        dispatch(fetchAllCategoriesAction());
    }, []);

    useEffect(() => {
        setColConfigsCategories(getColumnConfig(keywordValue, viewDetailItem, deleteItem, updateItem, dataUser));
    }, [dataCategory, dataUser]);

    useEffect(() => {
        setColConfigsTypes(getColumnConfigType(keywordValue, viewDetailItem, deleteItem, updateItem, dataUser));
    }, [dataType]);

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
            <DrawerTechStore isCategories={true} childrenForm={<FromCategories />} />

            <TypeCategories dataAPI={dataType} callingAPI={svTypes?.pending} columConfigs={colConfigsTypes} />
            <FilterAddTechStore title="Categories" isCategories={true} dataAPI={dataType} />
            <TableTechStore dataAPI={dataCategory} callingAPI={svCategories?.pending} columConfigs={colConfigsCategories} />
        </React.Fragment>
    );
}

export default Categories;
