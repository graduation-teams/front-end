import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { push } from 'connected-react-router';
import Layouts from '@layouts';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '@utils/helpers';
import LoginForm from './components';
import { toast } from 'react-toastify';

function LoginPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        (async ()=>{
            if(JSON.parse(getLocalStorage('user'))?.id && getLocalStorage('access_token')){
               await dispatch(push('/'));
               toast.warning('You are logged in!',{limit:1});
             }
        })()
    }, []);

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
