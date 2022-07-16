import { lazy } from 'react';
export default {
    path: '/product-detail/product-id=:productId',
    exact: true,
    component: lazy(() => import('./index')),
};
