import React, { useEffect, useState, useMemo, lazy, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useViewport } from '@hooks';
import { getLocalStorage } from '@utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import UserModels from '@models/userModels';
import {useNavigate} from 'react-router-dom';
import { push } from '@lagunovsky/redux-react-router';
const Dashboard = lazy(() => import('./dashboard'));

function AdminPage() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const { managerId, tabCurrent } = useParams();
    const svManager = useSelector(state => state?.user?.info);
    const [selectedTab, setSelectedTab] = useState(tabCurrent);

    useEffect(() => {
        console.log('tabCurrent', tabCurrent);
    }, [tabCurrent]);


    useEffect(() => {
        (async () => {
            if (!JSON.parse(getLocalStorage('user'))?.id || !getLocalStorage('access_token') || !new UserModels(JSON.parse(getLocalStorage('user'))).isManager()) {
                await dispatch(push('/'));
                await toast.error('You need login first!', { limit: 1 });
            }
        })();
    }, []);

    // const Elements = useMemo(() => {
    //     switch (selectedTab) {
    //         case 'dashboard':
    //            return [{ element: lazy(() => import('./dashboard')), props: {} }];
    //         case 'products':
    //             return [{ element: lazy(() => import('./products')), props: {} }];
    //         case 'categories':
    //             return [{ element: lazy(() => import('./categories')), props: {} }];
    //         case 'customers':
    //             return [{ element: lazy(() => import('./customers')), props: {} }];
    //         case 'our-staff':
    //             return [{ element: lazy(() => import('./ourStaff')), props: {} }];
    //         case 'promotions':
    //             return [{ element: lazy(() => import('./promotions')), props: {} }];
    //         case 'orders':
    //             return [{ element: lazy(() => import('./orders')), props: {} }];
    //         case 'settings':
    //             return [{ element: lazy(() => import('./settings')), props: {} }];
    //         default:
    //             return [{ element: lazy(() => import('./dashboard')), props: {} }];
    //     }
    // }, [selectedTab]);


    function handleChangeTab(tabSelect){
        // if(tabSelect?.tabCurrent === selectedTab)return;
        setSelectedTab(tabSelect?.tabCurrent);
        // dispatch(push(`/admin-profile/manager-id/${managerId}/tab-current/${tabSelect?.tabCurrent}`))
    }

    return (
        <React.Fragment>
            <Dashboard/>
        </React.Fragment>
    );
}

export default AdminPage;
