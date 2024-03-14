<template>

    <header class="w-100 bg-white sticky-top">
        <nav class="navbar navbar-expand-lg py-3">
            <div class="container">
                <router-link :to="{name: 'home'}" class="navbar-brand fw-bold text-light-gray">
                    Hospital <i class="ms-1 bi bi-plus-circle text-danger"></i>
                </router-link>
                <button class="navbar-toggler shadow-sm border-0" type="button" data-bs-toggle="collapse" @click="collapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item text-end d-inline-block d-lg-none">
                            <button type="button" class="btn btn-close border-0 p-3 icon-close" @click="collapse"></button>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'home'}" class="nav-link" @click="collapse">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'doctor'}" class="nav-link" @click="collapse">
                                Doctors
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'department'}" class="nav-link" @click="collapse">
                                Departments
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'gallery'}" class="nav-link" @click="collapse">
                                Gallery
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'service'}" class="nav-link" @click="collapse">
                                Services
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'event'}" class="nav-link" @click="collapse">
                                Events
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'blog'}" class="nav-link" @click="collapse">
                                Blogs
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'appointment'}" class="nav-link" @click="collapse">
                                Book appointment
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'contact'}" class="nav-link" @click="collapse">
                                Contact
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>

<script>

export default {

    data() {

        return {
            navbarToggle: {
                'data-bs-toggle' :  'collapse',
                'data-bs-target' :  '#navbarSupportedContent',
                'aria-controls'  :  'navbarSupportedContent',
                'aria-expanded'  :  'false',
                'aria-label'     :  'Toggle navigation',
            },
        }

    },

    mounted() {



    },

    methods: {

        /* Function to collapse in navbar responsive */
        collapse() {
            if(window.innerWidth < 991){
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                } else {
                    navbarCollapse.classList.add('show');
                }
            }
        }

    }

}

</script>
