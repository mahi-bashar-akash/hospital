<template>

    <Header/>

    <router-view/>

    <Footer/>

    <Chat/>

    <BtnTop/>

</template>

<script>

import Header from './includes/header.vue';

import Footer from './includes/footer.vue';

import Chat from './includes/chat.vue';

import BtnTop from "./includes/btn-top.vue";

export default {

    components: {

        Header, Footer, Chat, BtnTop

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
