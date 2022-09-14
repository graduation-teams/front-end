import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import LayoutCustomer from '@containers/layoutCustomer';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import ProductDetail from './components/productDetail';
import ProductDescription from './components/productDescription';
import RelatedProducts from './components/relatedProducts';
import ItemSlideShow from './components/itemSlideShow';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBySlugProductsAction } from '@features/products/productActions';
import ProductModels from '@models/productModels';

function ProductDetailPage() {
    const viewPort = useViewport();
    const dispatch = useDispatch();
    const { productSlug } = useParams();
    const [urlCurrent, setUrlCurrent] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrlCurrent(setUrlCurrent);
        }
    }, [productSlug]);

    const svProductDetail = useSelector(state => state.products.fetchBySlug);
    // const dataProductDetail = useMemo(() => {
    //     if (svProductDetail?.failed) return [];
    //     if (svProductDetail?.success && svProductDetail?.data?.length > 0) {
    //         return new ProductModels()?.handleDataApiProductSale(svProductDetail?.data);
    //     }
    // }, [svProductDetail]);

    useEffect(() => {
        dispatch(fetchBySlugProductsAction({ slugCurrent: urlCurrent }));
    }, [urlCurrent]);

    useEffect(() => {
        console.log('detail', svProductDetail);
    }, [svProductDetail]);

    const Elements = React.useMemo(() => {
        let arrayElements = [{ element: ProductDetail }, { element: ProductDescription }, { element: RelatedProducts }];
        return arrayElements;
    }, [viewPort.width]);

    return (
        <React.Fragment>
            <Helmet>
                <title>Product Detail</title>
            </Helmet>
            {/* <LayoutCustomer childrenComponent={Elements} /> */}
        </React.Fragment>
    );
}

export default ProductDetailPage;
