<template>

    <Header/>

    <router-view/>

    <Footer/>

    <Chat/>

</template>

<script>

import Header from './includes/header.vue';

import Footer from './includes/footer.vue';

import Chat from './includes/chat.vue';

export default {

    components: {

        Header, Footer, Chat

    },

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
