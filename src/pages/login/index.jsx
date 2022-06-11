import React,{ useEffect, useMemo} from "react";
import { Helmet } from 'react-helmet';
import Layouts from '@layouts';
import { useDispatch} from 'react-redux';
import { useViewport } from '@hooks'
import {getLocalStorage} from '@utils/helpers';



function LoginPage(){
    const dispatch =  useDispatch()
    const viewPort = useViewport();
    return (
        <React.Fragment>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Layouts/>
        </React.Fragment>
    )
}

export default LoginPage;