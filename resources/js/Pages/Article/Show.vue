<script setup>
// import NavBarVue from "@/Components/NavBar.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import Ckeditor from "@/Components/Ckeditor.vue";
import { ChevronLeftIcon } from "@heroicons/vue/24/solid";
import moment from "moment";

const props = defineProps({
    article: Object,
    users: Object,
    categories: Object,
});
</script>
<template>
    <Head title="Article" />
    <!-- <NavBarVue :open="sidebarOpened" @open="sidebarOpened = true" /> -->
    <div class="py-5">
        <div class="mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden">
                <div class="p-6 bg-white">
                    <Link :href="route('article.index')">
                        <div class="flex items-center">
                            <ChevronLeftIcon class="w-4 h-4" />
                            <span>Back</span>
                        </div>
                    </Link>
                    <div class="container mx-auto pt-10 pb-20">
                        <section class="text-gray-500 bg-white rounded-lg">
                            <img src="" class="w-20" alt="" />
                            <div class="flex flex-wrap justify-center">
                                <div class="w-50 md:w-3/4 pb-20">
                                    <h1
                                        class="font-bold text-6xl text-center text-gray-900 mb-4"
                                    >
                                        {{ props.article.title }}
                                    </h1>
                                    <p class="text-xl text-center">
                                        {{
                                            moment(
                                                props.article.updated_at
                                            ).format("LL")
                                        }}
                                        |
                                        {{
                                            users[-1 + props.article.user_id]
                                                .name
                                        }}
                                    </p>
                                    <div class="text-center my-4">
                                        <button
                                            class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                            disabled
                                        >
                                            {{
                                                categories[
                                                    -1 +
                                                        props.article
                                                            .category_id
                                                ].name
                                            }}
                                        </button>
                                    </div>
                                    <div
                                        class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple my-4"
                                    >
                                        <img
                                            :src="
                                                '../../' +
                                                props.article.thumbnail
                                            "
                                            class="w-full rounded-3xl mt-4"
                                        />
                                    </div>
                                    <div
                                        class="my-10 prose lg:prose-xl"
                                        style="text-align: justify"
                                    >
                                        <span
                                            v-html="props.article.body"
                                            class="text-xl"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <!-- </div>
            </div>
        </div> -->
    </div>
</template>

<style>
h1 {
    font-family: sans-serif;
}
</style>
