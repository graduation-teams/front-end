import { lazy } from 'react';
export default {
    path: '/cart',
    exact: true,
    component: lazy(() => import('./index')),
};
