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
            <div class="breadcrumb-item">
                <div class="text-light-gray text-decoration-none fw-medium text-truncate">
                    Children’s Jakarta Hoops Fest
                </div>
            </div>
        </div>

    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-8 my-4">
                <div class="fs-3 mb-3 text-light-gray fw-medium">
                    Children’s Jakarta Hoops Fest
                </div>
                <div class="row">
                    <div class="col-md-12 bg-theme text-white">
                        <div class="p-3">
                            <i class="bi bi-calendar3"></i>
                            <span class="ms-2">
                                October 28, 2016
                            </span>
                        </div>
                        <div class="p-3">
                            <i class="bi bi-clock"></i>
                            <span class="ms-2">
                                12.00 - end
                            </span>
                        </div>
                        <div class="p-3">
                            <i class="bi bi-envelope"></i>
                            <span class="ms-2">
                                events@hospitalplus.com
                            </span>
                        </div>
                        <div class="p-3 line-height-2">
                            <i class="bi bi-geo-alt"></i>
                            <span class="ms-2">
                                Jalan Kintamani Raya No.2, Kawasan Daan Mogot Baru, Daerah Khusus Ibukota Jakarta
                            </span>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    Come and knock on our door. We’ve been waiting for you. Where the kisses are hers and hers and his,
                    three’s company, too! Come and dance on our floor. Take a step that is new. We’ve a lovable space
                    that needs your face, three’s company, too! You’ll see that life is a ball again and laughter is
                    callin’ for you. Down at our rendezvous, three’s company, too!
                </div>
            </div>
            <div class="col-lg-4 my-4">

            </div>
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
