<template>

    <div class="position-fixed end-0 bottom-0 z-3 pe-2 pb-2">
        <button type="button" class="btn btn-theme wpx-35 hpx-35 d-flex justify-content-center align-items-center" v-if="showButton" @click="scrollToTop">
            <i class="bi bi-arrow-up"></i>
        </button>
    </div>

</template>

<script>

export default {

    data() {
        return {
            showButton: false,
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {

        /* Function to scroll to top */
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        },

        /* Function to scroll visible or hide */
        handleScroll() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            if(scrollPosition > 0 && scrollPosition > windowHeight * 0.5) {
                this.showButton = true;
            }else {
                this.showButton = false;
            }
        },

    }

}

</script>
