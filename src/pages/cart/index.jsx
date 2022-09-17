import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import StepsCart from './components/stepsCart';

function ProductDetailPage() {

    return (
        <React.Fragment>
            <StepsCart/>
        </React.Fragment>
    );
}

export default ProductDetailPage;
