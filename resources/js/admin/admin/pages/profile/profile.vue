<template>

    <div class="d-block d-sm-flex align-items-center justify-content-between">

        <div class="mb-2">
            <router-link :to="{name: 'profile'}" class="text-light-gray breadcrumb-title text-decoration-none">
                Profile
            </router-link>
        </div>

        <div class="mb-2 breadcrumb breadcrumb-text">

            <div class="breadcrumb-item">
                <router-link :to="{name: 'dashboard'}" class="me-1 text-light-gray text-decoration-none">
                    Dashboard
                </router-link>
            </div>

            <div class="breadcrumb-item">
                <router-link :to="{name: 'profile'}" class="text-light-gray text-decoration-none">
                    Profile
                </router-link>
            </div>

        </div>

    </div>

    <div class="row justify-content-center pt-3 pt-md-5">
        <div class="profile-wrapper">
            <div class="card border-0 text-light-gray">
                <div class="card-header border-0 bg-white p-0">
                    <div class="w-100 d-flex justify-content-center pt-3">
                        <img :src="`/images/avatar/avatar.png`" class="wpx-150 hpx-150 rounded-circle border" alt="avatar">
                    </div>
                </div>
                <div class="card-body border-0 px-3 bg-white">
                    <div class="mb-1 fw-medium"> Name </div>
                    <div class="mb-3"> Mahi Bashar Akash </div>

                    <div class="mb-1 fw-medium"> Email </div>
                    <div class="mb-3"> mahibashar2023@gmail.com </div>

                    <div class="mb-1 fw-medium"> Phone Number </div>
                    <div class="mb-3"> 01400125289 </div>

                    <div class="mb-1 fw-medium"> Present address </div>
                    <div class="mb-3"> Jessore Sadar, Jessore, Bangladesh </div>

                    <div class="mb-1 fw-medium"> Currency </div>
                    <div class="mb-3"> BDT ( Taka ) </div>

                    <div class="mb-1 fw-medium"> Social media </div>
                    <div class="mb-3">
                        <div class="d-flex justify-content-start align-items-center">
                            <a href="javascript:void(0)" class="btn btn-outline-theme me-1">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="javascript:void(0)" class="btn btn-outline-theme me-1">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="javascript:void(0)" class="btn btn-outline-theme me-1">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="javascript:void(0)" class="btn btn-outline-theme me-1">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href="javascript:void(0)" class="btn btn-outline-theme">
                                <i class="bi bi-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div class="row justify-content-between">
                        <div class="col-6">
                            <button type="button" class="btn btn-theme w-100" @click="editProfileModalOpen">
                                Edit profile
                            </button>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn btn-theme w-100" @click="editPasswordModalOpen">
                                Edit password
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit profile</h1>
                    <button type="button" class="btn-close shadow-none" @click="editProfileModalClose"></button>
                </div>
                <div class="modal-body border-0">
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
                                <label for="present-address" class="form-label">Present Address</label>
                                <input id="present-address" type="text" name="present-address" class="form-control" required autocomplete="new-present-address">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="currency" class="form-label">Currency</label>
                                <input id="currency" type="text" name="currency" class="form-control" required autocomplete="new-currency">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="facebook" class="form-label">Facebook</label>
                                <input id="facebook" type="url" name="facebook" class="form-control" value="https://www.facebook.com/" required autocomplete="new-facebook">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="twitter" class="form-label">Twitter</label>
                                <input id="twitter" type="text" name="twitter" class="form-control" value="https://www.twitter.com/" required autocomplete="new-twitter">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="instagram" class="form-label">Instagram</label>
                                <input id="instagram" type="text" name="instagram" class="form-control" value="https://www.instagram.com/" required autocomplete="new-instagram">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3 mb-md-0">
                                <label for="linkedin" class="form-label">Linkedin</label>
                                <input id="linkedin" type="text" name="linkedin" class="form-control" value="https://www.linkedin.com/" required autocomplete="new-linkedin">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3 mb-md-0">
                                <label for="youtube" class="form-label">Youtube</label>
                                <input id="youtube" type="text" name="youtube" class="form-control" value="https://www.youtube.com/" required autocomplete="new-youtube">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary wpx-90" @click="editProfileModalClose">
                        Close
                    </button>
                    <button type="button" class="btn btn-theme wpx-90">
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="editPasswordModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit password</h1>
                    <button type="button" class="btn-close shadow-none" @click="editPasswordModalClose"></button>
                </div>
                <div class="modal-body border-0">
                    <div class="form-group mb-3">
                        <label for="current-password" class="form-label">Current password</label>
                        <input id="current-password" type="password" name="current-password" class="form-control" required autocomplete="new-current-password">
                    </div>
                    <div class="form-group mb-3">
                        <label for="new-password" class="form-label">New password</label>
                        <input id="new-password" type="password" name="new-password" class="form-control" required autocomplete="new-new-password">
                    </div>
                    <div class="form-group">
                        <label for="confirm-password" class="form-label">Confirm password</label>
                        <input id="confirm-password" type="password" name="confirm-password" class="form-control" required autocomplete="new-confirm-password">
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary wpx-90" @click="editPasswordModalClose">
                        Close
                    </button>
                    <button type="button" class="btn btn-theme wpx-90">
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {

    data() {

        return {}

    },

    mounted() {



    },

    methods: {

        /* Function to edit profile modal open */
        editProfileModalOpen(){
            const myModal = new bootstrap.Modal("#editProfileModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to edit profile modal close */
        editProfileModalClose(){
            let myModalEl = document.getElementById('editProfileModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* Function to manage slider open */
        editPasswordModalOpen(){
            const myModal = new bootstrap.Modal("#editPasswordModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to manage slider close */
        editPasswordModalClose(){
            let myModalEl = document.getElementById('editPasswordModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
