import React, { useEffect, useState, useMemo } from 'react';
import FilterAddTechStore from '@components/common/filterAddTechStore';
import DrawerTechStore from '@components/common/drawerTechStore';
import TableTechStore from '@components/common/tableTechStore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductAction } from '@features/products/productActions';
import { useFilterContext } from '@contexts/filterContext';
import { ModalConfirmTechStore } from '@components/common';
import { getColumnConfig } from './components/configColumProduct';
import UserModels from '@models/userModels';
import ProductModels from '@models/productModels';
import { useKeywordContext } from '@contexts/keywordContext';

function Products() {
    const dispatch = useDispatch();
    const { filterValue } = useFilterContext();
    const { keywordValue } = useKeywordContext();
    const svProducts = useSelector(state => state.products.fetchAll);
    const svUser = useSelector(state => state?.user?.info);
    const [modalProps, setModalProps] = useState({});
    const [colConfigs, setColConfigs] = useState([]);

    const dataProducts = useMemo(() => {
      if (svProducts?.failed) return [];
      if (svProducts?.success && svProducts?.data.length > 0) {
          return new ProductModels()?.handleDataApiProduct(svProducts?.data, true);
      } else {
          return [];
      }
  }, [svProducts]);

  const dataUser = useMemo(() => {
      return new UserModels(svUser);
  }, [svUser]);
  
    useEffect(() => {
        dispatch(fetchAllProductAction({ isAdmin: true }));
    }, []);

    useEffect(() => {
        setColConfigs(getColumnConfig(keywordValue, viewDetailItem, deleteItem, updateItem, dataUser));
    }, [dataProducts, dataUser]);

   

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
            <ModalConfirmTechStore dataModal={modalProps} />
            <DrawerTechStore title="Add Product" overrideTextButtonConfirm="Add Product" />
            <FilterAddTechStore title="Product" />
            <TableTechStore dataAPI={dataProducts} callingAPI={svProducts?.pending} columConfigs={colConfigs} />
        </React.Fragment>
    );
}

export default Products;
