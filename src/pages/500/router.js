import { lazy } from "react";
export default {
    path:'/server-died',
    exact:true,
    component: lazy(() => import('./index'))
}