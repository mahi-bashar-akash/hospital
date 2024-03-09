import {createRouter, createWebHistory} from "vue-router";

/*
|--------------------------------------------------------------------------
|---- Admin Pages ---------------------------------------------------------
|--------------------------------------------------------------------------
*/

import layout from "../layout/layout.vue";
import dashboard from "../pages/dashboard.vue";

const title = window.core.APP_NAME
const root_url = "/admin";
const auth_root_url = "/admin/auth";
const routes = [

    /* Admin panel */
    {
        path: root_url, name: 'layout', component: layout,
        children: [
            { path: root_url + '/dashboard', name: 'dashboard', component: dashboard, meta: { title: title + ' - dashboard' } },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
