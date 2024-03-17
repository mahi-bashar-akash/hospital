<template>

    <div class="d-block d-sm-flex align-items-center justify-content-between">

        <div class="mb-2">
            <router-link :to="{name: 'service'}" class="text-light-gray breadcrumb-title text-decoration-none">
                Services
            </router-link>
        </div>

        <div class="mb-2 breadcrumb breadcrumb-text">

            <div class="breadcrumb-item">
                <router-link :to="{name: 'dashboard'}" class="me-1 text-light-gray text-decoration-none">
                    Dashboard
                </router-link>
            </div>

            <div class="breadcrumb-item">
                <router-link :to="{name: 'service'}" class="text-light-gray text-decoration-none">
                    Services
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
                <button type="button" class="btn btn-theme" @click="manageServiceOpen">
                    <span class="d-flex align-items-center justify-content-center w-100">
                        <i class="bi bi-plus-lg me-2"></i> New
                    </span>
                </button>
            </div>
        </div>
    </div>

    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4">

        <!-- service -->
        <div v-for="each in serviceDataList">
            <div class="pb-3">
                <div class="card border-0">
                    <div class="card-body border-0">
                        <img :src="each.filePath" class="img-fluid w-100 object-fit-cover rounded-1 hpx-200" alt="service">
                        <div class="pt-3 fw-medium text-theme">
                            <div class="truncate-to-1-line">
                                {{each.department}}
                            </div>
                        </div>
                        <div class="pt-3 text-light-gray">
                            <div class="truncate-to-2-line">
                                {{each.description}}
                            </div>
                        </div>
                    </div>
                    <div class="card-footer border-0 bg-white d-flex justify-content-between pb-3">
                        <div class="col-6 pe-1">
                            <button type="button" class="btn btn-outline-theme w-100" @click="manageServiceOpen">
                                Edit
                            </button>
                        </div>
                        <div class="col-6 ps-1">
                            <button type="button" class="btn btn-outline-theme-danger w-100" @click="deleteServiceOpen">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- service manage modal -->
    <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Manage service</h1>
                    <button type="button" class="btn-close shadow-none" @click="manageServiceClose"></button>
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
                        <label for="department" class="form-label">Department</label>
                        <select name="department" id="department" class="form-select" required autocomplete="new-department">
                            <option value="0">select department option</option>
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
                        <button type="button" class="btn btn-secondary w-100" @click="manageServiceClose">
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

    <!-- service delete modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete service</h1>
                    <button type="button" class="btn-close shadow-none" @click="deleteServiceClose"></button>
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
                        <button type="button" class="btn btn-secondary w-100" @click="deleteServiceClose">
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
            serviceDataList: [
                { id: '1', filePath: '/images/department/department-1.jpg', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '2', filePath: '/images/department/department-2.jpg', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '3', filePath: '/images/department/department-3.jpg', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '4', filePath: '/images/department/department-4.jpg', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '5', filePath: '/images/department/department-5.jpg', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '6', filePath: '/images/department/department-6.jpg', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '7', filePath: '/images/department/department-7.jpg', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: '8', filePath: '/images/department/department-8.jpg', department: 'department name', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
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
            imageUrl: null,
        }

    },

    mounted() {



    },

    methods: {

        /* Function to manage box open */
        manageServiceOpen(){
            const myModal = new bootstrap.Modal("#manageModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to manage box close */
        manageServiceClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        /* Function to manage slider open */
        deleteServiceOpen(){
            const myModal = new bootstrap.Modal("#deleteModal", { keyboard: false } );
            myModal.show();
        },

        /* Function to manage slider close */
        deleteServiceClose(){
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
