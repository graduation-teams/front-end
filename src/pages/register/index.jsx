import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Layouts from '@layouts';
import { useDispatch } from 'react-redux';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import RegisterForm from '../../components/register';

function RegisterPage() {
    const dispatch = useDispatch();
    const viewPort = useViewport();

    const Elements = useMemo(() => {
        let arrayElements = [{ element: RegisterForm }];
        return arrayElements;
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <Layouts childrenComponent={Elements} />
        </React.Fragment>
    );
}

export default RegisterPage;
