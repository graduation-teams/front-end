import { lazy } from 'react';
export default {
    path: '/product-detail',
    exact: true,
    component: lazy(() => import('./index')),
};
