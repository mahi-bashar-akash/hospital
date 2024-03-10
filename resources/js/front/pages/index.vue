<template>

    <!-- carousel section -->
    <section class="w-100">
        <div class="banner-carousel owl-carousel owl-theme">
            <div class="item">
                <img :src="`/images/slider-1.jpg`" class="img-fluid w-100 object-fit-cover" alt="slider 1">
            </div>
            <div class="item">
                <img :src="`/images/slider-2.jpg`" class="img-fluid w-100 object-fit-cover" alt="slider 2">
            </div>
        </div>
    </section>

    <!-- about section -->
    <section class="w-100">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-semibold fs-4">
                Best hospital in town
            </div>
            <div class="mb-3 text-sm-center">
                When it comes to health care
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-sm-center">
                <div class="p-3">
                    <div class="mb-3">
                        <i class="bi bi-sliders2-vertical fs-2 text-danger"></i>
                    </div>
                    <div class="mb-3 fw-semibold">
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
                    <div class="mb-3 fw-semibold">
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
                    <div class="mb-3 fw-semibold">
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
                    <div class="mb-3 fw-semibold">
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
                    <div class="mb-3 fw-semibold">
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
                    <div class="mb-3 fw-semibold">
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
            <div class="mb-3 text-center fw-semibold fs-4">
                Our doctor
            </div>
            <div class="mb-3 text-sm-center">
                Our doctors are specialized in their field and have more than 10 years of experiences.
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/doctor/doctor-1.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Name </div>
                        <div class="ps-3 pt-3"> Profession </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/doctor/doctor-2.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Name </div>
                        <div class="ps-3 pt-3"> Profession </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/doctor/doctor-3.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Name </div>
                        <div class="ps-3 pt-3"> Profession </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/doctor/doctor-4.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Name </div>
                        <div class="ps-3 pt-3"> Profession </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- testimonial section -->
    <section class="w-100">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-semibold fs-4">
                Our testimonials
            </div>
            <div class="testimonial-carousel owl-carousel owl-theme">
                <div class="item">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <div class="mb-4 col-11 col-md-5 text-sm-center">
                            The doctors and nurses and aides were super duper helpful. I really really appreciate all your kindness and good care you have provide me with. Thank you so much!
                        </div>
                        <img :src="`/images/avatar/testimonial.jpg`" class="img-fluid object-fit-cover rounded-circle mb-4" style="width: 65px; height: 65px;" alt="testimonial">
                        <div class="fw-semibold text-sm-center">
                            John smith
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <div class="mb-4 col-11 col-md-5 text-sm-center">
                            All the hospital staffs were very helpful. I really really appreciate all your kindness and good care you have provide me with. Thank you so much for your dedication!
                        </div>
                        <div class="fw-semibold text-sm-center">
                            Rachel Williams
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- service section -->
    <section class="w-100 bg-light">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-semibold fs-4">
                Our services
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-1.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-2.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-3.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-4.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- latest news section -->
    <section class="w-100">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-semibold fs-4">
                Latest news
            </div>
            <div class="mb-3 text-sm-center">
                Latest up-to-date information from our public relation department.
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-5.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-6.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-7.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-8.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
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
                <div class="col-lg-6 bg-theme p-5 text-white">
                    <div class="mb-3 fw-semibold fs-4">
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
    </section>

    <!-- department section -->
    <section class="w-100">
        <div class="container py-5 text-light-gray">
            <div class="mb-3 text-center fw-semibold fs-4">
                Departments
            </div>
            <div class="mb-3 text-sm-center">
                Latest up-to-date information from our public relation department.
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-1.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-2.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-3.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-4.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-5.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-6.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-7.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="p-3 text-decoration-none text-light-gray">
                    <div class="border bg-white">
                        <img :src="`/images/department/department-8.jpg`" class="img-fluid object-fit-cover w-100" style="height: 300px" alt="doctor">
                        <div class="ps-3 pt-3"> Department name </div>
                        <div class="ps-3 py-3"> Description </div>
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
