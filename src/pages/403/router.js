import { lazy } from "react";
export default {
    path:'/not-authorized',
    exact:true,
    component: lazy(() => import('./index'))
}