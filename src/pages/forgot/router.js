import { lazy } from 'react';
export default {
    path: '/forgot',
    exact: true,
    component: lazy(() => import('./index')),
};
