import {createRouter, createWebHistory} from "vue-router";

/*
|--------------------------------------------------------------------------
|---- Admin Auth Pages ----------------------------------------------------
|--------------------------------------------------------------------------
*/

import authLayout from "../auth/layout/layout.vue";
import login from "../auth/pages/login.vue";
import register from "../auth/pages/register.vue";
import forget from "../auth/pages/forget.vue";

/*
|--------------------------------------------------------------------------
|---- Admin Pages ---------------------------------------------------------
|--------------------------------------------------------------------------
*/

import adminLayout from "../admin/layout/layout.vue";
import dashboard from "../admin/pages/dashboard/dashboard.vue";
import slider from "../admin/pages/slider/slider.vue";
import sliderManage from "../admin/pages/slider/manage.vue";
import box from "../admin/pages/box/box.vue";
import boxManage from "../admin/pages/box/manage.vue";
import doctor from "../admin/pages/doctor/doctor.vue";
import doctorManage from "../admin/pages/doctor/manage.vue";
import feedback from "../admin/pages/feedback/feedback.vue";
import service from "../admin/pages/service/service.vue";
import serviceManage from "../admin/pages/service/manage.vue";
import blog from "../admin/pages/blog/blog.vue";
import blogManage from "../admin/pages/blog/manage.vue";
import event from "../admin/pages/event/event.vue";
import eventManage from "../admin/pages/event/manage.vue";
import department from "../admin/pages/department/department.vue";
import departmentManage from "../admin/pages/department/manage.vue";
import profile from "../admin/pages/profile/profile.vue";
import settings from "../admin/pages/settings/settings.vue";

const title = window.core.APP_NAME
const auth_root_url = "/admin/auth";
const admin_root_url = "/admin";
const routes = [
    {
        path: auth_root_url, name: 'authLayout', component: authLayout,
        children: [
            { path: auth_root_url + '/login', name: 'login', component: login, meta: { title: title + ' - login' } },
            { path: auth_root_url + '/register', name: 'register', component: register, meta: { title: title + ' - register' } },
            { path: auth_root_url + '/forget', name: 'forget', component: forget, meta: { title: title + ' - forget' } },
        ]
    },
    {
        path: admin_root_url, name: 'adminLayout', component: adminLayout,
        children: [
            { path: admin_root_url + '/dashboard', name: 'dashboard', component: dashboard, meta: { title: title + ' - dashboard' } },
            { path: admin_root_url + '/slider', name: 'slider', component: slider, meta: { title: title + ' - slider' } },
            { path: admin_root_url + '/manage-slider', name: 'sliderManage', component: sliderManage, meta: { title: title + ' - manage-slider' } },
            { path: admin_root_url + '/box', name: 'box', component: box, meta: { title: title + ' - box' } },
            { path: admin_root_url + '/manage-box', name: 'boxManage', component: boxManage, meta: { title: title + ' - manage-box' } },
            { path: admin_root_url + '/doctor', name: 'doctor', component: doctor, meta: { title: title + ' - doctor' } },
            { path: admin_root_url + '/manage-doctor', name: 'doctorManage', component: doctorManage, meta: { title: title + ' - manage-doctor' } },
            { path: admin_root_url + '/feedback', name: 'feedback', component: feedback, meta: { title: title + ' - feedback' } },
            { path: admin_root_url + '/service', name: 'service', component: service, meta: { title: title + ' - service' } },
            { path: admin_root_url + '/manage-service', name: 'serviceManage', component: serviceManage, meta: { title: title + ' - manage-service' } },
            { path: admin_root_url + '/blog', name: 'blog', component: blog, meta: { title: title + ' - blog' } },
            { path: admin_root_url + '/manage-blog', name: 'blogManage', component: blogManage, meta: { title: title + ' - manage-blog' } },
            { path: admin_root_url + '/event', name: 'event', component: event, meta: { title: title + ' - event' } },
            { path: admin_root_url + '/manage-event', name: 'eventManage', component: eventManage, meta: { title: title + ' - manage-event' } },
            { path: admin_root_url + '/department', name: 'department', component: department, meta: { title: title + ' - department' } },
            { path: admin_root_url + '/manage-department', name: 'departmentManage', component: departmentManage, meta: { title: title + ' - manage-department' } },
            { path: admin_root_url + '/profile', name: 'profile', component: profile, meta: { title: title + ' - profile' } },
            { path: admin_root_url + '/settings', name: 'settings', component: settings, meta: { title: title + ' - settings' } },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
