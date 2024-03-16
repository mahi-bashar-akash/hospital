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
            <div class="breadcrumb-item">
                <div class="text-light-gray text-decoration-none fw-medium text-truncate">
                    Dr.Veranda Tanumihardja
                </div>
            </div>
        </div>

    </div>

    <section class="w-100">
        <div class="container text-light-gray">
            <div class="row">
                <div class="col-lg-4 my-4">
                    <img :src="`/images/doctor/doctor-1.jpg`" class="img-fluid w-100 object-fit-cover" alt="department">
                </div>
                <div class="col-lg-4 my-4">
                    <div class="fs-3 fw-medium">
                        Dr.Veranda Tanumihardja
                    </div>
                    <div class="mt-2 small fw-medium">
                        Pulmonary
                    </div>
                    <div class="mt-3">
                        Veranda was born and raised in Jakarta, Indonesia. He graduated from the University of
                        Singapore, where he completed is bachelor’s degree. His admission to the State Bar of
                        California took place on the 25th of November, 1985.
                        <br><br>
                        Weebles wobble but they don’t fall down. Weebles are around, don’t fall down! Weeble wobble,
                        Weeble wobble, Weeble wobble, Weeble wobble, Weeble wobble, Weeble wobble. Don’t fall down!
                    </div>
                    <div class="mt-3">
                        <i class="bi bi-envelope me-2"></i> cardiologi@hospitalplus.com
                    </div>
                    <div class="mt-3">
                        <i class="bi bi-phone me-2"></i> +1 600 200 111
                    </div>
                    <div class="mt-3">
                        <i class="bi bi-phone me-2"></i> +1 600 200 112
                    </div>
                    <div class="mt-3">
                        <a href="javascript:void(0)" class="text-decoration-none text-light-gray me-3">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="javascript:void(0)" class="text-decoration-none text-light-gray me-3">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="javascript:void(0)" class="text-decoration-none text-light-gray me-3">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="javascript:void(0)" class="text-decoration-none text-light-gray me-3">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="javascript:void(0)" class="text-decoration-none text-light-gray">
                            <i class="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 my-4">
                    <div class="bg-white text-light-gray">
                        <div class="fw-medium border-bottom pb-3">
                            Other doctors
                        </div>
                        <a href="javascript:void(0)" class="text-light-gray d-flex align-items-center justify-content-between text-decoration-none py-2 ps-3 w-100">
                            <span> <i class="bi bi-chevron-right me-1"></i> Dr.Veranda Tanumihardja </span>
                            <span class="badge text-light-gray px-2"> Pulmonary </span>
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray bg-light-theme text-decoration-none d-flex justify-content-between align-items-center py-2 ps-3 w-100">
                            <span>
                                Dr. Kathryn Wood
                            </span>
                            <span class="badge text-light-gray px-2"> Pediatric </span>
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray text-decoration-none d-flex justify-content-between align-items-center py-2 ps-3 w-100">
                            <span>
                                Dr. John Allen
                            </span>
                            <span class="badge text-light-gray px-2"> Urology </span>
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray bg-light-theme text-decoration-none d-flex justify-content-between align-items-center py-2 ps-3 w-100">
                            <span>
                                Neurologist
                            </span>
                            <span class="badge text-light-gray px-2"> Pulmonary </span>
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray text-decoration-none d-flex justify-content-between align-items-center py-2 ps-3 w-100">
                            <span>
                                Pediatric
                            </span>
                            <span class="badge text-light-gray px-2"> Traumatology </span>
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray bg-light-theme text-decoration-none d-flex justify-content-between align-items-center py-2 ps-3 w-100">
                            <span>
                                Traumatology
                            </span>
                            <span class="badge text-light-gray px-2"> Pulmonary </span>
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray text-decoration-none d-flex justify-content-between align-items-center py-2 ps-3 w-100">
                            <span>
                                Xray
                            </span>
                            <span class="badge text-light-gray px-2"> Urology </span>
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray bg-light-theme text-decoration-none d-flex justify-content-between align-items-center py-2 ps-3 w-100">
                            <span>
                                Pulmonary
                            </span>
                            <span class="badge text-light-gray px-2"> Traumatology </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-100 mt-3 mt-md-5 mb-4">
        <div class="container">
            <div class="mb-3 fs-4 fw-medium text-light-gray">Other Doctors</div>
            <div class="other-doctor-carousel owl-carousel owl-theme">
                <div v-for="each in doctorDataList">
                    <div class="item">
                        <div class="border p-0 h-100">
                            <a href="javascript:void(0)" class="h-100 p-0 text-decoration-none">
                                <img :src="each.filePath" class="img-fluid w-100 object-fit-cover hpx-250"
                                     :alt="`banner `+ each.id">
                                <div class="ps-3 py-2 fw-medium text-theme">
                                    <div class="truncate-to-1-line">
                                        {{ each.name }}
                                    </div>
                                </div>
                                <div class="ps-3 pb-2 text-light-gray">
                                    <div class="small">
                                        {{ each.profession }}
                                    </div>
                                </div>
                                <div class="p-3 pt-0 pb-2 text-light-gray">
                                    <div class="truncate-to-2-line">
                                        {{ each.description }}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

export default {
    data() {
        return {
            imageUrl: '/images/breadcrumb.jpg',
            doctorDataList: [
                {
                    id: '1',
                    filePath: '/images/doctor/doctor-1.jpg',
                    name: 'Dr. Natasha Isha',
                    profession: 'Cardiology',
                    description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...'
                },
                {
                    id: '2',
                    filePath: '/images/doctor/doctor-2.jpg',
                    name: 'Dr. Sifa Chufi',
                    profession: 'Dental',
                    description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...'
                },
                {
                    id: '3',
                    filePath: '/images/doctor/doctor-3.jpg',
                    name: 'Dr. Adrofi Asfa',
                    profession: 'Neurologist',
                    description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...'
                },
                {
                    id: '4',
                    filePath: '/images/doctor/doctor-4.jpg',
                    name: 'Dr. Nando Aldo',
                    profession: 'Pediatric',
                    description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...'
                },
                {
                    id: '5',
                    filePath: '/images/doctor/doctor-5.jpg',
                    name: 'Dr. Natasha Isha',
                    profession: 'Pulmonary',
                    description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...'
                },
                {
                    id: '6',
                    filePath: '/images/doctor/doctor-6.jpg',
                    name: 'Dr. Sifa Chufi',
                    profession: 'Traumatology',
                    description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...'
                },
                {
                    id: '7',
                    filePath: '/images/doctor/doctor-7.jpg',
                    name: 'Dr. Adrofi Asfa',
                    profession: 'Urology',
                    description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...'
                },
                {
                    id: '8',
                    filePath: '/images/doctor/doctor-8.jpg',
                    name: 'Dr. Nando Aldo',
                    profession: 'Xray',
                    description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...'
                },
            ]
        }
    },
    mounted() {
        this.otherDoctorCarousel()
    },
    methods: {

        /* Function to control related carousel */
        otherDoctorCarousel() {
            $('.other-doctor-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            })
        },

    }
}

</script>
