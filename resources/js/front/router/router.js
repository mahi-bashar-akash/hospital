import {createRouter, createWebHistory} from "vue-router";

/*
|------------------------------------------------
|---- front Pages -------------------------------
|------------------------------------------------
*/

import frontLayout from "../layout/layout.vue";
import home from "../pages/home/home.vue";
import doctor from "../pages/doctor/doctor.vue";
import singleDoctor from "../pages/doctor/single-doctor.vue";
import department from "../pages/department/department.vue";
import singleDepartment from "../pages/department/single-department.vue";
import service from "../pages/service/service.vue";
import singleService from "../pages/service/single-service.vue";
import event from "../pages/event/event.vue";
import singleEvent from "../pages/event/single-event.vue";
import blog from "../pages/blog/blog.vue";
import singleBlog from "../pages/blog/single-blog.vue";
import contact from "../pages/contact/contact.vue";
import gallery from "../pages/gallery/gallery.vue";
import appointment from "../pages/schedule/appointment.vue";
import schedules from "../pages/schedule/schedules.vue";

const title = window.core.APP_NAME
const front_root_url = "/";
const routes = [
    {
        path: front_root_url, name: 'adminLayout', component: frontLayout,
        children: [
            { path: front_root_url + 'home', name: 'home', component: home, meta: { title: title + ' - home' } },
            { path: front_root_url + 'doctor', name: 'doctor', component: doctor, meta: { title: title + ' - doctor' } },
            { path: front_root_url + 'doctor/single', name: 'singleDoctor', component: singleDoctor, meta: { title: title + ' - doctor' } },
            { path: front_root_url + 'department', name: 'department', component: department, meta: { title: title + ' - department' } },
            { path: front_root_url + 'department/single', name: 'singleDepartment', component: singleDepartment, meta: { title: title + ' - department' } },
            { path: front_root_url + 'service', name: 'service', component: service, meta: { title: title + ' - service' } },
            { path: front_root_url + 'service/single', name: 'singleService', component: singleService, meta: { title: title + ' - service' } },
            { path: front_root_url + 'event', name: 'event', component: event, meta: { title: title + ' - event' } },
            { path: front_root_url + 'event/single', name: 'singleEvent', component: singleEvent, meta: { title: title + ' - event' } },
            { path: front_root_url + 'blog', name: 'blog', component: blog, meta: { title: title + ' - blog' } },
            { path: front_root_url + 'blog/single', name: 'singleBlog', component: singleBlog, meta: { title: title + ' - blog' } },
            { path: front_root_url + 'contact', name: 'contact', component: contact, meta: { title: title + ' - contact' } },
            { path: front_root_url + 'gallery', name: 'gallery', component: gallery, meta: { title: title + ' - gallery' } },
            { path: front_root_url + 'appointment', name: 'appointment', component: appointment, meta: { title: title + ' - appointment' } },
            { path: front_root_url + 'schedules', name: 'schedules', component: schedules, meta: { title: title + ' - schedules' } },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition) {
        if(to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }else {
            return { top: 0, behavior: 'smooth' };
        }
    }
})

export default router;
