<template>

    <div class="d-block d-sm-flex align-items-center justify-content-between">

        <div class="mb-2">
            <router-link :to="{name: 'doctor'}" class="text-light-gray breadcrumb-title text-decoration-none">
                Doctor management
            </router-link>
        </div>

        <div class="mb-2 d-flex align-items-center justify-content-start breadcrumb-text">

            <router-link :to="{name: 'dashboard'}" class="me-1 text-light-gray text-decoration-none">
                Dashboard
            </router-link>

            <div class="me-1 text-light-gray">
                <i class="bi bi-chevron-right"></i>
            </div>

            <router-link :to="{name: 'doctor'}" class="text-light-gray text-decoration-none">
                Doctor management
            </router-link>

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
