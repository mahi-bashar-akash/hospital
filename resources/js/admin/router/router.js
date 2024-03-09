import {createRouter, createWebHistory} from "vue-router";

/*
|--------------------------------------------------------------------------
|---- Admin Pages ---------------------------------------------------------
|--------------------------------------------------------------------------
*/

import layout from "../layout/layout.vue";
import dashboard from "../pages/dashboard/dashboard.vue";
import slider from "../pages/slider/slider.vue";
import box from "../pages/box/box.vue";
import doctor from "../pages/doctor/doctor.vue";
import feedback from "../pages/feedback/feedback.vue";
import service from "../pages/service/service.vue";
import blog from "../pages/blog/blog.vue";
import event from "../pages/event/event.vue";
import department from "../pages/department/department.vue";
import profile from "../pages/profile/profile.vue";
import settings from "../pages/settings/settings.vue";

const title = window.core.APP_NAME
const root_url = "/admin";
const routes = [
    {
        path: root_url, name: 'layout', component: layout,
        children: [
            { path: root_url + '/dashboard', name: 'dashboard', component: dashboard, meta: { title: title + ' - dashboard' } },
            { path: root_url + '/slider', name: 'slider', component: slider, meta: { title: title + ' - slider' } },
            { path: root_url + '/box', name: 'box', component: box, meta: { title: title + ' - box' } },
            { path: root_url + '/doctor', name: 'doctor', component: doctor, meta: { title: title + ' - doctor' } },
            { path: root_url + '/feedback', name: 'feedback', component: feedback, meta: { title: title + ' - feedback' } },
            { path: root_url + '/service', name: 'service', component: service, meta: { title: title + ' - service' } },
            { path: root_url + '/blog', name: 'blog', component: blog, meta: { title: title + ' - blog' } },
            { path: root_url + '/event', name: 'event', component: event, meta: { title: title + ' - event' } },
            { path: root_url + '/department', name: 'department', component: department, meta: { title: title + ' - department' } },
            { path: root_url + '/profile', name: 'profile', component: profile, meta: { title: title + ' - profile' } },
            { path: root_url + '/settings', name: 'settings', component: settings, meta: { title: title + ' - settings' } },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
