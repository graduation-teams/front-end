import { lazy } from "react";
export default {
    path:'/not-authorized',
    exact:false,
    component: lazy(() => import('./index'))
}