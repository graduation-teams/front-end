import { lazy } from 'react';

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */

export const publicRoutes = [
    {
        path:'/',
        element: lazy(() => import('@pages/home')),
    },
    {
        path: '/login',
        element: lazy(() => import('@pages/login')),
    },
    {
        path: '/register',
        element: lazy(() => import('@pages/register')),
    },
    {
        path: '/forgot-password',
        element: lazy(() => import('@pages/forgotPassword')),
    },
    {
        path: '/reset-password',
        element: lazy(() => import('@pages/resetPassword')),
    },
    {
        path: '/product-detail/product-id=:productId',
        element: lazy(() => import('@pages/productDetail')),
    },
    {
        path: '/cart',
        element: lazy(() => import('@pages/cart')),
    },
    {
        path: '/active',
        element: lazy(() => import('@pages/active')),
    },
    {
        path: '/not-authorized',
        element: lazy(() => import('@pages/403')),
    },
    {
        path: '/server-died',
        element: lazy(() => import('@pages/500')),
    },
    {
        path: '/page-not-found',
        element: lazy(() => import('@pages/404')),
    }
]

export const privateRoutes = [
    {
        path:'dashboard',
        element: lazy(() => import('@pages/admin/dashboard')),
    },
    {
        path:'categories',
        element: lazy(() => import('@pages/admin/categories')),
    },
    {
        path:'products',
        element: lazy(() => import('@pages/admin/products')),
    },
    {
        path:'customers',
        element: lazy(() => import('@pages/admin/customers')),
    },
    {
        path:'orders',
        element: lazy(() => import('@pages/admin/orders')),
    },
    {
        path:'promotions',
        element: lazy(() => import('@pages/admin/promotions')),
    },
    {
        path:'our-staff',
        element: lazy(() => import('@pages/admin/ourStaff')),
    },
    {
        path:'settings',
        element: lazy(() => import('@pages/admin/settings')),
    }
];
