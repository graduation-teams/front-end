import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import LayoutCustomer from '@containers/layoutCustomer';
import { useDispatch } from 'react-redux';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import ProductDetail from './components/productDetail';
import ProductDescription from './components/productDescription';
import RelatedProducts from './components/relatedProducts';
import ItemSlideShow from './components/itemSlideShow';

function ProductDetailPage() {
    // const viewPort = useViewport();
    // const Elements = React.useMemo(() => {
    //     let arrayElements = [{ element: ItemSlideShow }, { element: ProductDetail }, { element: ProductDescription }, { element: RelatedProducts }];
    //     return arrayElements;
    // }, [viewPort.width]);

    return (
        <React.Fragment>
            <Helmet>
                <title>Product Detail</title>
            </Helmet>
            {/* <LayoutCustomer childrenComponent={Elements} /> */}
            <ProductDetail />
        </React.Fragment>
    );
}

export default ProductDetailPage;
