<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Gallery
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
                <router-link :to="{name: 'gallery'}" class="text-light-gray text-decoration-none">
                    Gallery
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
            <button type="button" class="btn rounded-0 px-3 btn-category" v-for="each in category">
                {{each.category}}
            </button>
        </div>

        <div class="mt-4">

            <!-- doctor data list -->
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray" v-for="each in galleryDataList">
                    <div class="border bg-white">
                        <img :src="each.filePath" class="img-fluid object-fit-cover w-100 hpx-250" :alt="`gallery `+each.id">
                        <div class="ps-3 pt-3 fw-medium">
                            <div class="truncate-to-1-line">
                                {{each.name}}
                            </div>
                        </div>
                        <div class="ps-3 py-3">
                            {{each.category}}
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
            category: [
                { id: '1', category: 'Facility' },
                { id: '2', category: 'Hospital' },
                { id: '3', category: 'Services' },
            ],
            galleryDataList: [
                { id: '', filePath: '/images/doctor/doctor-1.jpg', category: 'Facility', name: 'Inpatient room' },
                { id: '', filePath: '/images/doctor/doctor-2.jpg', category: 'Services', name: 'Nephrologist care' },
                { id: '', filePath: '/images/doctor/doctor-3.jpg', category: 'Services', name: 'Prenatal Care ' },
                { id: '', filePath: '/images/doctor/doctor-4.jpg', category: 'Services', name: 'Prenatal Care ' },
                { id: '', filePath: '/images/doctor/doctor-5.jpg', category: 'Facility', name: 'DNA Diagnostic Lab ' },
                { id: '', filePath: '/images/doctor/doctor-6.jpg', category: 'Services', name: 'Pediatrician Clinic ' },
                { id: '', filePath: '/images/doctor/doctor-7.jpg', category: 'Services', name: 'Radiology Clinic ' },
                { id: '', filePath: '/images/doctor/doctor-8.jpg', category: 'Services', name: 'Pediatrician Clinic ' },
            ]
        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>
