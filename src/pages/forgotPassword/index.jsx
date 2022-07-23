import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Layouts from '@layouts/client';
import { useDispatch } from 'react-redux';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import ForgotForm from './components';

function ForgotPage() {
    const dispatch = useDispatch();
    const viewPort = useViewport();

    const Elements = useMemo(() => {
        let arrayElements = [{ element: ForgotForm }];
        return arrayElements;
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>Forgot</title>
            </Helmet>
            <Layouts childrenComponent={Elements} />
        </React.Fragment>
    );
}

export default ForgotPage;
