import React,{ useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import AdminLayouts from '@layouts/admin';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import {useParams} from "react-router-dom";
import UserModels from '@models/userModels';


function DashboardPage() {
    const viewPort = useViewport();
    const dispatch = useDispatch();
    const {managerId,tabCurrent}= useParams();
    const svManager = useSelector(state => state?.user?.info);
    const [isManager, setIsManager] = useState('');


    useEffect(() => {
        (async ()=>{
            if(!JSON.parse(getLocalStorage('user'))?.id || !getLocalStorage('access_token') || !new UserModels(JSON.parse(getLocalStorage('user'))).isManager()){
               await dispatch(push('/'));
               await toast.error('You need login first!',{limit:1});
            }
        })()
    }, []);

    const Elements = useMemo(() => {
        let arrayElements = [];
        return arrayElements;
    }, [viewPort.width]);

    return (
        <React.Fragment>
            <Helmet>
                <title>Dashboard - TechStore</title>
            </Helmet>
            <AdminLayouts childrenComponent={Elements} />
        </React.Fragment>
    );
}

export default DashboardPage;