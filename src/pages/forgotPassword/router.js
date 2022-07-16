import { lazy } from 'react';
export default {
    path: '/forgot-password',
    exact: true,
    component: lazy(() => import('./index')),
};
