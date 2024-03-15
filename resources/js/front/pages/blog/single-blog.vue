<template>

    <!-- breadcrumb head -->
    <div class="breadcrumb-content d-flex align-items-center w-100" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <div class="fs-3">
                Blogs
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
                <router-link :to="{name: 'blog'}" class="text-light-gray text-decoration-none">
                    Blogs
                </router-link>
            </div>
            <div class="breadcrumb-item">
                <div class="text-light-gray text-decoration-none text-truncate">
                    Together we can do so much
                </div>
            </div>
        </div>

    </div>

    <div class="container">

        <div class="row">
            <div class="col-lg-8 my-4">

                <!-- single blog data title -->
                <div class="h3 fw-medium text-light-gray mb-3">
                    Together we can do so much
                </div>

                <!-- single blog data - data, author, category type -->
                <div class="ms-3">
                    <div class="d-flex align-items-center mb-4 text-opacity-75 text-secondary small">
                        <span class="me-3"> <i class="bi bi-calendar3 me-1"></i> 01, Fri, 2023 </span>
                        <span class="me-3"> <i class="bi bi-person me-1"></i> Alber Izak </span>
                        <span> <i class="bi bi-tag me-2"></i> Blogs </span>
                    </div>
                </div>

                <!-- single blog data - image -->
                <img :src="`/images/blog/blog-1.jpg`" class="img-fluid w-100 object-fit-cover" alt="blog">

                <!-- single blog data - description -->
                <div class="mt-4 text-light-gray">
                    Chosen from among all others by the Immortal Elders – Solomon, Hercules, Atlas, Zeus, Achilles,
                    Mercury – Billy Batson and his mentor travel the highways and byways of the land on a never-ending
                    mission: to right wrongs, to develop understanding, and to seek justice for all! In time of dire
                    need, young Billy has been granted the power by the Immortals to summon awesome forces at the
                    utterance of a single word – SHAZAM – a word which transforms him in a flash into the mightiest of
                    mortal beings, Captain Marvel!
                    <br><br>
                    Hey, hey, hey! It’s Fat Albert! Now I’m gonna sing a song for you, and this is gonna show you a
                    thing or two. You’ll have some fun now With me and the gang, learning from each other While we do
                    our thing. Na na na gonna have a good time! Na na na gonna have a good time! Hey, hey, hey! This is
                    Bill Cosby coming out with music and fun and if you’re not careful, you may learn something before
                    it’s done! Hey, hey, hey!
                    <br><br>
                    Hot dogs, Armour hot dogs. What kind of kids eat Armour hot dogs? Fat kids, skinny kids, kids who
                    climb on rocks. Tough kids, sissy kids, even kids with chicken pox love hot dogs, Armour hot dogs…
                    The dogs kids love to bite!
                    <br><br>
                    One thousand years ago, superstition and the sword ruled. It was a time of darkness. It was a world
                    of fear. It was the age of gargoyles. Stone by day, warriors by night, we were betrayed by the
                    humans we had sworn to protect, frozen in stone by a magic spell for a thousand years. Now, here in
                    Manhattan, the spell is broken, and we live again! We are defenders of the night! We are Gargoyles!
                    <br><br>
                    What walks down stairs, alone or in pairs, and makes a slinkity sound? A spring, a spring, a
                    marvelous thing, everyone knows it’s Slinky. It’s Slinky, it’s Slinky, for fun it’s a wonderful toy.
                    It’s Slinky, it’s Slinky, it’s fun for a girl or a boy. It’s fun for a girl or boy!
                    <br><br>
                    Enter at your peril, past the vaulted door. Impossible things will happen that the world’s never
                    seen before. In Dexter’s laboratory lives the smartest boy you’ve ever seen, but Dee Dee blows his
                    experiments to Smithereens! There’s gloom and doom when things go boom in Dexter’s lab!
                    <br><br>
                    He was once a little green slab of clay. Gumby! You should see what Gumby can do today. Gumby! He
                    can walk into any book, with his pony pal Pokey, too. If you’ve got a heart then Gumby’s a part of
                    you.
                    <br><br>

                    <!-- social media share article -->
                    <div class="d-flex align-items-center justify-content-start">
                        <span class="fw-medium me-3">Share this Article</span>
                        <span class="d-flex align-items-center">
                            <a href="javascript:void(0)"
                               class="text-decoration-none text-secondary text-opacity-75 me-3">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="javascript:void(0)"
                               class="text-decoration-none text-secondary text-opacity-75 me-3">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="javascript:void(0)"
                               class="text-decoration-none text-secondary text-opacity-75 me-3">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="javascript:void(0)"
                               class="text-decoration-none text-secondary text-opacity-75 me-3">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href="javascript:void(0)"
                               class="text-decoration-none text-secondary text-opacity-75 me-3">
                                <i class="bi bi-youtube"></i>
                            </a>
                        </span>
                    </div>
                </div>

                <br>
                <hr class="p-0 m-0 border">
                <br>

                <!-- more category type -->
                <div class="d-flex align-items-center justify-content-start flex-wrap">
                    <a href="javascript:void(0)" class="btn btn-outline-secondary py-1 px-3 me-2">
                        Health
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-secondary py-1 px-3 me-2">
                        Information
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-secondary py-1 px-3 me-2">
                        Random Stuff
                    </a>
                </div>

                <br>
                <hr class="p-0 m-0 border">
                <br>

                <!-- previous post as show single data -->
                <a href="javascript:void(0)" class="text-decoration-none">
                    <span class="text-danger d-block mb-2">
                        <i class="bi bi-chevron-left me-2"></i> Previous post
                    </span>
                    <span class="text-light-gray d-block fw-medium">
                        The Three Musketeers Surgical Team
                    </span>
                </a>

                <br>
                <hr class="p-0 m-0 border">
                <br>

                <!-- about author of this blog -->
                <div class="fw-medium d-block fs-4 text-light-gray"> ABOUT AUTHOR</div>
                <div class="d-flex align-items-center flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-start">
                    <div class="p-2 wpx-300">
                        <img :src="`/images/avatar/avatar.png`" class="img-fluid object-fit-cover rounded-circle"
                             alt="author avatar">
                    </div>
                    <div class="p-2">
                        <div class="mb-1 fw-medium d-block">
                            Alber Izak
                        </div>
                        <div class="text-light-gray">
                            I am a professional framework developer (Laravel with vueJs as SPA ) currently working for ThemeDevelopment. There once was a
                            story about a man who could turn invisible. I thought it was only a story.
                        </div>
                    </div>
                </div>

                <br>
                <hr class="p-0 m-0 border">
                <br>

                <!-- leave a comment -->
                <div class="fw-medium d-block fs-4 text-light-gray"> Leave a comment</div>

                <br>
                <hr class="p-0 m-0 border">
                <br>

                <form autocomplete="off" class="text-light-gray mb-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group mb-4">
                                <label for="message" class="form-label">Message</label>
                                <textarea id="message" name="message" class="form-textarea" cols="30" rows="5" required autocomplete="new-message"></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-4">
                                <label for="name" class="form-label">Name</label>
                                <input id="name" type="text" name="name" class="form-control" required autocomplete="new-name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-4">
                                <label for="email" class="form-label">Name</label>
                                <input id="email" type="email" name="email" class="form-control" required autocomplete="new-email">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group mb-4">
                                <label for="website-url" class="form-label">Website Url</label>
                                <input id="website-url" type="url" name="website-url" class="form-control" autocomplete="new-website-url" value="https://www.yourwebsiteurl.com/">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group mb-4">
                                <label for="remember" class="form-label text-light-gray">
                                    <input id="remember" type="checkbox" class="form-checkbox" name="remember" autocomplete="new-remember">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-theme-success wpx-120">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <div class="col-lg-4">
                <SearchBlogTag/>
            </div>
        </div>

    </div>

</template>

<script>
import SearchBlogTag from "../../component/searchBlogTag.vue";

export default {
    components: {
        SearchBlogTag
    },
    data() {
        return {
            imageUrl: '/images/breadcrumb.jpg',
        }
    },
    mounted() {
    },
    methods: {}
}

</script>
