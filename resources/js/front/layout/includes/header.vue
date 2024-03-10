<template>

    <header class="w-100 bg-light">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="javascript:void(0)">
                    Hospital <i class="ms-1 bi bi-plus-circle text-danger"></i>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" @click="collapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item text-end d-inline-block d-lg-none">
                            <button type="button" class="btn btn-close border-0 p-3 icon-close" @click="collapse"></button>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="collapse">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="collapse">
                                Doctors
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="javascript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Departments
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-0 m-0 mt-3 border-0 shadow overflow-hidden">
                                <li>
                                    <a class="dropdown-item background-hover" href="javascript:void(0)" @click="collapse">
                                        Cardiology
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item background-hover" href="javascript:void(0)" @click="collapse">
                                        Dental
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item background-hover" href="javascript:void(0)" @click="collapse">
                                        Neurology
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item background-hover" href="javascript:void(0)" @click="collapse">
                                        Pediatric
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item background-hover" href="javascript:void(0)" @click="collapse">
                                        Traumatology
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item background-hover" href="javascript:void(0)" @click="collapse">
                                        Xray
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="collapse">
                                Gallery
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="collapse">
                                Services
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="collapse">
                                Events
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" @click="collapse">
                                Contact
                            </a>
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
