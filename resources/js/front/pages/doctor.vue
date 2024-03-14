<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Doctors
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
                    Doctors
                </router-link>
            </div>
        </div>

    </div>

    <div class="container py-5">

        <!-- filter -->
        <div class="d-flex align-items-center justify-content-md-center">
            <button type="button" class="btn rounded-0 px-3 btn-category active">
                All
            </button>
            <button type="button" class="btn rounded-0 px-3 btn-category">
                Cardiology
            </button>
            <button type="button" class="btn rounded-0 px-3 btn-category">
                Dental
            </button>
            <button type="button" class="btn rounded-0 px-3 btn-category">
                Neurologist
            </button>
            <button type="button" class="btn rounded-0 px-3 btn-category">
                Pediatric
            </button>
            <button type="button" class="btn rounded-0 px-3 btn-category">
                Pulmonary
            </button>
            <button type="button" class="btn rounded-0 px-3 btn-category">
                Traumatology
            </button>
            <button type="button" class="btn rounded-0 px-3 btn-category">
                Urology
            </button>
            <button type="button" class="btn rounded-0 px-3 btn-category">
                Xray
            </button>
        </div>

        <div class="mt-4">

            <!-- doctor data list -->
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-1.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Natasha Isha
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Pulmonary
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-2.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Sifa Chufi
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Dental
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-3.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Adrofi Asfa
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Neurologist
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-4.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Nando Aldo
                            </div>
                        </div>
                        <div class="px-3 pt-3">
                            Xray
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-5.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Natasha Isha
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Pulmonary
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-6.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Sifa Chufi
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Dental
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-7.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Adrofi Asfa
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Neurologist
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-8.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Nando Aldo
                            </div>
                        </div>
                        <div class="px-3 pt-3">
                            Xray
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-9.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Natasha Isha
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Pulmonary
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-10.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Sifa Chufi
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Dental
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-11.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Adrofi Asfa
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Neurologist
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-12.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Nando Aldo
                            </div>
                        </div>
                        <div class="px-3 pt-3">
                            Xray
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-13.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Natasha Isha
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Pulmonary
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-14.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Sifa Chufi
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Dental
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-15.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Adrofi Asfa
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            Neurologist
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white h-100">
                        <img :src="`/images/doctor/doctor-16.jpg`" class="img-fluid object-fit-cover w-100" style="height: 250px" alt="doctor">
                        <div class="px-3 pt-3 fw-semibold text-theme">
                            <div class="truncate-to-1-line">
                                Dr. Nando Aldo
                            </div>
                        </div>
                        <div class="px-3 pt-3">
                            Xray
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.
                            </div>
                        </div>
                    </div>
                </a>

            </div>

        </div>

    </div>

</template>

<script>

export default {

    data(){

        return{
            imageUrl: '/images/breadcrumb.jpg',
        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>
