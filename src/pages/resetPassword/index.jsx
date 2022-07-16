import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { push } from 'connected-react-router';
import Layouts from '@layouts';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '@utils/helpers';
import ResetPasswordForm from '../../components/resetPassword';
import { toast } from 'react-toastify';
import {useQuery} from '@hooks';


function ResetPasswordPage() {
    const query = useQuery();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     (async ()=>{
    //         if(JSON.parse(getLocalStorage('user'))?.id && getLocalStorage('access_token')){
    //            await dispatch(push('/'));
    //            toast.warning('You are logged in!',{limit:1});
    //          }
    //     })()
    // }, []);

    const Elements = useMemo(() => {
        let arrayElements = [{ element: ResetPasswordForm }];
        return arrayElements;
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>Reset Password - TechStore</title>
            </Helmet>
            <Layouts childrenComponent={Elements} />
        </React.Fragment>
    );
}

export default ResetPasswordPage;
