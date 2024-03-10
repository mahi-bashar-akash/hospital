import {createRouter, createWebHistory} from "vue-router";

/*
|--------------------------------------------------------------------------
|---- front Pages ---------------------------------------------------------
|--------------------------------------------------------------------------
*/

import frontLayout from "../layout/layout.vue";
import index from "../pages/index.vue";

const title = window.core.APP_NAME
const front_root_url = "/";
const routes = [
    {
        path: front_root_url, name: 'adminLayout', component: frontLayout,
        children: [
            { path: front_root_url + 'home', name: 'home', component: index, meta: { title: title + ' - home' } },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
