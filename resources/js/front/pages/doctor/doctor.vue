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
            <button type="button" class="btn rounded-0 px-3 btn-category" v-for="each in category">
                {{each.category}}
            </button>
        </div>

        <div class="mt-4">

            <!-- doctor data list -->
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray" v-for="each in doctorDataList">
                    <div class="border bg-white h-100">
                        <img :src="each.filePath" class="img-fluid object-fit-cover w-100 hpx-250" :alt="`doctor `+each.id">
                        <div class="px-3 pt-3 fw-medium text-theme">
                            <div class="truncate-to-1-line">
                                {{each.name}}
                            </div>
                        </div>
                        <div class="px-3 pt-3 small">
                            {{each.profession}}
                        </div>
                        <div class="px-3 py-3">
                            <div class="truncate-to-2-line">
                                {{each.description}}
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
