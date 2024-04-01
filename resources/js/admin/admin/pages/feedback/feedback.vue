<template>

    <div class="d-block d-sm-flex align-items-center justify-content-between">

        <div class="mb-2">
            <router-link :to="{name: 'feedback'}" class="text-light-gray breadcrumb-title text-decoration-none">
                Customer feedbacks
            </router-link>
        </div>

        <div class="mb-2 breadcrumb breadcrumb-text">

            <div class="breadcrumb-item">
                <router-link :to="{name: 'dashboard'}" class="me-1 text-light-gray text-decoration-none">
                    Dashboard
                </router-link>
            </div>

            <div class="breadcrumb-item">
                <router-link :to="{name: 'feedback'}" class="text-light-gray text-decoration-none">
                    Feedbacks
                </router-link>
            </div>

        </div>

    </div>

    <div class="table-responsive mt-3">
        <table class="table">
            <thead>
                <tr>
                    <th>Sl. No.</th>
                    <th>Name.</th>
                    <th>Email.</th>
                    <th>Phone Number.</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="each in [ 1,2,3,4,5,6,7,8,9,10 ]">
                    <td>{{each}}</td>
                    <td>Customer name {{each}}</td>
                    <td>Customer Email {{each}}</td>
                    <td>Customer Phone Number {{each}}</td>
                    <td>
                        <div class="truncate-to-1-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis maxime molestias saepe?
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
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
