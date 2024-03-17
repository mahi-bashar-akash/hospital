<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Contact
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
                <router-link :to="{name: 'contact'}" class="text-light-gray text-decoration-none">
                    Contact
                </router-link>
            </div>
        </div>

    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-9 text-light-gray my-4">
                <div class="mb-3">
                    <div class="overflow-hidden w-100 hpx-500">
                        <div id="g-mapdisplay" class="h-100 w-100">
                            <iframe class="w-100 h-100 border-0" src="https://www.google.com/maps/embed/v1/place?q=Dhanmondi+32+Road+Bridge,+Dhanmondi+Bridge,+Dhaka,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="row">
                        <div class="col-md-6">
                            <form action="">
                                <div class="mb-3">
                                    <label for="full_name" class="form-label">Full name</label>
                                    <input id="full_name" type="text" name="" class="form-control" required autocomplete="new-full-name">
                                </div>
                                <div class="mb-3">
                                    <label for="email_address" class="form-label">Email address</label>
                                    <input id="email_address" type="email" name="email" class="form-control" required autocomplete="new-email">
                                </div>
                                <div class="mb-3">
                                    <label for="phone-number" class="form-label">phone number</label>
                                    <input id="phone-number" type="text" name="phone" class="form-control" required autocomplete="new-phone-number">
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea id="message" name="message" class="form-textarea" cols="30" rows="5" required autocomplete="new-message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-theme-danger">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <div class="fs-4 mb-3">
                                Get in touch
                            </div>
                            <p class="mb-3 small">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto fugit
                                quis. Consequatur corporis dolore dolorem eos fuga hic id iusto labore ratione, sit
                                <br><br>
                                soluta, tempora, temporibus voluptas. Corporis est facilis magni natus necessitatibus
                                non pariatur perferendis. Deserunt dicta nisi nulla perferendis voluptatem? Accusantium,
                                consequuntur dolores expedita impedit ipsam minus placeat sed soluta. Esse excepturi hic
                                labore modi molestias quaerat quos sint tempore. Adipisci aperiam assumenda blanditiis
                                cupiditate delectus distinctio dolores doloribus earum est eveniet ex explicabo facere
                                hic id incidunt ipsa, itaque laboriosam maiores molestiae mollitia, natus neque nesciunt
                            </p>
                            <div class="fs-4 mb-3">
                                Contact info
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-envelope me-2"></i> info@gmail.com
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-phone me-2"></i> +1 04830 584923
                            </div>
                            <hr>
                            <div class="mb-3 d-flex align-items-center justify-content-start text-secondary text-opacity-75">
                                <i class="bi bi-facebook me-2"></i>
                                <i class="bi bi-twitter me-2"></i>
                                <i class="bi bi-instagram me-2"></i>
                                <i class="bi bi-linkedin me-2"></i>
                                <i class="bi bi-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
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
        }

    },

    mounted() {


    },

    methods: {}

}

</script>
