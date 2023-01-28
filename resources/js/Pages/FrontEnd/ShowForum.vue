<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Textarea from "@/Components/Textarea.vue";
import {
    HandThumbUpIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
    forums: Object,
    comments: Object,
});
</script>

<template>
    <br />
    <br />
    <Link :href="route('all-forum.allforum')">
        <p class="mx-36 text-xl font-bold">Back To Article</p>
    </Link>
    <br />
    <br />
    <div
        class="max-w-xs my-auto md:max-w-2xl lg:max-w-5xl mx-auto rounded-xl overflow-hidden"
        v-for="forum in forums"
        :key="forum.id"
    >
        <div class="md:flex">
            <div class="p-8">
                <div class="flex">
                    <UserCircleIcon
                        class="text-sky-900 w-14 h-14"
                    ></UserCircleIcon>
                    <div class="mt-1.5">
                        <div
                            class="ml-6 uppercase tracking-wide text-sm font-semibold"
                        >
                            {{ forum.user.name }}
                        </div>
                        <p class="ml-6 font-medium text-sm opacity-50">
                            Asked on {{ forum.created_at }} WIB
                        </p>
                        <div
                            class="mt-2 ml-6 font-medium text-2xl mt-7"
                            v-html="forum.subject"
                        ></div>
                        <div class="mt-7">
                            <div class="flex ml-6 text-xl items-center">
                                <HandThumbUpIcon class="w-6 h-6" />
                                <span class="mx-2 mr-6"
                                    >{{ forum.likes.length }}
                                </span>

                                <ChatBubbleLeftEllipsisIcon class="w-6 h-6" />
                                <span class="mx-2">{{
                                    forum.comments.length
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-7 tracking-wide mx-auto py-auto flex-none">
                    <a
                        class="w-full py-2 h-full bg-sky-900 rounded-xl"
                        type=""
                        href="#comment"
                    >
                        <b class="mx-14 text-white md:mx-56 lg:mx-96"
                            >Answer Question</b
                        >
                    </a>
                </div>
            </div>
        </div>
        <div
            class="max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto rounded-xl overflow-hidden"
            v-for="comment in comments"
        >
            <br />
            <br />

            <hr class="w-4/5 m-auto border-t-2" />

            <br />
            <br />
            <div class="md:flex">
                <div class="lg:p-8 ml-7">
                    <div class="flex">
                        <UserCircleIcon
                            class="text-sky-900 w-14 h-14"
                        ></UserCircleIcon>
                        <div class="mt-1.5">
                            <div
                                class="ml-6 uppercase tracking-wide text-sm font-semibold"
                            >
                                {{ comment.user.name }}
                            </div>
                            <p class="ml-6 font-medium text-sm opacity-50">
                                Answered On {{ comment.created_at }} WIB
                            </p>
                            <div
                                class="mt-2 ml-6 font-medium text-2xl mt-7"
                                v-html="comment.comment"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />

        <hr class="w-4/5 m-auto border-t-2" />

        <br />
        <br />
        <br />
        <br />

        <section id="comment">
            <div
                class="max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto rounded-xl overflow-hidden"
            >
                <div class="md:flex">
                    <div class="lg:p-8 w-full">
                        <div class="flex">
                            <UserCircleIcon
                                class="text-sky-900 w-14 h-14"
                            ></UserCircleIcon>
                            <div
                                class="ml-4 pr-1 bg-sky-900 rounded-2xl w-full"
                            >
                                <Textarea
                                    class="ml-4 mt-2 bg-sky-900 text-white w-auto md:w-10/12 lg:w-11/12"
                                    name=""
                                    id=""
                                    placeholder="Write Answer"
                                    rows="6"
                                ></Textarea>
                                <a href="" class="text-white">Post</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style setup>
/* @import url("https://fonts.googleapis.com"); */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
:root {
    background-color: white;
}
div {
    font-family: Roboto;
}
</style>
