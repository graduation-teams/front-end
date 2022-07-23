import { lazy } from 'react';
export default {
    path: '/active',
    exact: true,
    component: lazy(() => import('./index')),
};
