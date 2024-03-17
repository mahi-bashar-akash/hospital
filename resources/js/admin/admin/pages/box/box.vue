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

    <div class="text-end my-3">
        <button type="button" class="btn btn-theme" @click="manageBoxOpen">
            <span class="d-flex align-items-center justify-content-center w-100">
                <i class="bi bi-plus-lg me-2"></i> New
            </span>
        </button>
    </div>

    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4">

        <!-- box -->
        <div v-for="each in boxDataList">
            <div class="pb-3">
                <div class="card border-0">
                    <div class="card-header border-0 py-3">
                        <div class="fw-medium text-light-gray">
                            {{each.title}}
                        </div>
                    </div>
                    <div class="card-body border-0">
                        <div class="mb-3 text-center">
                            <i :class="`bi `+each.svgImage+` fs-2 text-danger`"></i>
                        </div>
                        <div class="text-light-gray">
                            <div class="truncate-to-2-line">
                                {{each.description}}
                            </div>
                        </div>
                    </div>
                    <div class="card-footer border-0 bg-white d-flex justify-content-between pb-3">
                        <div class="col-6 pe-1">
                            <button type="button" class="btn btn-outline-theme w-100" @click="manageBoxOpen">
                                Edit
                            </button>
                        </div>
                        <div class="col-6 ps-1">
                            <button type="button" class="btn btn-outline-theme-danger w-100" @click="deleteBoxOpen">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- box manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Manage Box</h1>
                    <button type="button" class="btn-close shadow-none" @click="manageBoxClose"></button>
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

                    <div class="form-group mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input id="title" type="text" name="title" class="form-control" required autocomplete="new-title">
                    </div>

                    <div class="form-group">
                        <label for="description" class="form-label">Description</label>
                        <textarea id="description" type="text" name="description" class="form-textarea" required autocomplete="new-description" cols="30" rows="5"></textarea>
                    </div>

                </div>
                <div class="modal-footer border-0 d-flex justify-content-between">

                    <div class="col-5">
                        <button type="button" class="btn btn-secondary w-100" @click="manageBoxClose">
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

    <!-- box delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete box</h1>
                    <button type="button" class="btn-close shadow-none" @click="deleteBoxClose"></button>
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
                        <button type="button" class="btn btn-secondary w-100" @click="deleteBoxClose">
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
            boxDataList: [
                { id: '1', title: 'Powerful Theme Options', svgImage: 'bi-sliders2-vertical', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
                { id: '2', title: 'Drag & Drop Page Builder', svgImage: 'bi-window-fullscreen', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
                { id: '3', title: 'Easy to Customize', svgImage: 'bi-pencil', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
                { id: '4', title: 'Theme Documentation', svgImage: 'bi-journal-text', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
                { id: '5', title: 'Years of Experience', svgImage: 'bi-calendar3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
                { id: '6', title: 'Responsive Layout', svgImage: 'bi-layout-sidebar', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
            ],
            imageUrl: null,
        }
    },

    mounted() {  },

    methods: {

        /* Function to manage box open */
        manageBoxOpen(){
            const myModal = new bootstrap.Modal("#manageModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to manage box close */
        manageBoxClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* Function to manage slider open */
        deleteBoxOpen(){
            const myModal = new bootstrap.Modal("#deleteModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to manage slider close */
        deleteBoxClose(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
