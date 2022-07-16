import { lazy } from "react";
export default {
    path:'/admin-profile/manager-id/:managerId/tab-current/:tabCurrent',
    exact:true,
    component: lazy(() => import('./index'))
}