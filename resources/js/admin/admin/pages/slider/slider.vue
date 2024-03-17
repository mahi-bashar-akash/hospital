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
        <button type="button" class="btn btn-theme wpx-90" @click="manageSliderOpen">
            <span class="d-flex align-items-center justify-content-center w-100">
                <i class="bi bi-plus-lg me-2"></i> New
            </span>
        </button>
    </div>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-2 row-cols-xxl-4">

        <!-- 01 - slider -->
        <div class="p-3">
            <div class="card border-0">
                <div class="card-body border-0 p-2">
                    <img :src="`/images/slider-1.jpg`" class="img-fluid object-fit-cover w-100 hpx-200 rounded-2" alt="banner 1">
                    <div class="mt-3 fw-medium text-theme">
                        Title
                    </div>
                    <div class="mt-1 text-light-gray">
                        SubTitle
                    </div>
                    <div class="mt-2 text-light-gray">
                        <div class="truncate-to-2-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore laudantium molestiae nobis, perferendis repudiandae sit.
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0 d-flex justify-content-between bg-white p-2">
                    <div class="col-6 pe-1">
                        <button type="button" class="btn btn-outline-theme w-100" @click="manageSliderOpen">
                            Edit
                        </button>
                    </div>
                    <div class="col-6 ps-1">
                        <button type="button" class="btn btn-outline-theme-danger w-100" @click="deleteSliderOpen">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 02 - slider -->
        <div class="p-3">
            <div class="card border-0">
                <div class="card-body border-0 p-2">
                    <img :src="`/images/slider-2.jpg`" class="img-fluid object-fit-cover w-100 hpx-200 rounded-2" alt="banner 1">
                    <div class="mt-3 fw-medium text-theme">
                        Title
                    </div>
                    <div class="mt-1 text-light-gray">
                        SubTitle
                    </div>
                    <div class="mt-2 text-light-gray">
                        <div class="truncate-to-2-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore laudantium molestiae nobis, perferendis repudiandae sit.
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0 d-flex justify-content-between bg-white p-2">
                    <div class="col-6 pe-1">
                        <button type="button" class="btn btn-outline-theme w-100" @click="manageSliderOpen">
                            Edit
                        </button>
                    </div>
                    <div class="col-6 ps-1">
                        <button type="button" class="btn btn-outline-theme-danger w-100" @click="deleteSliderOpen">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- slide manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Manage slide</h1>
                    <button type="button" class="btn-close shadow-none" @click="manageSliderClose"></button>
                </div>
                <div class="modal-body text-light-gray">

                    <div class="form-group mb-3">
                        <label id="upload-image" class="hpx-150 w-100 border d-flex justify-content-center align-items-center text-center flex-column text-secondary rounded-1">
                            <input type="file" name="upload-image" class="form-control" required autocomplete="new-file" hidden="hidden">
                            <i class="bi bi-cloud-arrow-down-fill fs-2"></i>
                            <span class="d-block">
                                Click to upload image
                            </span>
                        </label>
                    </div>

                    <div class="form-group mb-3">
                        <label for="first-line" class="form-label">First line</label>
                        <input id="first-line" type="text" name="first-line" class="form-control" required autocomplete="new-first-line">
                    </div>

                    <div class="form-group mb-3">
                        <label for="second-line" class="form-label">Second line</label>
                        <input id="second-line" type="text" name="second-line" class="form-control" required autocomplete="new-second-line">
                    </div>

                    <div class="form-group">
                        <label for="third-line" class="form-label">Third line</label>
                        <input id="third-line" type="text" name="third-line" class="form-control" required autocomplete="new-third-line">
                    </div>

                </div>
                <div class="modal-footer border-0 d-flex justify-content-between">

                    <div class="col-5">
                        <button type="button" class="btn btn-secondary w-100" @click="manageSliderClose">
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

    <!-- slide delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete slide</h1>
                    <button type="button" class="btn-close shadow-none" @click="deleteSliderClose"></button>
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
                        <button type="button" class="btn btn-secondary w-100" @click="deleteSliderClose">
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
        return {  }
    },

    mounted() {  },

    methods: {

        /* Function to manage slider open */
        manageSliderOpen(){
            const myModal = new bootstrap.Modal("#manageModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to manage slider close */
        manageSliderClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* Function to delete slider open */
        deleteSliderOpen(){
            const myModal = new bootstrap.Modal("#deleteModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to delete slider close */
        deleteSliderClose(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
