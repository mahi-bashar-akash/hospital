<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Events
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
                <router-link :to="{name: 'event'}" class="text-light-gray text-decoration-none">
                    Events
                </router-link>
            </div>
            <div class="breadcrumb-item">
                <div class="text-light-gray text-decoration-none fw-medium text-truncate">
                    Children’s Jakarta Hoops Fest
                </div>
            </div>
        </div>

    </div>

    <div class="container">
        <div class="fs-3 mb-3 text-light-gray fw-medium"> Children’s Jakarta Hoops Fest</div>
        <div class="col-md-12 bg-theme text-white">
            <div class="p-3">
                <i class="bi bi-calendar3"></i> <span class="ms-2"> October 28, 2016 </span>
            </div>
            <div class="p-3">
                <i class="bi bi-clock"></i> <span class="ms-2"> 12.00 - end </span>
            </div>
            <div class="p-3">
                <i class="bi bi-envelope"></i> <span class="ms-2"> events@hospitalplus.com </span>
            </div>
            <div class="p-3 line-height-2">
                <i class="bi bi-geo-alt"></i>
                <span
                    class="ms-2"> Jalan Kintamani Raya No.2, Kawasan Daan Mogot Baru, Daerah Khusus Ibukota Jakarta </span>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 my-4">
                <div class="text-light-gray">
                    Come and knock on our door. We’ve been waiting for you. Where the kisses are hers and hers and his,
                    three’s company, too! Come and dance on our floor. Take a step that is new. We’ve a lovable space
                    that needs your face, three’s company, too! You’ll see that life is a ball again and laughter is
                    callin’ for you. Down at our rendezvous, three’s company, too!
                    <br><br>
                    Wonder Woman, Wonder Woman. All the world’s waiting for you, and the power you possess. In your
                    satin tights, fighting for your rights, and the old Red, White and Blue! Wonder Woman, Wonder Woman.
                    Now the world is ready for you, and the wonders you can do. Make a hawk a dove, stop a war with
                    love. Make a liar tell the truth. Wonder Woman, get us out from under, Wonder Woman. All our hopes
                    are pinned on you, and the magic that you do. Stop a bullet cold, make the Axis fall. Change their
                    minds, and change the world. Wonder Woman, Wonder Woman. You’re a wonder, Wonder Woman.
                    <br><br>
                    Moon over Parma, bring my love to me tonight. Guide her to Cleveland, underneath your silvery light.
                    We’re going bowlin’ so don’t lose her in Solon. Moon over Parma, tonight!
                    <br><br>
                    It seems today that all you see is violence in movies and sex on tv, but where are those good
                    old-fashioned values on which we used to rely? Lucky there’s a family guy, lucky there’s a man who
                    positively can do all the things that make us laugh and cry – he’s our family guy!
                    <br><br>
                    My kinda people, my kinda place. There’s something special about this place. Got no reason to stray
                    too far, ’cause it’s all right here in my own backyard! This is a Burger King town, it’s made just
                    for me! This is a Burger King town, we know how burgers should be! Right up the road, left at the
                    sign. My way, your way, one at a time, hot off the fire with anything on it! And don’t it feel good
                    when it’s just how you want it? This is a Burger King town, it’s made just for me! This is a Burger
                    King town, we know how burgers should be!
                    <br><br>
                    Green Acres is the place to be. Farm livin’ is the life for me. Land spreadin’ out so far and wide.
                    Keep Manhattan, just give me that countryside. New York is where I’d rather stay. I get allergic
                    smelling hay. I just adore a penthouse view. Darling I love you but give me Park Avenue. The chores!
                    The stores! Fresh air! Times Square! You are my wife. Good bye, city life. Green Acres we are there!
                </div>
            </div>
            <div class="col-lg-4 my-4">
                <div class="bg-white text-light-gray">
                    <div class="fw-medium border-bottom pb-3">
                        Details
                    </div>
                    <div class="mt-3">
                        <img :src="`/images/blog/blog-1.jpg`" class="img-fluid w-100 object-fit-cover" alt="department">
                    </div>
                    <hr class="border">
                    <div class="mt-3">
                        <span class="fw-medium">Date :</span>
                        Friday, 28 October 2016
                    </div>
                    <hr class="border">
                    <div class="mt-3">
                        <span class="fw-medium">Time :</span>
                        12.00 - end
                    </div>
                    <hr class="border">
                    <div class="mt-3">
                        <span class="fw-medium">Location :</span>
                        Jalan Kintamani Raya No.2, Kawasan Daan Mogot Baru, Daerah Khusus Ibukota Jakarta
                    </div>
                    <hr class="border">
                    <div class="mt-3">
                        <span class="fw-medium">Organizer :</span>
                        Hermina Events
                    </div>
                    <hr class="border">
                    <div class="mt-3">
                        <span class="fw-medium">Phone :</span>
                        021 5343 6546
                    </div>
                    <hr class="border">
                    <div class="mt-3">
                        <span class="fw-medium">Email :</span>
                        events@hospitalplus.com
                    </div>
                    <hr class="border">
                    <div class="mt-3">
                        <div class="fw-medium d-block">SHARE THIS EVENT</div>
                    </div>
                    <hr class="border">
                    <div class="mt-3 d-flex align-items-center">
                        <a href="javascript:void(0)" class="text-secondary text-opacity-75 text-decoration-none me-3">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="javascript:void(0)" class="text-secondary text-opacity-75 text-decoration-none me-3">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="javascript:void(0)" class="text-secondary text-opacity-75 text-decoration-none me-3">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="javascript:void(0)" class="text-secondary text-opacity-75 text-decoration-none me-3">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="javascript:void(0)" class="text-secondary text-opacity-75 text-decoration-none me-3">
                            <i class="bi bi-youtube"></i>
                        </a>
                        <a href="javascript:void(0)" class="text-secondary text-opacity-75 text-decoration-none">
                            <i class="bi bi-google"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="w-100">
        <div class="container">
            <div class="mb-3 fs-4 fw-medium text-light-gray">Related Events</div>
            <div class="related-carousel owl-carousel owl-theme">
                <div v-for="each in eventDataList">
                    <div class="item">
                        <div class="border p-0">
                            <a href="javascript:void(0)" class="h-100 p-0 text-decoration-none">
                                <img :src="each.filePath" class="img-fluid w-100 object-fit-cover hpx-250" :alt="`banner `+ each.id">
                                <div class="p-3 fw-medium text-theme">
                                    {{each.title}}
                                </div>
                                <div class="p-3 pt-0 small text-secondary text-opacity-75">
                                    {{each.date}}
                                </div>
                            </a>
                        </div>
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
            eventDataList: [
                { id: '1', filePath: '/images/department/department-1.jpg', title: 'Staying Healthy As You Age', date: 'January 26, 2015' },
                { id: '2', filePath: '/images/department/department-2.jpg', title: 'Children’s Jakarta Hoops Fest', date: 'January 26, 2015' },
                { id: '3', filePath: '/images/department/department-3.jpg', title: 'Happiest Baby on the Block', date: 'January 26, 2015' },
                { id: '4', filePath: '/images/department/department-4.jpg', title: 'Parenting Workshop', date: 'January 26, 2015' },
                { id: '5', filePath: '/images/department/department-5.jpg', title: 'Fresh goes better in life', date: 'January 26, 2015' },
                { id: '6', filePath: '/images/department/department-6.jpg', title: 'Come and knock on our...', date: 'January 26, 2015' },
                { id: '7', filePath: '/images/department/department-7.jpg', title: 'Come and knock on our...', date: 'January 26, 2015' },
                { id: '8', filePath: '/images/department/department-8.jpg', title: 'There’s something special about this...', date: 'January 26, 2015' },
            ],
        }
    },
    mounted() {
        this.relatedEventCarousel();
    },
    methods: {

        /* Function to control related carousel */
        relatedEventCarousel() {
            $('.related-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
            })
        },


    }
}

</script>
