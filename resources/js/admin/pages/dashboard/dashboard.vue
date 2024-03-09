<template>

    <!-- breadcrumb -->
    <div class="d-flex align-items-center justify-content-start">
        <router-link :to="{name: 'dashboard'}" class="mb-2 text-light-gray breadcrumb-title text-decoration-none">
            Dashboard
        </router-link>
    </div>

    <div class="row">

        <!-- slider count -->
        <div class="mb-3 p-2 col-12 col-sm-6 col-xl-4 col-xxl-3">
            <router-link :to="{name: 'slider'}" class="card card-hover border-0 text-center text-decoration-none">
                <div class="card-body py-4 px-2">
                    <div class="mb-3 fs-4 d-block">
                        <i class="bi bi-sliders"></i>
                    </div>
                    <div class="mb-3 fs-6 effect">
                        Summary sliders
                    </div>
                    <div class="text-light-gray fs-4 d-block">
                        2250
                    </div>
                </div>
            </router-link>
        </div>

        <!-- box count -->
        <div class="p-2 col-12 col-sm-6 col-xl-4 col-xxl-3">
            <router-link :to="{name: 'box'}" class="card card-hover border-0 text-center text-decoration-none">
                <div class="card-body py-4 px-2">
                    <div class="mb-3 fs-4 d-block">
                        <i class="bi bi-boxes"></i>
                    </div>
                    <div class="mb-3 fs-6 effect">
                        Summary Boxes
                    </div>
                    <div class="text-light-gray fs-4 d-block">
                        2250
                    </div>
                </div>
            </router-link>
        </div>

        <!-- doctor count -->
        <div class="p-2 col-12 col-sm-6 col-xl-4 col-xxl-3">
            <router-link :to="{name: 'doctor'}" class="card card-hover border-0 text-center text-decoration-none">
                <div class="card-body py-4 px-2">
                    <div class="mb-3 fs-4 d-block">
                        <i class="bi bi-heart-pulse"></i>
                    </div>
                    <div class="mb-3 fs-6 effect">
                        Summary Doctors
                    </div>
                    <div class="text-light-gray fs-4 d-block">
                        2250
                    </div>
                </div>
            </router-link>
        </div>

        <!-- feedback count -->
        <div class="p-2 col-12 col-sm-6 col-xl-4 col-xxl-3">
            <router-link :to="{name: 'feedback'}" class="card card-hover border-0 text-center text-decoration-none">
                <div class="card-body py-4 px-2">
                    <div class="mb-3 fs-4 d-block">
                        <i class="bi bi-hearts"></i>
                    </div>
                    <div class="mb-3 fs-6 effect">
                        Summary Feedbacks
                    </div>
                    <div class="text-light-gray fs-4 d-block">
                        2250
                    </div>
                </div>
            </router-link>
        </div>

        <!-- service count -->
        <div class="p-2 col-12 col-sm-6 col-xl-4 col-xxl-3">
            <router-link :to="{name: 'service'}" class="card card-hover border-0 text-center text-decoration-none">
                <div class="card-body py-4 px-2">
                    <div class="mb-3 fs-4 d-block">
                        <i class="bi bi-clipboard2-heart"></i>
                    </div>
                    <div class="mb-3 fs-6 effect">
                        Summary Services
                    </div>
                    <div class="text-light-gray fs-4 d-block">
                        2250
                    </div>
                </div>
            </router-link>
        </div>

        <!-- blog count -->
        <div class="p-2 col-12 col-sm-6 col-xl-4 col-xxl-3">
            <router-link :to="{name: 'blog'}" class="card card-hover border-0 text-center text-decoration-none">
                <div class="card-body py-4 px-2">
                    <div class="mb-3 fs-4 d-block">
                        <i class="bi bi-postage"></i>
                    </div>
                    <div class="mb-3 fs-6 effect">
                        Summary Blogs
                    </div>
                    <div class="text-light-gray fs-4 d-block">
                        2250
                    </div>
                </div>
            </router-link>
        </div>

        <!-- event count -->
        <div class="p-2 col-12 col-sm-6 col-xl-4 col-xxl-3">
            <router-link :to="{name: 'event'}" class="card card-hover border-0 text-center text-decoration-none">
                <div class="card-body py-4 px-2">
                    <div class="mb-3 fs-4 d-block">
                        <i class="bi bi-calendar-event"></i>
                    </div>
                    <div class="mb-3 fs-6 effect">
                        Summary Events
                    </div>
                    <div class="text-light-gray fs-4 d-block">
                        2250
                    </div>
                </div>
            </router-link>
        </div>

        <!-- department count -->
        <div class="p-2 col-12 col-sm-6 col-xl-4 col-xxl-3">
            <router-link :to="{name: 'department'}" class="card card-hover border-0 text-center text-decoration-none">
                <div class="card-body py-4 px-2">
                    <div class="mb-3 fs-4 d-block">
                        <i class="bi bi-bookmark"></i>
                    </div>
                    <div class="mb-3 fs-6 effect">
                        Summary Departments
                    </div>
                    <div class="text-light-gray fs-4 d-block">
                        2250
                    </div>
                </div>
            </router-link>
        </div>

    </div>

</template>

<script>

export default {

    data(){

        return{}

    },

    mounted() {



    },

    methods: {

    }

}

</script>
