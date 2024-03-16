<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Book appointment
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
                <router-link :to="{name: 'schedules'}" class="text-light-gray text-decoration-none">
                    Doctor schedules
                </router-link>
            </div>
            <div class="breadcrumb-item">
                <div class="text-light-gray text-truncate">
                    Morning shifts
                </div>
            </div>
        </div>

    </div>

    <section class="w-100 py-5">
        <div class="container">
            <div class="mb-3">
                <div class="doctor-schedule">
                    <div class="schedule-header fw-medium">
                        <div class="schedule-box doctor-name"> Doctor name </div>
                        <div class="schedule-box schedule-day"> Saturday </div>
                        <div class="schedule-box schedule-day"> Sunday </div>
                        <div class="schedule-box schedule-day"> Monday </div>
                        <div class="schedule-box schedule-day"> Tuesday </div>
                        <div class="schedule-box schedule-day"> Wednesday </div>
                        <div class="schedule-box schedule-day"> Thursday </div>
                        <div class="schedule-box schedule-day"> Friday </div>
                    </div>
                    <div class="schedule-body">
                        <div class="schedule-box doctor-name"> Dr. Mahi Bashar Akash </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 10:00 - 12:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 01:00 - 02:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 02:00 - 03:00 </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="doctor-schedule">
                    <div class="schedule-header fw-medium">
                        <div class="schedule-box doctor-name"> Doctor name </div>
                        <div class="schedule-box schedule-day"> Saturday </div>
                        <div class="schedule-box schedule-day"> Sunday </div>
                        <div class="schedule-box schedule-day"> Monday </div>
                        <div class="schedule-box schedule-day"> Tuesday </div>
                        <div class="schedule-box schedule-day"> Wednesday </div>
                        <div class="schedule-box schedule-day"> Thursday </div>
                        <div class="schedule-box schedule-day"> Friday </div>
                    </div>
                    <div class="schedule-body">
                        <div class="schedule-box doctor-name"> Dr. Ariful Jorder Arif </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 01:00 - 02:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 02:00 - 03:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 03:00 - 04:00 </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="doctor-schedule">
                    <div class="schedule-header fw-medium">
                        <div class="schedule-box doctor-name"> Doctor name </div>
                        <div class="schedule-box schedule-day"> Saturday </div>
                        <div class="schedule-box schedule-day"> Sunday </div>
                        <div class="schedule-box schedule-day"> Monday </div>
                        <div class="schedule-box schedule-day"> Tuesday </div>
                        <div class="schedule-box schedule-day"> Wednesday </div>
                        <div class="schedule-box schedule-day"> Thursday </div>
                        <div class="schedule-box schedule-day"> Friday </div>
                    </div>
                    <div class="schedule-body">
                        <div class="schedule-box doctor-name"> Dr. Soheli Bashar Urmee </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 02:00 - 03:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 03:00 - 04:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 04:00 - 05:00 </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="doctor-schedule">
                    <div class="schedule-header fw-medium">
                        <div class="schedule-box doctor-name"> Doctor name </div>
                        <div class="schedule-box schedule-day"> Saturday </div>
                        <div class="schedule-box schedule-day"> Sunday </div>
                        <div class="schedule-box schedule-day"> Monday </div>
                        <div class="schedule-box schedule-day"> Tuesday </div>
                        <div class="schedule-box schedule-day"> Wednesday </div>
                        <div class="schedule-box schedule-day"> Thursday </div>
                        <div class="schedule-box schedule-day"> Friday </div>
                    </div>
                    <div class="schedule-body">
                        <div class="schedule-box doctor-name"> Dr. Farzana Bashar Juthi </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 04:00 - 05:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 05:00 - 06:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 06:00 - 07:00 </div>
                        <div class="schedule-box schedule-day">  </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="doctor-schedule">
                    <div class="schedule-header fw-medium">
                        <div class="schedule-box doctor-name"> Doctor name </div>
                        <div class="schedule-box schedule-day"> Saturday </div>
                        <div class="schedule-box schedule-day"> Sunday </div>
                        <div class="schedule-box schedule-day"> Monday </div>
                        <div class="schedule-box schedule-day"> Tuesday </div>
                        <div class="schedule-box schedule-day"> Wednesday </div>
                        <div class="schedule-box schedule-day"> Thursday </div>
                        <div class="schedule-box schedule-day"> Friday </div>
                    </div>
                    <div class="schedule-body">
                        <div class="schedule-box doctor-name"> Dr. Zakia Mun Mun Tumpa </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 06:00 - 07:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 07:00 - 08:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 08:00 - 09:00 </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="doctor-schedule">
                    <div class="schedule-header fw-medium">
                        <div class="schedule-box doctor-name"> Doctor name </div>
                        <div class="schedule-box schedule-day"> Saturday </div>
                        <div class="schedule-box schedule-day"> Sunday </div>
                        <div class="schedule-box schedule-day"> Monday </div>
                        <div class="schedule-box schedule-day"> Tuesday </div>
                        <div class="schedule-box schedule-day"> Wednesday </div>
                        <div class="schedule-box schedule-day"> Thursday </div>
                        <div class="schedule-box schedule-day"> Friday </div>
                    </div>
                    <div class="schedule-body">
                        <div class="schedule-box doctor-name"> Dr. Fatema Bashar Aira </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 10:00 - 12:00 </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day">  </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 07:00 - 08:00 </div>
                        <div class="schedule-box schedule-day bg-light-theme"> 08:00 - 09:00 </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

export default {
    data() {
        return {
            imageUrl: '/images/breadcrumb.jpg',
        }
    },
    mounted() {  },
    methods: {  }
}

</script>
