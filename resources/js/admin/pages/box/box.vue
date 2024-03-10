<template>

    <div class="d-block d-sm-flex align-items-center justify-content-between">

        <div class="mb-2">
            <router-link :to="{name: 'box'}" class="text-light-gray breadcrumb-title text-decoration-none">
                Boxes
            </router-link>
        </div>

        <div class="mb-2 breadcrumb breadcrumb-text">

            <div class="breadcrumb-item">
                <router-link :to="{name: 'dashboard'}" class="me-1 text-light-gray text-decoration-none">
                    Dashboard
                </router-link>
            </div>

            <div class="breadcrumb-item">
                <router-link :to="{name: 'box'}" class="text-light-gray text-decoration-none">
                    Boxes
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
                        <router-link :to="{name: 'boxManage'}" class="btn btn-primary px-5 rounded-1">
                            New
                        </router-link>
                    </div>

                </div>
            </div>

            <!-- list data -->
            <div class="card-list">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Box Icon</th>
                                <th>Box Title</th>
                                <th>Box Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="each in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]">
                                <td>Box Icon {{each}}</td>
                                <td>Box Title {{each}}</td>
                                <td>Box Description {{each}}</td>
                            </tr>
                        </tbody>
                    </table>
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
