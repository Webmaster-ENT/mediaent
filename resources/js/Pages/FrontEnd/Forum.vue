<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import NavbarUser from "@/Components/NavbarUser.vue";
import FooterUser from "@/Components/FooterUser.vue";
import {
  HandThumbUpIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  forums: Object,
});
</script>
<!-- L T H -->
<!-- 24 20 16 -->
<!-- 20 18 14 -->

<template>
    <NavbarUser />
    <div class="bg-sky-900">
        <div class=" max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
        <br />
        <br />
        <p class="text-white font-bold text-base md:text-xl md:ml-24 lg:text-2xl lg:ml-32">FORUM</p>
        <br />
        <div
            v-for="forum in forums"
            :key="forum.id"
        >
            <div>
                <div class="py-4 md:py-6 md:ml-24 lg:p-8">
                    <div class="flex">
                        <UserCircleIcon
                            class="text-white w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                        ></UserCircleIcon>
                        <div class="mt-1.5">
                            <div
                                class="ml-3 uppercase tracking-wide text-xs text-white font-semibold md:text-base lg:text-lg"
                            >
                                {{ forum.user.name }}
                            </div>

                            <p class="ml-3 font-medium text-slate-400 text-xs md:text-sm lg:text-base">
                                Asked On {{ forum.created_at }} WIB
                            </p>
                            <Link
                                :href="route('detail.showforum', [forum.user.name, forum.id])"
                            >
                                <div
                                    class="mt-2 ml-3 text-white font-medium mt-7 text-base md:text-xl lg:text-2xl"
                                    v-html="forum.subject"
                                ></div>
                            </Link>
                            <div class="mt-4 md:mt-6">
                                <div
                                    class="flex ml-3 text-white items-center text-sm md:text-xl"
                                >
                                    <HandThumbUpIcon class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                    <span class="mx-2 mr-6"
                                        >{{ forum.likes.length }}
                                    </span>

                                    <ChatBubbleLeftEllipsisIcon class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                    <span class="mx-2">{{
                                        forum.comments.length
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <hr class=" m-auto border-t-2 my-2 w-4/5" />
            </div>
            
        </div>
    <!-- <FooterUser /> -->
    </div>
    
</template>

<style setup>
/* @import url("https://fonts.googleapis.com"); */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

div {
  font-family: Roboto;
}
</style>
