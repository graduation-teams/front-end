import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Layouts from '@layouts/client';
import { useDispatch } from 'react-redux';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import StepsCart from './components/stepsCart';

function ProductDetailPage() {
    const viewPort = useViewport();
    const Elements = React.useMemo(() => {
        let arrayElements = [{ element: StepsCart }];
        return arrayElements;
    }, [viewPort.width]);

    return (
        <React.Fragment>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <Layouts childrenComponent={Elements} />
        </React.Fragment>
    );
}

export default ProductDetailPage;
