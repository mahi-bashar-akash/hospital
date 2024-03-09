<template>

    <div class="d-block d-sm-flex align-items-center justify-content-between">
        <router-link :to="{name: 'slider'}" class="mb-2 text-light-gray breadcrumb-title text-decoration-none">
            Slider management
        </router-link>

        <div class="mb-2 d-flex align-items-center justify-content-start breadcrumb-text">
            <router-link :to="{name: 'dashboard'}" class="me-1 text-light-gray text-decoration-none">
                Dashboard
            </router-link>
            <div class="me-1 text-light-gray">
                <i class="bi bi-chevron-right"></i>
            </div>
            <router-link :to="{name: 'slider'}" class="text-light-gray text-decoration-none">
                Slider
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
