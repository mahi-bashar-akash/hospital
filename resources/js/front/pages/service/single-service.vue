<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Services
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
                <router-link :to="{name: 'service'}" class="text-light-gray text-decoration-none">
                    Services
                </router-link>
            </div>
            <div class="breadcrumb-item">
                <div class="text-light-gray text-decoration-none fw-medium text-truncate">
                    Nephrologist Care
                </div>
            </div>
        </div>

    </div>

    <section class="w-100">
        <div class="container text-light-gray">
            <div class="row">
                <div class="col-lg-4 my-4">
                    <img :src="`/images/department/department-8.jpg`" class="img-fluid w-100 object-fit-cover" alt="department">
                </div>
                <div class="col-lg-4 my-4">
                    <div class="fs-3 fw-medium">
                        Nephrologist Care
                    </div>
                    <div class="mt-3">
                        Tell me why, I love you like I do. Tell me who, could stop my heart as much as you. Let’s take
                        each other’s hand, as we jump into the final frontier. Mad about you baby, yeah, I’m mad about
                        you. Whoo hoo hoo.
                        <br><br>
                        It seems today that all you see is violence in movies and sex on tv, but where are those good
                        old-fashioned values on which we used to rely? Lucky there’s a family guy, lucky there’s a man
                        who positively can do all the things that make us laugh and cry – he’s our family guy!
                    </div>
                </div>
                <div class="col-lg-4 my-4">
                    <div class="bg-white text-light-gray">
                        <div class="fw-medium border-bottom pb-3">
                            Other services
                        </div>
                        <a href="javascript:void(0)" class="text-light-gray d-flex align-items-center text-decoration-none py-2 ps-3 w-100">
                            <i class="bi bi-chevron-right me-1"></i> Nephrologist Care
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray bg-light-theme text-decoration-none d-block py-2 ps-3 w-100">
                            Eye Care
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray text-decoration-none d-block py-2 ps-3 w-100">
                            Pediatrician Clinic
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray bg-light-theme text-decoration-none d-block py-2 ps-3 w-100">
                            Prenatal Care
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray text-decoration-none d-block py-2 ps-3 w-100">
                            Medical Counseling
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray bg-light-theme text-decoration-none d-block py-2 ps-3 w-100">
                            Rehabilitation Center
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray text-decoration-none d-block py-2 ps-3 w-100">
                            Eldery Care
                        </a>
                        <a href="javascript:void(0)" class="text-light-gray bg-light-theme text-decoration-none d-block py-2 ps-3 w-100">
                            Competitive Doctors
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-100 mt-3 mt-md-5">
        <div class="container">
            <div class="mb-3 fs-4 fw-medium text-light-gray">Other Services</div>
            <div class="other-service-carousel owl-carousel owl-theme">
                <div v-for="each in serviceDataList">
                    <div class="item">
                        <div class="border p-0 h-100">
                            <a href="javascript:void(0)" class="h-100 p-0 text-decoration-none">
                                <img :src="each.filePath" class="img-fluid w-100 object-fit-cover hpx-250" :alt="`banner `+ each.id">
                                <div class="p-3 fw-medium text-theme">
                                    {{each.title}}
                                </div>
                                <div class="p-3 pt-0 text-light-gray">
                                    <div class="truncate-to-2-line">
                                        {{each.description}}
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
            serviceDataList: [
                { id: '1', filePath: '/images/department/department-1.jpg', title: 'Prenatal Care', description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...' },
                { id: '2', filePath: '/images/department/department-2.jpg', title: 'Nephrologist Care', description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...' },
                { id: '3', filePath: '/images/department/department-3.jpg', title: 'Eye Care', description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...' },
                { id: '4', filePath: '/images/department/department-4.jpg', title: 'Eldery Care', description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...' },
                { id: '5', filePath: '/images/department/department-5.jpg', title: 'Pediatrician Clinic', description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...' },
                { id: '6', filePath: '/images/department/department-6.jpg', title: 'Medical Counseling', description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...' },
                { id: '7', filePath: '/images/department/department-7.jpg', title: 'Rehabilitation Center', description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...' },
                { id: '8', filePath: '/images/department/department-8.jpg', title: 'Competitive Doctors', description: 'In an age when nature and magic rule the world, there is an extraordinary legend: the...' },
            ]
        }
    },
    mounted() {
        this.otherServicesCarousel()
    },
    methods: {

        /* Function to control related carousel */
        otherServicesCarousel() {
            $('.other-service-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
            })
        },

    }
}

</script>
