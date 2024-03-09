<template>

    <div class="panel">

        <!-- sidebar -->
        <div class="sidebar">
            <div class="sidebar-header">
                <a href="javascript:void(0)" class="sidebar-header-link">
                    <span class="res-link fw-bold">H</span>
                    <span class="text-link">Hospital</span>
                </a>
                <button type="button" class="btn btn-icon sidebar-close border-0">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="sidebar-body">
                <a href="javascript:void(0)" class="sidebar-body-link">
                    <i class="bi bi-speedometer"></i>
                    <span class="ms-2 text-link"> Dashboard </span>
                </a>
                <a href="javascript:void(0)" class="sidebar-body-link">
                    <i class="bi bi-sliders"></i>
                    <span class="ms-2 text-link"> Slider management </span>
                </a>
                <a href="javascript:void(0)" class="sidebar-body-link">
                    <i class="bi bi-boxes"></i>
                    <span class="ms-2 text-link"> Box management </span>
                </a>
                <a href="javascript:void(0)" class="sidebar-body-link">
                    <i class="bi bi-heart-pulse"></i>
                    <span class="ms-2 text-link"> Doctors </span>
                </a>
                <a href="javascript:void(0)" class="sidebar-body-link">
                    <i class="bi bi-hearts"></i>
                    <span class="ms-2 text-link"> Feedbacks </span>
                </a>
                <a href="javascript:void(0)" class="sidebar-body-link">
                    <i class="bi bi-clipboard2-heart"></i>
                    <span class="ms-2 text-link"> Services </span>
                </a>
                <a href="javascript:void(0)" class="sidebar-body-link">
                    <i class="bi bi-postage"></i>
                    <span class="ms-2 text-link"> Blogs </span>
                </a>
                <a href="javascript:void(0)" class="sidebar-body-link">
                    <i class="bi bi-calendar-event"></i>
                    <span class="ms-2 text-link"> Events </span>
                </a>
                <a href="javascript:void(0)" class="sidebar-body-link">
                    <i class="bi bi-bookmark"></i>
                    <span class="ms-2 text-link"> Departments </span>
                </a>
            </div>
        </div>

        <div class="content">

            <!-- content header -->
            <div class="content-header">

                <div class="container-fluid">
                    <div class="content-header-inner">
                        <button type="button" class="btn btn-icon sidebar-toggle border-0">
                            <i class="bi bi-justify-left"></i>
                        </button>
                        <div class="d-flex justify-content-end align-items-center">
                            <button type="button" class="btn btn-icon border-0 ms-2">
                                <i class="bi bi-envelope"></i>
                            </button>
                            <button type="button" class="btn btn-icon border-0 ms-2">
                                <i class="bi bi-bell"></i>
                            </button>

                            <div class="dropdown">
                                <button type="button" class="btn border-0 btn-user" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img :src="`assets/avatar/avatar.png`" class="user-image rounded-circle" alt="avatar">
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end p-0 mt-3 me-2 overflow-hidden shadow border-0">
                                    <li>
                                        <a href="javascript:void(0)" class="dropdown-item px-3 py-2">
                                            <i class="bi bi-person me-2"></i> Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="dropdown-item px-3 py-2">
                                            <i class="bi bi-gear me-2"></i> Settings
                                        </a>
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

                <router-view/>

            </div>

        </div>

    </div>

</template>

<script>

export default {

    data(){

        return{



        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>
