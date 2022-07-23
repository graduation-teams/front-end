import React, { useEffect, useState, useMemo, lazy } from 'react';
import { Helmet } from 'react-helmet';
import AdminLayouts from '@layouts/admin';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import UserModels from '@models/userModels';
import { useHistory } from "react-router-dom";

function AdminPage() {
    const dispatch = useDispatch();
    const { managerId, tabCurrent, subTabCurrent } = useParams();
    const svManager = useSelector(state => state?.user?.info);
    const [isManager, setIsManager] = useState('');
    const [selectedTab, setSelectedTab] = useState(tabCurrent);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            if (!JSON.parse(getLocalStorage('user'))?.id || !getLocalStorage('access_token') || !new UserModels(JSON.parse(getLocalStorage('user'))).isManager()) {
                await dispatch(push('/'));
                await toast.error('You need login first!', { limit: 1 });
            }
        })();
    }, []);

    useEffect(() => {
        if(selectedTab){
            console.log('selectedTab', selectedTab);
        }
    }, [selectedTab]);

    const Elements = useMemo(() => {
        let arrayElements = [];
        switch (selectedTab) {
            case 'dashboard':
                arrayElements = [{ element: lazy(() => import('./dashboard')), props: {} }];
                break;
            case 'products':
                arrayElements = [{ element: lazy(() => import('./products')), props: {} }];
                break;
            case 'categories':
                arrayElements = [{ element: lazy(() => import('./categories')), props: {} }];
                break;
            case 'customers':
                arrayElements = [{ element: lazy(() => import('./customers')), props: {} }];
                break;
            case 'staff':
                arrayElements = [{ element: lazy(() => import('./ourStaff')), props: {} }];
                break;
            case 'promotions':
                arrayElements = [{ element: lazy(() => import('./promotions')), props: {} }];
                break;
            case 'orders':
                arrayElements = [{ element: lazy(() => import('./orders')), props: {} }];
                break;
            case 'settings':
                arrayElements = [{ element: lazy(() => import('./settings')), props: {} }];
                break;
            default:
                arrayElements = [{ element: lazy(() => import('./dashboard')), props: {} }];
                break;
        }
        return arrayElements;
    }, [selectedTab]);


    function handleChangeTab(tabSelect){
        console.log('tabSelect', tabSelect)
        setSelectedTab(tabSelect?.tabCurrent);
        // history.replace(`/admin-profile/manager-id/4/tab-current/${tabSelect?.tabCurrent}`);
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Dashboard - TechStore</title>
            </Helmet>
            <AdminLayouts childrenComponent={Elements} changeTab={handleChangeTab}/>
        </React.Fragment>
    );
}

export default AdminPage;
