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
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">

                <router-link :to="{name: 'singleDoctor'}" class="p-3 text-decoration-none text-light-gray" v-for="each in doctorDataList">
                    <div class="border bg-white h-100">
                        <img :src="each.filePath" class="img-fluid object-fit-cover w-100 hpx-250" :alt="`doctor `+each.id">
                        <div class="px-3 pt-3 fw-medium text-theme">
                            <div class="truncate-to-1-line">
                                {{each.name}}
                            </div>
                        </div>
                        <div class="px-3 py-1 small">
                            {{each.profession}}
                        </div>
                        <div class="px-3 pb-3">
                            <div class="truncate-to-2-line">
                                {{each.description}}
                            </div>
                        </div>
                    </div>
                </router-link>

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
                { id: '1', category: 'Cardiology' },
                { id: '2', category: 'Dental' },
                { id: '3', category: 'Neurologist' },
                { id: '4', category: 'Pediatric' },
                { id: '5', category: 'Pulmonary' },
                { id: '6', category: 'Traumatology' },
                { id: '7', category: 'Urology' },
                { id: '8', category: 'Xray' },
            ],
            doctorDataList: [
                { id: '1', filePath: '/images/doctor/doctor-1.jpg', name: 'Doctor name', profession: 'Cardiology', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '2', filePath: '/images/doctor/doctor-2.jpg', name: 'Doctor name', profession: 'Dental', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '3', filePath: '/images/doctor/doctor-3.jpg', name: 'Doctor name', profession: 'Neurologist', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '4', filePath: '/images/doctor/doctor-4.jpg', name: 'Doctor name', profession: 'Pediatric', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '5', filePath: '/images/doctor/doctor-5.jpg', name: 'Doctor name', profession: 'Pulmonary', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '6', filePath: '/images/doctor/doctor-6.jpg', name: 'Doctor name', profession: 'Traumatology', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '7', filePath: '/images/doctor/doctor-7.jpg', name: 'Doctor name', profession: 'Urology', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '8', filePath: '/images/doctor/doctor-8.jpg', name: 'Doctor name', profession: 'Xray', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '9', filePath: '/images/doctor/doctor-9.jpg', name: 'Doctor name', profession: 'Cardiology', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '10', filePath: '/images/doctor/doctor-10.jpg', name: 'Doctor name', profession: 'Urology', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '11', filePath: '/images/doctor/doctor-11.jpg', name: 'Doctor name', profession: 'Xray', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '12', filePath: '/images/doctor/doctor-12.jpg', name: 'Doctor name', profession: 'Pulmonary', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '13', filePath: '/images/doctor/doctor-13.jpg', name: 'Doctor name', profession: 'Traumatology', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '14', filePath: '/images/doctor/doctor-14.jpg', name: 'Doctor name', profession: 'Pulmonary', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '14', filePath: '/images/doctor/doctor-15.jpg', name: 'Doctor name', profession: 'Dental', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '14', filePath: '/images/doctor/doctor-16.jpg', name: 'Doctor name', profession: 'Dental', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
            ],
        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>
