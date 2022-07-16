import { lazy } from 'react';
export default {
    path: '/reset-password',
    exact: true,
    component: lazy(() => import('./index')),
};
