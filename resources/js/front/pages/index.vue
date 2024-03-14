<template>

    <!-- carousel section -->
    <section class="w-100">
        <div class="banner-carousel owl-carousel owl-theme">
            <div v-for="each in bannerDataList">
                <div class="item">
                    <img :src="each.filePath" class="img-fluid w-100 object-fit-cover" :alt="`banner `+ each.id">
                </div>
            </div>
        </div>
    </section>

    <!-- about section -->
    <section class="w-100">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-medium fs-4">
                Best hospital in town
            </div>
            <div class="mb-3 text-center">
                When it comes to health care
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-sm-center">
                <div class="p-3">
                    <div class="mb-3">
                        <i class="bi bi-sliders2-vertical fs-2 text-danger"></i>
                    </div>
                    <div class="mb-3 fw-medium">
                        Powerful Theme Options
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </div>
                </div>
                <div class="p-3">
                    <div class="mb-3">
                        <i class="bi bi-window-fullscreen fs-2 text-danger"></i>
                    </div>
                    <div class="mb-3 fw-medium">
                        Drag & Drop Page Builder
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </div>
                </div>
                <div class="p-3">
                    <div class="mb-3">
                        <i class="bi bi-pencil fs-2 text-danger"></i>
                    </div>
                    <div class="mb-3 fw-medium">
                        Easy to Customize
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </div>
                </div>
                <div class="p-3">
                    <div class="mb-3">
                        <i class="bi bi-journal-text fs-2 text-danger"></i>
                    </div>
                    <div class="mb-3 fw-medium">
                        Theme Documentation
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </div>
                </div>
                <div class="p-3">
                    <div class="mb-3">
                        <i class="bi bi-calendar3 fs-2 text-danger"></i>
                    </div>
                    <div class="mb-3 fw-medium">
                        Years of Experience
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </div>
                </div>
                <div class="p-3">
                    <div class="mb-3">
                        <i class="bi bi-layout-sidebar fs-2 text-danger"></i>
                    </div>
                    <div class="mb-3 fw-medium">
                        Responsive Layout
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- doctor section -->
    <section class="w-100 bg-light">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-medium fs-4">
                Our doctor
            </div>
            <div class="mb-3 text-center">
                Our doctors are specialized in their field and have more than 10 years of experiences.
            </div>
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
    </section>

    <!-- testimonial section -->
    <section class="w-100">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-medium fs-4">
                Our testimonials
            </div>
            <div class="testimonial-carousel owl-carousel owl-theme">
                <div v-for="each in testimonialDataList">
                    <div class="item">
                        <div class="d-flex justify-content-center align-items-center flex-column">
                            <div class="mb-4 col-11 col-md-5 text-sm-center">
                                {{each.description}}
                            </div>
                            <img :src="each.filePath" class="img-fluid object-fit-cover rounded-circle mb-4 wpx-65 hpx-65" :alt="`testimonial `+each.id" v-if="each.filePath !== undefined">
                            <div class="fw-medium text-sm-center">
                                {{each.name}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- service section -->
    <section class="w-100 bg-light">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-medium fs-4">
                Our services
            </div>
            <div class="mb-3 text-center">
                Latest up-to-date information from our services.
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray" v-for="each in serviceDataList">
                    <div class="border bg-white h-100 h-100">
                        <img :src="each.filePath" class="img-fluid object-fit-cover w-100 hpx-250" :alt="`service `+each.id">
                        <div class="px-3 pt-3 fw-medium text-theme">
                            <div class="truncate-to-1-line">
                                {{each.name}}
                            </div>
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
    </section>

    <!-- latest news section -->
    <section class="w-100">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-medium fs-4">
                Latest news
            </div>
            <div class="mb-3 text-center">
                Latest up-to-date information from our public relation department.
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray" v-for="each in blogDataList">
                    <div class="border bg-white h-100">
                        <img :src="each.filePath" class="img-fluid object-fit-cover w-100 hpx-250" :alt="`blog `+each.id">
                        <div class="px-3 pt-3 fw-medium text-theme">
                            <div class="truncate-to-1-line">
                                {{each.name}}
                            </div>
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
    </section>

    <!-- our philosophy section -->
    <section class="w-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-6 bg-primary p-3 p-md-5 text-white">
                    <div class="w-100">
                        <div class="mb-3 fw-medium fs-4">
                            Our philosophy
                        </div>
                        <div class="mb-3">
                            This is the subtitle for the heading
                        </div>
                        <div class="mb-3">
                            Patients have an important role to play at each stage of their care and the five safety tips will serve to encourage them to be more involved in their health care.
                            <br><br>
                            Patients can do a lot of small things to make their health-care experience as safe as possible.
                            <br><br>
                            Hospitals are places of recovery and healing but there are also safety risks for patients, such as infections, falls and medication errors that can happen despite our best efforts.
                        </div>
                        <a href="javascript:void(0)" class="btn btn-theme-danger rounded-1 py-3 px-4">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- department section -->
    <section class="w-100">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-medium fs-4">
                Departments
            </div>
            <div class="mb-3 text-center">
                Latest up-to-date information from our public relation department.
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">

                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray" v-for="each in departmentDataList">
                    <div class="border bg-white h-100">
                        <img :src="each.filepath" class="img-fluid object-fit-cover w-100 hpx-250" :alt="`department `+each.id">
                        <div class="px-3 pt-3 fw-medium text-theme">
                            <div class="truncate-to-1-line">
                                {{each.name}}
                            </div>
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
    </section>

</template>

<script>

export default {

    data() {

        return {
            bannerDataList: [
                { id: '1', filePath: '/images/slider-1.jpg' },
                { id: '2', filePath: '/images/slider-2.jpg' },
            ],

            doctorDataList: [
                { id: '1', filePath: '/images/doctor/doctor-1.jpg', name: 'Dr. Natasha Isha', profession: 'Pulmonary', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '2', filePath: '/images/doctor/doctor-2.jpg', name: 'Dr. Sifa Chufi', profession: 'Dental', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '3', filePath: '/images/doctor/doctor-3.jpg', name: 'Dr. Adrofi Asfa', profession: 'Neurologist', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '4', filePath: '/images/doctor/doctor-4.jpg', name: 'Dr. Nando Aldo', profession: 'Xray', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
            ],

            testimonialDataList: [
                { id: '1', name: 'John smith', filePath: '/images/avatar/testimonial.jpg', description: 'The doctors and nurses and aides were super duper helpful. I really really appreciate all your kindness and good care you have provide me with. Thank you so much!', },
                { id: '2', name: 'Rachel Williams', description: 'All the hospital staffs were very helpful. I really really appreciate all your kindness and good care you have provide me with. Thank you so much for your dedication!', },
            ],

            serviceDataList: [
                { id: '1', name: 'Department name', filePath: '/images/department/department-1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '2', name: 'Department name', filePath: '/images/department/department-2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '3', name: 'Department name', filePath: '/images/department/department-3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '4', name: 'Department name', filePath: '/images/department/department-4.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
            ],

            blogDataList: [
                { id: '1', name: 'Department name', filePath: '/images/department/department-5.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '2', name: 'Department name', filePath: '/images/department/department-6.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '3', name: 'Department name', filePath: '/images/department/department-7.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '4', name: 'Department name', filePath: '/images/department/department-8.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
            ],

            departmentDataList: [
                { id: '1', name: 'Department name', filepath: '/images/department/department-1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '2', name: 'Department name', filepath: '/images/department/department-2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '3', name: 'Department name', filepath: '/images/department/department-3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '4', name: 'Department name', filepath: '/images/department/department-4.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '5', name: 'Department name', filepath: '/images/department/department-5.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '6', name: 'Department name', filepath: '/images/department/department-6.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '7', name: 'Department name', filepath: '/images/department/department-7.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '8', name: 'Department name', filepath: '/images/department/department-8.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
            ]

        }

    },

    mounted() {

        this.banner();
        this.testimonial();

    },

    methods: {

        banner() {
            $('.banner-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 4000,
                animateOut: 'fadeOut',
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
        },

        testimonial() {
            $('.testimonial-carousel').owlCarousel({
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
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
        },

    }

}

</script>
