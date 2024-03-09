import {createRouter, createWebHistory} from "vue-router";

/*
|--------------------------------------------------------------------------
|---- Admin Pages ---------------------------------------------------------
|--------------------------------------------------------------------------
*/

import layout from "../layout/layout.vue";
import dashboard from "../pages/dashboard/dashboard.vue";
import slider from "../pages/slider/slider.vue";
import sliderManage from "../pages/slider/manage.vue";
import box from "../pages/box/box.vue";
import boxManage from "../pages/box/manage.vue";
import doctor from "../pages/doctor/doctor.vue";
import doctorManage from "../pages/doctor/manage.vue";
import feedback from "../pages/feedback/feedback.vue";
import service from "../pages/service/service.vue";
import serviceManage from "../pages/service/manage.vue";
import blog from "../pages/blog/blog.vue";
import blogManage from "../pages/blog/manage.vue";
import event from "../pages/event/event.vue";
import eventManage from "../pages/event/manage.vue";
import department from "../pages/department/department.vue";
import departmentManage from "../pages/department/manage.vue";
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
            { path: root_url + '/manage-slider', name: 'sliderManage', component: sliderManage, meta: { title: title + ' - manage-slider' } },
            { path: root_url + '/box', name: 'box', component: box, meta: { title: title + ' - box' } },
            { path: root_url + '/manage-box', name: 'boxManage', component: boxManage, meta: { title: title + ' - manage-box' } },
            { path: root_url + '/doctor', name: 'doctor', component: doctor, meta: { title: title + ' - doctor' } },
            { path: root_url + '/manage-doctor', name: 'doctorManage', component: doctorManage, meta: { title: title + ' - manage-doctor' } },
            { path: root_url + '/feedback', name: 'feedback', component: feedback, meta: { title: title + ' - feedback' } },
            { path: root_url + '/service', name: 'service', component: service, meta: { title: title + ' - service' } },
            { path: root_url + '/manage-service', name: 'serviceManage', component: serviceManage, meta: { title: title + ' - manage-service' } },
            { path: root_url + '/blog', name: 'blog', component: blog, meta: { title: title + ' - blog' } },
            { path: root_url + '/manage-blog', name: 'blogManage', component: blogManage, meta: { title: title + ' - manage-blog' } },
            { path: root_url + '/event', name: 'event', component: event, meta: { title: title + ' - event' } },
            { path: root_url + '/manage-event', name: 'eventManage', component: eventManage, meta: { title: title + ' - manage-event' } },
            { path: root_url + '/department', name: 'department', component: department, meta: { title: title + ' - department' } },
            { path: root_url + '/manage-department', name: 'departmentManage', component: departmentManage, meta: { title: title + ' - manage-department' } },
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
