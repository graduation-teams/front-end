import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Layouts from '@layouts';
import { useDispatch } from 'react-redux';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import ProductDetail from '../../components/productDetail/productDetail';
import ProductDescription from '../../components/productDetail/productDescription';
import RelatedProducts from '../../components/productDetail/relatedProducts';

function ProductDetailPage() {
    const viewPort = useViewport();
    const Elements = React.useMemo(() => {
        let arrayElements = [{ element: ProductDetail }, { element: ProductDescription }, { element: RelatedProducts }];
        return arrayElements;
    }, [viewPort.width]);

    return (
        <React.Fragment>
            <Helmet>
                <title>Product Detail</title>
            </Helmet>
            <Layouts childrenComponent={Elements} />
        </React.Fragment>
    );
}

export default ProductDetailPage;