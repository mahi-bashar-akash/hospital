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

        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-md-6">
                        <!-- sort -->
                        <select name="sort" class="form-select" autocomplete="new-select-sort">
                            <option value="">Select Option</option>
                            <option value="">A - Z</option>
                            <option value="">Z - A</option>
                            <option value="">New</option>
                            <option value="">Old</option>
                            <option value="">Online available</option>
                            <option value="">Coming soon</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <!-- search -->
                        <div class="position-relative">
                            <input type="text" name="keyword" class="form-control ps-5" required autocomplete="new-search-here" placeholder="Search here">
                            <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-md-6">

                    </div>
                    <div class="col-md-6">
                        <!-- filter -->
                        <select name="category" class="form-select" required autocomplete="new-category">
                            <option value="all">All</option>
                            <option v-for="each in category" :value="each.category">{{each.category}}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4">

            <!-- doctor data list -->
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

                <a href="javascript:void(0)" class="pb-3 text-decoration-none" v-for="each in galleryDataList">
                    <div class="border bg-white">
                        <img :src="each.filePath" class="img-fluid object-fit-cover w-100 hpx-250" :alt="`gallery `+each.id">
                        <div class="ps-3 pt-3 fw-medium text-theme">
                            <div class="truncate-to-1-line">
                                {{each.name}}
                            </div>
                        </div>
                        <div class="ps-3 pb-3 text-secondary text-opacity-75">
                            {{each.category}}
                        </div>
                    </div>
                </a>

            </div>

            <!-- pagination -->
            <nav aria-label="Page navigation example" class="mt-5">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0)">
                            <i class="bi bi-chevron-left"></i>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0)">
                            1
                        </a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="javascript:void(0)">
                            2
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0)">
                            3
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0)">
                            <i class="bi bi-chevron-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>

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
                { id: '1', filePath: '/images/doctor/doctor-1.jpg', category: 'Facility', name: 'Inpatient room' },
                { id: '2', filePath: '/images/doctor/doctor-2.jpg', category: 'Services', name: 'Nephrologist care' },
                { id: '3', filePath: '/images/doctor/doctor-3.jpg', category: 'Services', name: 'Prenatal Care ' },
                { id: '4', filePath: '/images/doctor/doctor-4.jpg', category: 'Services', name: 'Prenatal Care ' },
                { id: '5', filePath: '/images/doctor/doctor-5.jpg', category: 'Facility', name: 'DNA Diagnostic Lab ' },
                { id: '6', filePath: '/images/doctor/doctor-6.jpg', category: 'Services', name: 'Pediatrician Clinic ' },
                { id: '7', filePath: '/images/doctor/doctor-7.jpg', category: 'Services', name: 'Radiology Clinic ' },
                { id: '8', filePath: '/images/doctor/doctor-8.jpg', category: 'Services', name: 'Pediatrician Clinic ' },
            ]
        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>
