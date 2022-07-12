import React, { useEffect, useMemo, useState } from 'react';
import { push } from 'connected-react-router';
import { Helmet } from 'react-helmet';
import Layouts from '@layouts';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '@utils/helpers';
import RegisterForm from '@components/register';
import { toast } from 'react-toastify';

function RegisterPage() {
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
