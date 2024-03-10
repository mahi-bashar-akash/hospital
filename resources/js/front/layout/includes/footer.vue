<template>

    <footer class="w-100 bg-light object-fit-cover" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4 py-4 px-3">
                    <div class="mb-3 fw-semibold text-white fs-5">
                        Hospital <i class="ms-2 bi bi-plus-circle text-danger"></i>
                    </div>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        © 2024 Hospital Plus.
                    </a>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Designed by ThemeWarrior
                    </a>
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
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Blog
                    </a>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Service
                    </a>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Event
                    </a>
                </div>
                <div class="col-md-6 col-lg-4 py-4 px-3">
                    <div class="mb-3 fw-semibold text-white fs-5">
                        Pages
                    </div>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Book appointment
                    </a>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Terms & conditions
                    </a>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Privacy & policy
                    </a>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Gallery
                    </a>
                    <a href="javascript:void(0)" class="nav-link text-white mb-2">
                        Doctors
                    </a>
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
