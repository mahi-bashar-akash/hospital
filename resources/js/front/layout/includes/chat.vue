<template>

    <div class="position-fixed end-0 z-3 chat-content" :class="{active: chatManage}">
        <div class="wpx-350 hpx-400 shadow bg-white border">
            <div class="hpx-50 d-flex justify-content-between align-items-center border-bottom">
                <div class="fw-medium ps-3">Customer care</div>
                <div class="d-flex justify-content-start align-items-center">
                    <button type="button" class="btn btn-icon rounded-0 hpx-50 border-0" @click="chatToggle">
                        <i class="bi bi-dash-lg"></i>
                    </button>
                </div>
            </div>
            <div class="hpx-300 border-bottom p-2">

                <!-- help centre -->
                <div class="d-flex align-items-center">
                    <img :src="`/images/avatar/avatar.png`" class="wpx-45 hpx-45 rounded-circle" alt="help care">
                    <div class="ms-2 bg-theme text-white py-2 px-3 rounded-2">
                        Hello sir / madam, how can i help you?
                    </div>
                </div>

            </div>
            <div class="hpx-50 d-flex justify-content-between">
                <input type="text" name="" class="form-control rounded-0 shadow-none border-0" placeholder="Typing here">
                <button type="button" class="btn btn-theme rounded-0">
                    Send
                </button>
            </div>
        </div>
    </div>

</template>

<script>

export default {

    data() {

        return {
            chatManage: false,
        }

    },

    mounted() {  },

    methods: {
        chatToggle() {
            this.chatManage = !this.chatManage;
        }
    }

}

</script>
