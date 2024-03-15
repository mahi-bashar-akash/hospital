<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Events
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
                <router-link :to="{name: 'event'}" class="text-light-gray text-decoration-none">
                    Events
                </router-link>
            </div>
        </div>

    </div>

    <div class="container py-5">

        <!-- service data list -->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

            <div v-for="each in eventDataList">
                <div class="p-3">
                    <router-link :to="{ name: 'singleEvent' }" class="text-decoration-none text-light-gray">
                        <div class="border bg-white h-100">
                            <img :src="each.filePath" class="img-fluid object-fit-cover w-100 hpx-250" :alt="`service `+each.id">
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
    </div>

</template>

<script>

export default {

    data() {

        return {
            imageUrl: '/images/breadcrumb.jpg',
            eventDataList: [
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
