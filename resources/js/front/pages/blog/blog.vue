<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Blogs
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
                    Blogs
                </router-link>
            </div>
        </div>

    </div>

    <div class="container py-5">

        <div class="row">

            <div class="col-lg-8">

                <!-- list of data -->

                <div class="py-4 border-bottom" v-for="each in blogDataList">

                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray w-100">

                        <div class="fs-3 mb-3">
                            {{each.title}}
                        </div>

                        <div class="d-flex align-items-center mb-3 text-opacity-50 text-secondary small">
                            <span class="me-2"> <i class="bi bi-calendar3 me-2"></i> {{each.date}} </span>
                            <span class="me-2"> <i class="bi bi-person me-2"></i> {{each.author}} </span>
                            <span class="me-2"> <i class="bi bi-tag me-2"></i> {{each.categoryType}} </span>
                        </div>

                        <div class="mb-3">
                            <img :src="each.filePath" class="img-fluid object-fit-cover w-100" :alt="each.id">
                        </div>

                        <div class="mb-3">
                            <div class="truncate-to-2-line">
                                {{each.description}}
                            </div>
                        </div>

                        <button type="button" class="btn btn-theme-success px-4 py-2 rounded-1">
                            Learn more
                        </button>

                    </a>

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

    data() {

        return {
            imageUrl: '/images/breadcrumb.jpg',
            blogDataList: [
                { id: '1', title: 'Together we can do so much', date: '01, Fri, 2023', author: 'Alber Izak', categoryType: 'Blogs', filePath: '/images/blog/blog-1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed.' },
                { id: '2', title: 'Together we can do so much', date: '01, Fri, 2023', author: 'Alber Izak', categoryType: 'Blogs', filePath: '/images/blog/blog-2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed.' },
                { id: '3', title: 'Together we can do so much', date: '01, Fri, 2023', author: 'Alber Izak', categoryType: 'Blogs', filePath: '/images/blog/blog-3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed.' },
                { id: '4', title: 'Together we can do so much', date: '01, Fri, 2023', author: 'Alber Izak', categoryType: 'Blogs', filePath: '/images/blog/blog-4.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque id non odit quis recusandae sed.' },
            ],
        }

    },

    mounted() {


    },

    methods: {}

}

</script>
