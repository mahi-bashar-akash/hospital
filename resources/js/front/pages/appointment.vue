<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Book appointment
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
                    Book appointment
                </router-link>
            </div>
        </div>

    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-8 pb-4">

                <div class="py-4">
                    You can use this form to book appointment with our doctor. Before booking any appointment make sure you have checked the doctor’s schedule.
                </div>

                <form action="">

                    <div class="form-group mb-3">
                        <label for="" class="form-label">Patient Name</label>
                        <input type="text" name="" class="form-control" required autocomplete="new-">
                    </div>

                    <div class="form-group mb-3">
                        <label for="" class="form-label">Phone Number</label>
                        <input type="text" name="" class="form-control" required autocomplete="new-">
                    </div>

                    <div class="form-group mb-3">
                        <label for="" class="form-label">Email Address</label>
                        <input type="text" name="" class="form-control" required autocomplete="new-">
                    </div>

                    <div class="form-group mb-3">
                        <label for="" class="form-label">Choose Date</label>
                        <input type="text" name="" class="form-control" required autocomplete="new-">
                    </div>

                    <div class="form-group mb-3">
                        <label for="" class="form-label">Department</label>
                        <select name="" class="form-select">
                            <option value="">Select Department</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-theme-danger px-4 rounded-1">
                        Submit
                    </button>

                </form>

            </div>
            <div class="col-lg-4">

                <div class="py-4">

                    <div class="position-relative">
                        <input type="text" name="keyword" class="form-control ps-5" placeholder="Search here" required autocomplete="new-keyword">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search text-light-gray"></i>
                        </div>
                    </div>

                    <div class="mt-3 fs-4 text-light-gray">
                        Blog categories
                    </div>

                    <div class="mt-3">
                        <a href="javascript:void(0)" class="link-icon-hover py-2 mb-2">
                            <span class="d-flex align-items-center">
                                <i class="bi bi-folder-fill me-2"></i>
                                Blogs
                            </span>
                            <span class="badge bg-badge">( 20 )</span>
                        </a>
                        <a href="javascript:void(0)" class="link-icon-hover py-2 mb-2">
                            <span class="d-flex align-items-center">
                                <i class="bi bi-folder-fill me-2"></i>
                                Counselling
                            </span>
                            <span class="badge bg-badge">( 15 )</span>
                        </a>
                        <a href="javascript:void(0)" class="link-icon-hover py-2 mb-2">
                            <span class="d-flex align-items-center">
                                <i class="bi bi-folder-fill me-2"></i>
                                Health
                            </span>
                            <span class="badge bg-badge">( 10 )</span>
                        </a>
                        <a href="javascript:void(0)" class="link-icon-hover py-2 mb-2">
                            <span class="d-flex align-items-center">
                                <i class="bi bi-folder-fill me-2"></i>
                                Kids
                            </span>
                            <span class="badge bg-badge">( 18 )</span>
                        </a>
                    </div>

                    <div class="mt-3 fs-4 text-light-gray">
                        Blog Tags
                    </div>

                    <div class="mt-3">
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Beach
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Health
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Holiday
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Information
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Kids
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Music
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Nature
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Random Stuff
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Rock
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            imageUrl: '/images/breadcrumb.jpg',
        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>
