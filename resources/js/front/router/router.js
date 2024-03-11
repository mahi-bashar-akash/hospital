import {createRouter, createWebHistory} from "vue-router";

/*
|--------------------------------------------------------------------------
|---- front Pages ---------------------------------------------------------
|--------------------------------------------------------------------------
*/

import frontLayout from "../layout/layout.vue";
import index from "../pages/index.vue";
import doctor from "../pages/doctor.vue";
import department from "../pages/department.vue";
import service from "../pages/service.vue";
import event from "../pages/event.vue";
import blog from "../pages/blog.vue";
import contact from "../pages/contact.vue";
import gallery from "../pages/gallery.vue";
import appointment from "../pages/appointment.vue";

const title = window.core.APP_NAME
const front_root_url = "/";
const routes = [
    {
        path: front_root_url, name: 'adminLayout', component: frontLayout,
        children: [
            { path: front_root_url + 'home', name: 'home', component: index, meta: { title: title + ' - home' } },
            { path: front_root_url + 'doctor', name: 'doctor', component: doctor, meta: { title: title + ' - doctor' } },
            { path: front_root_url + 'department', name: 'department', component: department, meta: { title: title + ' - department' } },
            { path: front_root_url + 'service', name: 'service', component: service, meta: { title: title + ' - service' } },
            { path: front_root_url + 'event', name: 'event', component: event, meta: { title: title + ' - event' } },
            { path: front_root_url + 'blog', name: 'blog', component: blog, meta: { title: title + ' - blog' } },
            { path: front_root_url + 'contact', name: 'contact', component: contact, meta: { title: title + ' - contact' } },
            { path: front_root_url + 'gallery', name: 'gallery', component: gallery, meta: { title: title + ' - gallery' } },
            { path: front_root_url + 'appointment', name: 'appointment', component: appointment, meta: { title: title + ' - appointment' } },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
