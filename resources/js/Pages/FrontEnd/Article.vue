<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import HomeLayout from "@/Layouts/HomeLayout.vue";

import {
  HandThumbUpIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  articles: Object,
});
</script>

<template>
  <HomeLayout>
    <div class="bg-sky-900">
      <div class="max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
        <br />
        <br />
        <br />
        <div
          class="container mx-auto my-auto px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <div v-for="article in articles" :key="article.id">
            <div
              class="p-4 rounded-2xl shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
            >
              <img
                class="rounded-2xl w-full aspect-video"
                v-bind:src="article.thumbnail"
                alt=""
              />

              <div
                class="inline-block text-xs font-normal mt-4 text-white bg-sky-900 py-1 px-2 rounded-3xl w-auto flex-none"
              >
                {{ article.category.name }}
              </div>

              <div class="mt-3 text-sm font-bold h-14">
                <p>{{ article.title.substring(0, 100) }}</p>
              </div>

              <div class="text-xs font-medium opacity-80 mt-3">
                <span v-html="article.summary.substring(0, 200)"></span>
              </div>

              <div
                class="pt-3 float-right inline-block text-xs font-semibold text-sky-900 w-auto"
              >
                <Link :href="route('detail-article.showArticle', article.slug)"
                  >Readmore</Link
                >
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </HomeLayout>
</template>

<style>
</style>
