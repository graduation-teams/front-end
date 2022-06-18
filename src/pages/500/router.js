import { lazy } from "react";
export default {
    path:'/server-died',
    exact:false,
    component: lazy(() => import('./index'))
}