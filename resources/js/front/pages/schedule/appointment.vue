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
            <div class="col-lg-9 pb-4 text-light-gray">

                <div class="py-4 fw-medium">
                    You can use this form to book appointment with our doctor. Before booking any appointment make sure you have checked the doctor’s schedule.
                </div>

                <form autocomplete="off">

                    <div class="form-group mb-3">
                        <label for="patient-name" class="form-label">Patient Name</label>
                        <input id="patient-name" type="text" name="patient-name" class="form-control" required autocomplete="new-patient-name">
                    </div>

                    <div class="form-group mb-3">
                        <label for="phone-number" class="form-label">Phone Number</label>
                        <input id="phone-number" type="text" name="phone-number" class="form-control" required autocomplete="new-phone-number">
                    </div>

                    <div class="form-group mb-3">
                        <label for="email-address" class="form-label">Email Address</label>
                        <input id="email-address" type="email" name="email-address" class="form-control" required autocomplete="new-email-address">
                    </div>

                    <div class="form-group mb-3">
                        <label for="date" class="form-label">Choose Date</label>
                        <input id="date" type="text" name="choose-date" class="form-control" required autocomplete="new-date">
                    </div>

                    <div class="form-group mb-3">
                        <label for="choose-department" class="form-label">Department</label>
                        <select id="choose-department" name="choose-department" class="form-select" required autocomplete="new-choose-department">
                            <option value="0">Select Department</option>
                            <option value="urology">Urology</option>
                            <option value="dental">Dental</option>
                            <option value="neurologist">Neurologist</option>
                            <option value="pediatric">Pediatric</option>
                            <option value="traumatology">Traumatology</option>
                            <option value="xray">Xray</option>
                            <option value="pulmonary">Pulmonary</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-theme-danger">
                        Submit
                    </button>

                </form>

            </div>
            <div class="col-lg-3">

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

        this.flatpickrConfig();

    },

    methods: {

        flatpickrConfig() {
            flatpickr("#date", {
                altFormat: 'j M Y',
                altInput: true,
                minDate: "today",
                dateFormat: 'Y-m-d',
                disableMobile: true,
            })
        },

    }

}

</script>
