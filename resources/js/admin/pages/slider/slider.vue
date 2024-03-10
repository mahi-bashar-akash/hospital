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

    <div class="card border-0">
        <div class="card-body">

            <!-- search and new -->
            <div class="row px-2">
                <div class="col-md-4 pt-1 pb-3 px-2">

                    <!-- search -->
                    <div class="position-relative">
                        <input type="text" name="keyword" class="form-control shadow-none ps-5 rounded-1" required placeholder="Search Here" autocomplete="new-search">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search text-light-gray"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 pt-1 pb-3 px-2">

                    <!-- new -->
                    <div class="w-100 d-flex justify-content-end">
                        <router-link :to="{name: 'sliderManage'}" class="btn btn-primary px-5 rounded-1">
                            New
                        </router-link>
                    </div>

                </div>
            </div>

            <!-- list data -->
            <div class="card-list">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

                    <router-link :to="{name: 'sliderManage'}" class="p-3 text-decoration-none text-light-gray">
                        <span class="border p-0 d-block">
                            <span class="border-bottom w-100 d-block" style="height: 250px;"></span>
                            <span class="p-3 pb-0 d-block">First Line</span>
                            <span class="p-3 pb-0 d-block">Second Line</span>
                            <span class="p-3 d-block">Third Line</span>
                        </span>
                    </router-link>

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
