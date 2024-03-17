<template>

    <div class="container-fluid authentication">
        <div class="row justify-content-center align-items-center flex-column vh-100 p-3">

            <div class="auth-content shadow rounded-3 p-3 p-sm-5 bg-white">

                <div class="mb-3 text-center h4">
                    Admin panel
                </div>

                <form>

                    <div class="form-group mb-3">
                        <label for="email" class="form-label text-light-gray">
                            email
                        </label>
                        <input type="email" name="email" class="form-control shadow-none rounded-1" required>
                    </div>

                    <div class="form-group mb-3">
                        <label for="password" class="form-label text-light-gray">
                            Password
                        </label>
                        <div class="position-relative">
                            <input :type="passwordFieldType" name="password" class="form-control shadow-none rounded-1" required>
                            <div class="position-absolute top-50 end-0 translate-middle-y pe-2 cursor-pointer" @click="passwordVisibility">
                                <span v-if="passwordFieldType === 'text'">
                                    <i class="bi bi-eye-slash"></i>
                                </span>
                                <span v-if="passwordFieldType === 'password'">
                                    <i class="bi bi-eye"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary wpx-90">
                        login
                    </button>

                </form>

            </div>

        </div>
    </div>

</template>

<script>

export default {

    data() {

        return {
            password: '',
            passwordFieldType: 'password',
        }

    },

    mounted() {



    },

    methods: {

        /* Function to password visibility */
        passwordVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },

    }

}

</script>
