<template>

    <div class="py-4">

        <!-- search -->

        <div class="position-relative">
            <input type="text" name="keyword" class="form-control ps-5" placeholder="Search here" required autocomplete="new-keyword">
            <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                <i class="bi bi-search text-light-gray"></i>
            </div>
        </div>

        <div class="mt-3 fs-4 text-light-gray">
            Blog Categories
        </div>

        <!-- blog category list -->

        <div class="mt-3">

            <a href="javascript:void(0)" class="link-icon-hover py-2 mb-2" v-for="each in categoryType">
                <span class="d-flex align-items-center"> <i class="bi bi-folder-fill me-2"></i> {{each.name}} </span>
                <span class="badge bg-badge">( {{each.count}} )</span>
            </a>

        </div>

        <div class="mt-3 fs-4 text-light-gray">
            Blog Tags
        </div>

        <div class="mt-3">

            <button type="button" class="btn btn-outline-secondary px-3 py-1 me-1 mb-1" v-for="each in blogTagList">
                {{each.name}}
            </button>

        </div>

    </div>

</template>

<script>

export default {

    data() {
        return{

            categoryType: [
                { id: '1', name: 'Blogs', count: '20', },
                { id: '2', name: 'Counselling', count: '15', },
                { id: '3', name: 'Health', count: '10', },
                { id: '4', name: 'Kids', count: '18', },
            ],

            blogTagList: [
                { id: '1', name: 'Beach' },
                { id: '2', name: 'Health' },
                { id: '3', name: 'Holiday' },
                { id: '4', name: 'Information' },
                { id: '5', name: 'Kids' },
                { id: '6', name: 'Music' },
                { id: '7', name: 'Nature' },
                { id: '8', name: 'Random Stuff' },
                { id: '9', name: 'Rock' },
            ],

        }
    },

    mounted() {  },

    methods: {  }

}

</script>
