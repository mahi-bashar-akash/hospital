<template>

    <footer class="w-100 bg-light object-fit-cover" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4 py-4 px-3">
                    <div class="mb-3">
                        <router-link :to="{name: 'home'}" class="fw-semibold text-white fs-5 text-decoration-none">
                            Hospital <i class="ms-2 bi bi-plus-circle text-danger"></i>
                        </router-link>
                    </div>
                    <div class="mb-2">
                        <a href="javascript:void(0)" class="nav-link text-white">
                            © 2024 Hospital Plus.
                        </a>
                    </div>
                    <div class="mb-2">
                        <a href="javascript:void(0)" class="nav-link text-white">
                            Designed by ThemeWarrior
                        </a>
                    </div>
                    <div class="mb-2 fw-semibold text-white fs-5 mt-3">
                        TAGS
                    </div>
                    <div class="d-flex justify-content-start align-items-center flex-wrap">
                        <button type="button" class="btn btn-outline-light px-2 py-1 m-1"> Beach </button>
                        <button type="button" class="btn btn-outline-light px-2 py-1 m-1"> Health </button>
                        <button type="button" class="btn btn-outline-light px-2 py-1 m-1"> holiday </button>
                        <button type="button" class="btn btn-outline-light px-2 py-1 m-1"> information </button>
                        <button type="button" class="btn btn-outline-light px-2 py-1 m-1"> kids </button>
                        <button type="button" class="btn btn-outline-light px-2 py-1 m-1"> Music </button>
                        <button type="button" class="btn btn-outline-light px-2 py-1 m-1"> Nature </button>
                        <button type="button" class="btn btn-outline-light px-2 py-1 m-1"> Random Stuff </button>
                        <button type="button" class="btn btn-outline-light px-2 py-1 m-1"> Rock </button>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 py-4 px-3">
                    <div class="mb-3 fw-semibold text-white fs-5">
                        Type of catalogue
                    </div>
                    <router-link :to="{name: 'blog'}" class="nav-link text-white mb-2">
                        Blog
                    </router-link>
                    <router-link :to="{name: 'service'}" class="nav-link text-white mb-2">
                        Service
                    </router-link>
                    <router-link :to="{name: 'event'}" class="nav-link text-white mb-2">
                        Event
                    </router-link>
                </div>
                <div class="col-md-6 col-lg-4 py-4 px-3">
                    <div class="mb-3 fw-semibold text-white fs-5">
                        Pages
                    </div>
                    <router-link :to="{name: 'appointment'}" class="nav-link text-white mb-2">
                        Book appointment
                    </router-link>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Terms & conditions
                    </a>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Privacy & policy
                    </a>
                    <router-link :to="{name: 'gallery'}" class="nav-link text-white mb-2">
                        Gallery
                    </router-link>
                    <router-link :to="{name: 'doctor'}" class="nav-link text-white mb-2">
                        Doctors
                    </router-link>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>

export default {

    data() {

        return {
            imageUrl: '/images/footer.png',
        }

    },

    mounted() {


    },

    methods: {}

}

</script>
