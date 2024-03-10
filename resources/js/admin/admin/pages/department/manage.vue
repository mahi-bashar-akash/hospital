<template>

    <div class="d-block d-sm-flex align-items-center justify-content-between">

        <div class="mb-2">
            <router-link :to="{name: 'departmentManage'}" class="text-light-gray breadcrumb-title text-decoration-none">
                Departments
            </router-link>
        </div>

        <div class="mb-2 breadcrumb breadcrumb-text">

            <div class="breadcrumb-item">
                <router-link :to="{name: 'dashboard'}" class="me-1 text-light-gray text-decoration-none">
                    Dashboard
                </router-link>
            </div>

            <div class="breadcrumb-item">
                <router-link :to="{name: 'departmentManage'}" class="text-light-gray text-decoration-none">
                    Departments
                </router-link>
            </div>

            <div class="breadcrumb-item">
                <router-link :to="{name: 'departmentManage'}" class="text-light-gray text-decoration-none">
                    New
                </router-link>
            </div>

        </div>

    </div>

</template>

<script>

export default {

    data() {

        return {

        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>
