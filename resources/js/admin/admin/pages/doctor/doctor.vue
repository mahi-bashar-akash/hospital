<template>

    <div class="d-block d-sm-flex align-items-center justify-content-between">

        <div class="mb-2">
            <router-link :to="{name: 'doctor'}" class="text-light-gray breadcrumb-title text-decoration-none">
                Doctors
            </router-link>
        </div>

        <div class="mb-2 breadcrumb breadcrumb-text">

            <div class="breadcrumb-item">
                <router-link :to="{name: 'dashboard'}" class="me-1 text-light-gray text-decoration-none">
                    Dashboard
                </router-link>
            </div>

            <div class="breadcrumb-item">
                <router-link :to="{name: 'doctor'}" class="text-light-gray text-decoration-none">
                    Doctors
                </router-link>
            </div>

        </div>

    </div>

    <div class="row justify-content-between">
        <div class="col-sm-8 col-md-6 col-lg-4">
            <div class="my-3">
                <div class="position-relative">
                    <input type="text" name="keyword" class="form-control ps-5" placeholder="Search here" required autocomplete="new-keyword">
                    <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                        <i class="bi bi-search"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 col-md-6 col-lg-4 text-end">
            <div class="mb-3 my-sm-3">
                <button type="button" class="btn btn-theme" @click="manageDoctorOpen">
                    <span class="d-flex align-items-center justify-content-center w-100">
                        <i class="bi bi-plus-lg me-2"></i> New
                    </span>
                </button>
            </div>
        </div>
    </div>

    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4">

        <!-- doctor -->
        <div v-for="each in doctorDataList">
            <div class="pb-3">
                <div class="card border-0">
                    <div class="card-body border-0">
                        <img :src="each.filePath" class="img-fluid w-100 object-fit-cover rounded-1 hpx-250" alt="doctor">
                        <div class="pt-3 fw-medium text-theme">
                            <div class="truncate-to-1-line">
                                {{each.name}}
                            </div>
                        </div>
                        <div class="mt-1 text-secondary text-opacity-75">
                            <div class="truncate-to-1-line">
                                {{each.department}}
                            </div>
                        </div>
                        <div class="pt-2 text-light-gray">
                            <div class="truncate-to-2-line">
                                {{each.description}}
                            </div>
                        </div>
                    </div>
                    <div class="card-footer border-0 bg-white d-flex justify-content-between pb-3">
                        <div class="col-6 pe-1">
                            <button type="button" class="btn btn-outline-theme w-100" @click="manageDoctorOpen">
                                Edit
                            </button>
                        </div>
                        <div class="col-6 ps-1">
                            <button type="button" class="btn btn-outline-theme-danger w-100" @click="deleteDoctorOpen">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- doctor manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Manage Doctor</h1>
                    <button type="button" class="btn-close shadow-none" @click="manageDoctorClose"></button>
                </div>
                <div class="modal-body text-light-gray">

                    <div class="form-group mb-3">
                        <label id="upload-image" class="hpx-150 w-100 border d-flex justify-content-center align-items-center text-center flex-column text-secondary rounded-1 cursor-pointer" v-if="imageUrl === null">
                            <input type="file" name="upload-image" class="form-control" required autocomplete="new-file" hidden="hidden">
                            <i class="bi bi-cloud-arrow-down-fill fs-2"></i>
                            <span class="d-block">
                                Click to upload image
                            </span>
                        </label>
                        <div class="hpx-150 w-100 border d-flex justify-content-center align-items-center text-center flex-column text-secondary rounded-1" v-if="imageUrl !== null">
                            <button type="button" class="btn border-0 btn-icon">
                                <i class="bi bi-trash2 text-danger fs-5"></i>
                            </button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input id="name" type="text" name="name" class="form-control" required autocomplete="new-name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input id="email" type="email" name="email" class="form-control" required autocomplete="new-email">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="phone-number" class="form-label">Phone number</label>
                                <input id="phone-number" type="text" name="phone-number" class="form-control" required autocomplete="new-phone-number">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="facebook" class="form-label">Facebook</label>
                                <input id="facebook" type="url" name="facebook" class="form-control" required autocomplete="new-facebook" value="https://www.facebook.com/">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="twitter" class="form-label">Twitter</label>
                                <input id="twitter" type="url" name="twitter" class="form-control" required autocomplete="new-twitter" value="https://www.twitter.com/">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="instagram" class="form-label">Instagram</label>
                                <input id="instagram" type="url" name="twitter" class="form-control" required autocomplete="new-instagram" value="https://www.instagram.com/">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="linkedin" class="form-label">Linkedin</label>
                                <input id="linkedin" type="url" name="linkedin" class="form-control" required autocomplete="new-linkedin" value="https://www.linkedin.com/">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="youtube" class="form-label">Youtube</label>
                                <input id="youtube" type="url" name="youtube" class="form-control" required autocomplete="new-youtube" value="https://www.youtube.com/">
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="saturday" class="form-label d-flex align-items-center">
                            <input id="saturday" type="checkbox" name="saturday" class="form-checkbox">
                            Saturday
                        </label>
                        <div class="row">
                            <div class="col-md-6">
                                <select name="time" id="saturday" autocomplete="new-start-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <select name="time" id="saturday" autocomplete="new-end-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="sunday" class="form-label d-flex align-items-center">
                            <input id="sunday" type="checkbox" name="sunday" class="form-checkbox">
                            Sunday
                        </label>
                        <div class="row">
                            <div class="col-md-6">
                                <select name="time" id="sunday" autocomplete="new-start-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <select name="time" id="sunday" autocomplete="new-end-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="monday" class="form-label d-flex align-items-center">
                            <input id="monday" type="checkbox" name="monday" class="form-checkbox">
                            Monday
                        </label>
                        <div class="row">
                            <div class="col-md-6">
                                <select name="time" id="monday" autocomplete="new-start-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <select name="time" id="monday" autocomplete="new-end-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="tuesday" class="form-label d-flex align-items-center">
                            <input id="tuesday" type="checkbox" name="tuesday" class="form-checkbox">
                            Tuesday
                        </label>
                        <div class="row">
                            <div class="col-md-6">
                                <select name="time" id="tuesday" autocomplete="new-start-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <select name="time" id="tuesday" autocomplete="new-end-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="wednesday" class="form-label d-flex align-items-center">
                            <input id="wednesday" type="checkbox" name="wednesday" class="form-checkbox">
                            Wednesday
                        </label>
                        <div class="row">
                            <div class="col-md-6">
                                <select name="time" id="wednesday" autocomplete="new-start-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <select name="time" id="wednesday" autocomplete="new-end-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="thursday" class="form-label d-flex align-items-center">
                            <input id="thursday" type="checkbox" name="thursday" class="form-checkbox">
                            Thursday
                        </label>
                        <div class="row">
                            <div class="col-md-6">
                                <select name="time" id="thursday" autocomplete="new-start-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <select name="time" id="thursday" autocomplete="new-end-time" class="form-select">
                                    <option v-for="each in timeData" :value="each.time">{{each.time}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="department" class="form-label">Department</label>
                        <select name="department" id="department" class="form-select" required autocomplete="new-department">
                            <option value="0">Select department option</option>
                            <option v-for="each in category" :value="each.name"> {{each.name}} </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="description" class="form-label">Description</label>
                        <textarea id="description" type="text" name="description" class="form-textarea" required autocomplete="new-description" cols="30" rows="5"></textarea>
                    </div>

                </div>
                <div class="modal-footer border-0 d-flex justify-content-between">

                    <div class="col-5">
                        <button type="button" class="btn btn-secondary w-100" @click="manageDoctorClose">
                            Close
                        </button>
                    </div>

                    <div class="col-5">
                        <button type="button" class="btn btn-theme w-100">
                            Save
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- doctor delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete doctor</h1>
                    <button type="button" class="btn-close shadow-none" @click="deleteDoctorClose"></button>
                </div>
                <div class="modal-body text-light-gray text-center">

                    <div class="d-block">
                        <i class="bi bi-trash2 fs-1 text-danger"></i>
                    </div>
                    <div class="d-block fs-5 text-light-gray">
                        Are you sure?
                    </div>

                </div>
                <div class="modal-footer border-0 d-flex justify-content-between">

                    <div class="col-5">
                        <button type="button" class="btn btn-secondary w-100" @click="deleteDoctorClose">
                            Close
                        </button>
                    </div>

                    <div class="col-5">
                        <button type="button" class="btn btn-theme-danger w-100">
                            Confirm
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
            doctorDataList: [
                { id: '1', filePath: '/images/doctor/doctor-1.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '2', filePath: '/images/doctor/doctor-2.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '3', filePath: '/images/doctor/doctor-3.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '4', filePath: '/images/doctor/doctor-4.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '5', filePath: '/images/doctor/doctor-5.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '6', filePath: '/images/doctor/doctor-6.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '7', filePath: '/images/doctor/doctor-7.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '8', filePath: '/images/doctor/doctor-8.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '9', filePath: '/images/doctor/doctor-9.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '10', filePath: '/images/doctor/doctor-10.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '11', filePath: '/images/doctor/doctor-11.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '12', filePath: '/images/doctor/doctor-12.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '13', filePath: '/images/doctor/doctor-13.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '14', filePath: '/images/doctor/doctor-14.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '15', filePath: '/images/doctor/doctor-15.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '16', filePath: '/images/doctor/doctor-16.jpg', name: 'Doctor name', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
            ],
            category: [
                { id: '1', name: 'Cardiology' },
                { id: '2', name: 'Dental' },
                { id: '3', name: 'Neurologist' },
                { id: '4', name: 'Pediatric' },
                { id: '5', name: 'Pulmonary' },
                { id: '6', name: 'Traumatology' },
                { id: '7', name: 'Urology' },
                { id: '8', name: 'Xray' },
            ],
            timeData: [
                { id: '1', time: '01:00' },
                { id: '2', time: '01:30' },
                { id: '3', time: '02:00' },
                { id: '4', time: '02:30' },
                { id: '5', time: '03:00' },
                { id: '6', time: '03:30' },
                { id: '7', time: '04:00' },
                { id: '8', time: '04:30' },
                { id: '9', time: '05:00' },
                { id: '10', time: '05:30' },
                { id: '11', time: '06:00' },
                { id: '12', time: '06:30' },
                { id: '13', time: '07:00' },
                { id: '14', time: '07:30' },
                { id: '15', time: '08:00' },
                { id: '16', time: '08:30' },
                { id: '17', time: '09:00' },
                { id: '18', time: '09:30' },
                { id: '19', time: '10:00' },
                { id: '20', time: '10:30' },
                { id: '21', time: '11:00' },
                { id: '22', time: '11:30' },
                { id: '23', time: '12:00' },
                { id: '24', time: '12:30' },
            ],
            imageUrl: null,
        }

    },

    mounted() {



    },

    methods: {

        /* Function to manage box open */
        manageDoctorOpen(){
            const myModal = new bootstrap.Modal("#manageModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to manage box close */
        manageDoctorClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* Function to manage slider open */
        deleteDoctorOpen(){
            const myModal = new bootstrap.Modal("#deleteModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to manage slider close */
        deleteDoctorClose(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
