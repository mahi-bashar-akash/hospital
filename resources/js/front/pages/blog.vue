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

                <div class="py-4 border-bottom">

                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray w-100">

                        <div class="fs-3 mb-3">
                            Together we can do so much
                        </div>

                        <div class="d-flex align-items-center mb-3 text-opacity-50 text-secondary small">
                        <span class="me-2">
                            <i class="bi bi-calendar3 me-2"></i> Mar 11, 2024
                        </span>
                            <span class="me-2">
                            <i class="bi bi-person me-2"></i> Ashiddiqi
                        </span>
                            <span class="me-2">
                            <i class="bi bi-tag me-2"></i> Blogs
                        </span>
                        </div>

                        <div class="mb-3">
                            <img :src="`/images/blog/blog-1.jpg`" class="img-fluid object-fit-cover w-100" alt="blog 1">
                        </div>

                        <div class="mb-3">
                            Chosen from among all others by the Immortal Elders – Solomon, Hercules, Atlas, Zeus, Achilles,
                            Mercury – Billy Batson and his mentor travel the highways and byways of the land on a
                            never-ending mission: to right wrongs, to develop understanding, and to seek justice for all! In
                            time of dire need, young Billy has been granted the power by the…
                        </div>

                        <button type="button" class="btn btn-theme-success px-4 py-2 rounded-1">
                            Learn more
                        </button>

                    </a>

                </div>

                <div class="py-4 border-bottom">

                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray w-100">

                    <div class="fs-3 mb-3">
                        Together we can do so much
                    </div>

                    <div class="d-flex align-items-center mb-3 text-opacity-50 text-secondary small">
                        <span class="me-2">
                            <i class="bi bi-calendar3 me-2"></i> Mar 11, 2024
                        </span>
                        <span class="me-2">
                            <i class="bi bi-person me-2"></i> Ashiddiqi
                        </span>
                        <span class="me-2">
                            <i class="bi bi-tag me-2"></i> Blogs
                        </span>
                    </div>

                    <div class="mb-3">
                        <img :src="`/images/blog/blog-2.jpg`" class="img-fluid object-fit-cover w-100" alt="blog 2">
                    </div>

                    <div class="mb-3">
                        Chosen from among all others by the Immortal Elders – Solomon, Hercules, Atlas, Zeus, Achilles,
                        Mercury – Billy Batson and his mentor travel the highways and byways of the land on a
                        never-ending mission: to right wrongs, to develop understanding, and to seek justice for all! In
                        time of dire need, young Billy has been granted the power by the…
                    </div>

                    <button type="button" class="btn btn-theme-success px-4 py-2 rounded-1">
                        Learn more
                    </button>

                </a>

                </div>

                <div class="py-4 border-bottom">

                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray w-100">

                        <div class="fs-3 mb-3">
                            Together we can do so much
                        </div>

                        <div class="d-flex align-items-center mb-3 text-opacity-50 text-secondary small">
                        <span class="me-2">
                            <i class="bi bi-calendar3 me-2"></i> Mar 11, 2024
                        </span>
                            <span class="me-2">
                            <i class="bi bi-person me-2"></i> Ashiddiqi
                        </span>
                            <span class="me-2">
                            <i class="bi bi-tag me-2"></i> Blogs
                        </span>
                        </div>

                        <div class="mb-3">
                            <img :src="`/images/blog/blog-3.jpg`" class="img-fluid object-fit-cover w-100" alt="blog 3">
                        </div>

                        <div class="mb-3">
                            Chosen from among all others by the Immortal Elders – Solomon, Hercules, Atlas, Zeus, Achilles,
                            Mercury – Billy Batson and his mentor travel the highways and byways of the land on a
                            never-ending mission: to right wrongs, to develop understanding, and to seek justice for all! In
                            time of dire need, young Billy has been granted the power by the…
                        </div>

                        <button type="button" class="btn btn-theme-success px-4 py-2 rounded-1">
                            Learn more
                        </button>

                    </a>

                </div>

                <div class="py-4 border-bottom">

                    <a href="javascript:void(0)" class="text-decoration-none text-light-gray w-100">

                        <div class="fs-3 mb-3">
                            Together we can do so much
                        </div>

                        <div class="d-flex align-items-center mb-3 text-opacity-50 text-secondary small">
                        <span class="me-2">
                            <i class="bi bi-calendar3 me-2"></i> Mar 11, 2024
                        </span>
                            <span class="me-2">
                            <i class="bi bi-person me-2"></i> Ashiddiqi
                        </span>
                            <span class="me-2">
                            <i class="bi bi-tag me-2"></i> Blogs
                        </span>
                        </div>

                        <div class="mb-3">
                            <img :src="`/images/blog/blog-4.jpg`" class="img-fluid object-fit-cover w-100" alt="blog 4">
                        </div>

                        <div class="mb-3">
                            Chosen from among all others by the Immortal Elders – Solomon, Hercules, Atlas, Zeus, Achilles,
                            Mercury – Billy Batson and his mentor travel the highways and byways of the land on a
                            never-ending mission: to right wrongs, to develop understanding, and to seek justice for all! In
                            time of dire need, young Billy has been granted the power by the…
                        </div>

                        <button type="button" class="btn btn-theme-success px-4 py-2 rounded-1">
                            Learn more
                        </button>

                    </a>

                </div>

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

                <div class="py-4">

                    <div class="position-relative">
                        <input type="text" name="keyword" class="form-control ps-5" placeholder="Search here" required autocomplete="new-keyword">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search text-light-gray"></i>
                        </div>
                    </div>

                    <div class="mt-3 fs-4 text-light-gray">
                        Blog categories
                    </div>

                    <div class="mt-3">
                        <a href="javascript:void(0)" class="link-icon-hover py-2 mb-2">
                            <span class="d-flex align-items-center">
                                <i class="bi bi-folder-fill me-2"></i>
                                Blogs
                            </span>
                            <span class="badge bg-badge">( 20 )</span>
                        </a>
                        <a href="javascript:void(0)" class="link-icon-hover py-2 mb-2">
                            <span class="d-flex align-items-center">
                                <i class="bi bi-folder-fill me-2"></i>
                                Counselling
                            </span>
                            <span class="badge bg-badge">( 15 )</span>
                        </a>
                        <a href="javascript:void(0)" class="link-icon-hover py-2 mb-2">
                            <span class="d-flex align-items-center">
                                <i class="bi bi-folder-fill me-2"></i>
                                Health
                            </span>
                            <span class="badge bg-badge">( 10 )</span>
                        </a>
                        <a href="javascript:void(0)" class="link-icon-hover py-2 mb-2">
                            <span class="d-flex align-items-center">
                                <i class="bi bi-folder-fill me-2"></i>
                                Kids
                            </span>
                            <span class="badge bg-badge">( 18 )</span>
                        </a>
                    </div>

                    <div class="mt-3 fs-4 text-light-gray">
                        Blog Tags
                    </div>

                    <div class="mt-3">
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Beach
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Health
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Holiday
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Information
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Kids
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Music
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Nature
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Random Stuff
                        </button>
                        <button type="button" class="btn btn-outline-theme px-3 py-1 m-1">
                            Rock
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
            imageUrl: '/images/breadcrumb.jpg',
        }

    },

    mounted() {


    },

    methods: {}

}

</script>
