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
                <router-link :to="{name: 'appointment'}" class="text-light-gray text-decoration-none">
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

                <SearchBlogTag/>

            </div>
        </div>
    </div>

</template>

<script>
import SearchBlogTag from "../../component/searchBlogTag.vue";

export default {

    components: {
        SearchBlogTag
    },

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
