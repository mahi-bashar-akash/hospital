<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Departments
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
                <router-link :to="{name: 'department'}" class="text-light-gray text-decoration-none">
                    Departments
                </router-link>
            </div>
        </div>

    </div>

    <div class="container py-5">

        <div class="row mb-3">
            <div class="col-lg-12">
                <div class="row justify-content-between">
                    <div class="col-md-4 col-xl-3">
                        <!-- sort -->
                        <select name="sort" class="form-select" autocomplete="new-select-sort">
                            <option value="">Select Option</option>
                            <option value="">A - Z</option>
                            <option value="">Z - A</option>
                            <option value="">New</option>
                            <option value="">Old</option>
                            <option value="">Online available</option>
                            <option value="">Coming soon</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-xl-3">
                        <!-- search -->
                        <div class="position-relative">
                            <input type="text" name="keyword" class="form-control ps-5" required autocomplete="new-search-here" placeholder="Search here">
                            <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- department data list -->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

            <div v-for="each in departmentDataList">
                <div class="pb-3">
                    <router-link :to="{name: 'singleDepartment'}" class="text-decoration-none text-light-gray">
                        <div class="border bg-white h-100">
                            <img :src="each.filePath" class="img-fluid object-fit-cover w-100 hpx-250" :alt="`department `+each.id">
                            <div class="px-3 pt-3 fw-medium text-theme">
                                <div class="truncate-to-1-line">
                                    {{each.name}}
                                </div>
                            </div>
                            <div class="px-3 py-3">
                                <div class="truncate-to-2-line">
                                    {{each.description}}
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>

        <!-- pagination -->
        <nav aria-label="Page navigation example" class="mt-5">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0)">
                        <i class="bi bi-chevron-left"></i>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0)">
                        1
                    </a>
                </li>
                <li class="page-item active">
                    <a class="page-link" href="javascript:void(0)">
                        2
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0)">
                        3
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0)">
                        <i class="bi bi-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </nav>

    </div>

</template>

<script>

export default {

    data() {

        return {
            imageUrl: '/images/breadcrumb.jpg',
            departmentDataList: [
                { id: '1', filePath: '/images/department/department-1.jpg', name: 'Department name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '2', filePath: '/images/department/department-2.jpg', name: 'Department name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '3', filePath: '/images/department/department-3.jpg', name: 'Department name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '4', filePath: '/images/department/department-4.jpg', name: 'Department name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '5', filePath: '/images/department/department-5.jpg', name: 'Department name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '6', filePath: '/images/department/department-6.jpg', name: 'Department name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '7', filePath: '/images/department/department-7.jpg', name: 'Department name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
                { id: '8', filePath: '/images/department/department-8.jpg', name: 'Department name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut eius eligendi molestiae tempore.' },
            ],
        }

    },

    mounted() {


    },

    methods: {}

}

</script>
