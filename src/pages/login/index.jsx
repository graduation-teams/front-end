import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Layouts from '@layouts';
import { useDispatch } from 'react-redux';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import LoginForm from '../../components/login';

function LoginPage() {
    const dispatch = useDispatch();
    const viewPort = useViewport();

    const Elements = useMemo(() => {
        let arrayElements = [{ element: LoginForm }];
        return arrayElements;
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Layouts childrenComponent={Elements} />
        </React.Fragment>
    );
}

export default LoginPage;
