<template>

    <div class="d-block d-sm-flex align-items-center justify-content-between">

        <div class="mb-2">
            <router-link :to="{name: 'slider'}" class="text-light-gray breadcrumb-title text-decoration-none">
                Slides
            </router-link>
        </div>

        <div class="mb-2 breadcrumb breadcrumb-text">

            <div class="breadcrumb-item">
                <router-link :to="{name: 'dashboard'}" class="me-1 text-light-gray text-decoration-none">
                    Dashboard
                </router-link>
            </div>

            <div class="breadcrumb-item">
                <router-link :to="{name: 'slider'}" class="text-light-gray text-decoration-none">
                    Slides
                </router-link>
            </div>
        </div>

    </div>

    <div class="text-end my-3">
        <router-link :to="{name: 'sliderManage'}" class="btn btn-theme wpx-90">
            <div class="d-flex align-items-center justify-content-center">
                <i class="bi bi-plus-lg"></i> <span class="ms-1"> New </span>
            </div>
        </router-link>
    </div>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-2 row-cols-xxl-4">

        <div class="p-3">
            <div class="card border-0">
                <div class="card-body border-0 p-2">
                    <img :src="`/images/slider-1.jpg`" class="img-fluid object-fit-cover w-100 hpx-200 rounded-2" alt="banner 1">
                    <div class="mt-3 fw-medium text-light-gray">
                        Title
                    </div>
                    <div class="mt-3 text-light-gray">
                        SubTitle
                    </div>
                    <div class="mt-3 text-light-gray">
                        <div class="truncate-to-2-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore laudantium molestiae nobis, perferendis repudiandae sit.
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0 d-flex justify-content-between bg-white p-2">
                    <div class="col-6 pe-1">
                        <button type="button" class="btn btn-outline-theme w-100">
                            Edit
                        </button>
                    </div>
                    <div class="col-6 ps-1">
                        <button type="button" class="btn btn-outline-theme-danger w-100">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-3">
            <div class="card border-0">
                <div class="card-body border-0 p-2">
                    <img :src="`/images/slider-2.jpg`" class="img-fluid object-fit-cover w-100 hpx-200 rounded-2" alt="banner 1">
                    <div class="mt-3 fw-medium text-light-gray">
                        Title
                    </div>
                    <div class="mt-3 text-light-gray">
                        SubTitle
                    </div>
                    <div class="mt-3 text-light-gray">
                        <div class="truncate-to-2-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore laudantium molestiae nobis, perferendis repudiandae sit.
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0 d-flex justify-content-between bg-white p-2">
                    <div class="col-6 pe-1">
                        <button type="button" class="btn btn-outline-theme w-100">
                            Edit
                        </button>
                    </div>
                    <div class="col-6 ps-1">
                        <button type="button" class="btn btn-outline-theme-danger w-100">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

export default {

    data() {

        return {

        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>
