<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Events
            </div>
        </div>
    </div>

    <div class="container pt-5">

        <!-- breadcrumb -->
        <div class="breadcrumb">
            <div class="breadcrumb-item">
                <router-link :to="{name: 'home'}" class="text-light-gray text-decoration-none">
                    Home
                </router-link>
            </div>
            <div class="breadcrumb-item">
                <router-link :to="{name: 'doctor'}" class="text-light-gray text-decoration-none">
                    Events
                </router-link>
            </div>
        </div>

    </div>

    <div class="container py-5">

        <!-- service data list -->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

            <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                <div class="border bg-white">
                    <img :src="`/images/department/department-1.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                    <div class="ps-3 pt-3"> Department name</div>
                    <div class="ps-3 py-3"> Description</div>
                </div>
            </a>

            <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                <div class="border bg-white">
                    <img :src="`/images/department/department-2.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                    <div class="ps-3 pt-3"> Department name</div>
                    <div class="ps-3 py-3"> Description</div>
                </div>
            </a>

            <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                <div class="border bg-white">
                    <img :src="`/images/department/department-3.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                    <div class="ps-3 pt-3"> Department name</div>
                    <div class="ps-3 py-3"> Description</div>
                </div>
            </a>

            <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                <div class="border bg-white">
                    <img :src="`/images/department/department-4.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                    <div class="ps-3 pt-3"> Department name</div>
                    <div class="ps-3 py-3"> Description</div>
                </div>
            </a>

            <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                <div class="border bg-white">
                    <img :src="`/images/department/department-5.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                    <div class="ps-3 pt-3"> Department name</div>
                    <div class="ps-3 py-3"> Description</div>
                </div>
            </a>

            <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                <div class="border bg-white">
                    <img :src="`/images/department/department-6.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                    <div class="ps-3 pt-3"> Department name</div>
                    <div class="ps-3 py-3"> Description</div>
                </div>
            </a>

            <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                <div class="border bg-white">
                    <img :src="`/images/department/department-7.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                    <div class="ps-3 pt-3"> Department name</div>
                    <div class="ps-3 py-3"> Description</div>
                </div>
            </a>

            <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                <div class="border bg-white">
                    <img :src="`/images/department/department-8.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                    <div class="ps-3 pt-3"> Department name</div>
                    <div class="ps-3 py-3"> Description</div>
                </div>
            </a>

        </div>
    </div>

</template>

<script>

export default {

    data() {

        return {
            imageUrl: '/images/breadcrumb.jpg',
        }

    },

    mounted() {


    },

    methods: {}

}

</script>
