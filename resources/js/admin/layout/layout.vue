<template>

    <div class="panel">

        <!-- sidebar -->
        <div class="sidebar" :class="{active: sidebarToggle}">

            <!-- sidebar header -->
            <div class="sidebar-header">
                <router-link :to="{name: 'dashboard'}" class="sidebar-header-link" @click="sideBarToggle()">
                    <span class="res-link fw-bold">H</span>
                    <span class="text-link">Hospital</span>
                </router-link>
                <button type="button" class="btn btn-icon sidebar-close border-0" @click="sideBarToggle()">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>

            <!-- sidebar body -->
            <div class="sidebar-body">
                <router-link :to="{name: 'dashboard'}" class="sidebar-body-link" @click="sideBarToggle()">
                    <i class="bi bi-speedometer"></i>
                    <span class="ms-2 text-link">
                        Dashboard
                    </span>
                </router-link>
                <router-link :to="{name: 'slider'}" class="sidebar-body-link" @click="sideBarToggle()">
                    <i class="bi bi-sliders"></i>
                    <span class="ms-2 text-link">
                        Slider
                    </span>
                </router-link>
                <router-link :to="{name: 'box'}" class="sidebar-body-link" @click="sideBarToggle()">
                    <i class="bi bi-boxes"></i>
                    <span class="ms-2 text-link">
                        Box
                    </span>
                </router-link>
                <router-link :to="{name: 'doctor'}" class="sidebar-body-link" @click="sideBarToggle()">
                    <i class="bi bi-heart-pulse"></i>
                    <span class="ms-2 text-link">
                        Doctors
                    </span>
                </router-link>
                <router-link :to="{name: 'feedback'}" class="sidebar-body-link" @click="sideBarToggle()">
                    <i class="bi bi-hearts"></i>
                    <span class="ms-2 text-link">
                        Feedbacks
                    </span>
                </router-link>
                <router-link :to="{name: 'service'}" class="sidebar-body-link" @click="sideBarToggle()">
                    <i class="bi bi-clipboard2-heart"></i>
                    <span class="ms-2 text-link">
                        Services
                    </span>
                </router-link>
                <router-link :to="{name: 'blog'}" class="sidebar-body-link" @click="sideBarToggle()">
                    <i class="bi bi-postage"></i>
                    <span class="ms-2 text-link">
                        Blogs
                    </span>
                </router-link>
                <router-link :to="{name: 'event'}" class="sidebar-body-link" @click="sideBarToggle()">
                    <i class="bi bi-calendar-event"></i>
                    <span class="ms-2 text-link">
                        Events
                    </span>
                </router-link>
                <router-link :to="{name: 'department'}" class="sidebar-body-link" @click="sideBarToggle()">
                    <i class="bi bi-bookmark"></i>
                    <span class="ms-2 text-link">
                        Departments
                    </span>
                </router-link>
            </div>

        </div>

        <div class="content">

            <!-- content header -->
            <div class="content-header">

                <div class="container-fluid">

                    <div class="content-header-inner">

                        <!-- sidebar toggle -->
                        <button type="button" class="btn btn-icon border-0" @click="sideBarToggle">
                            <i class="bi bi-justify-left"></i>
                        </button>

                        <!-- group of buttons -->
                        <div class="d-flex justify-content-end align-items-center">
                            <button type="button" class="btn btn-icon border-0 ms-2">
                                <i class="bi bi-envelope"></i>
                            </button>

                            <button type="button" class="btn btn-icon border-0 ms-2">
                                <i class="bi bi-bell"></i>
                            </button>

                            <!-- dropdown-menu -->
                            <div class="dropdown">
                                <button type="button" class="btn border-0 btn-user" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img :src="`/images/avatar/avatar.png`" class="user-image rounded-circle" alt="avatar">
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end p-0 mt-3 me-2 overflow-hidden shadow border-0">
                                    <li>
                                        <router-link :to="{name: 'profile'}" class="dropdown-item px-3 py-2">
                                            <i class="bi bi-person me-2"></i> Profile
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name: 'settings'}" class="dropdown-item px-3 py-2">
                                            <i class="bi bi-gear me-2"></i> Settings
                                        </router-link>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="dropdown-item px-3 py-2">
                                            <i class="bi bi-box-arrow-right me-2"></i> Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- content body -->
            <div class="content-body p-3">

                <div class="container-fluid">

                    <router-view/>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {

    data(){

        return{

            sidebarToggle: false,

        }

    },

    mounted() {



    },

    methods: {

        sideBarToggle() {
            this.sidebarToggle = !this.sidebarToggle;
        }

    }

}

</script>
