<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import HomeLayout from "@/Layouts/HomeLayout.vue";
import {
  HandThumbUpIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  videos: Object,
});
</script>

<!-- <div v-for="video in videos" :key="video.id">
  <p>{{ video.title }}</p>
  <iframe
    :src="video.video_url"
    class="rounded"
    frameborder="0"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div> -->

<template>
  <Head title="Video" />
  <HomeLayout>
    <div class="bg-sky-900">
      <div class="max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
        <div
          class="container mx-auto py-8 md:py-12 px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <div v-for="video in videos" :key="video.id">
            <div
              class="p-4 rounded-2xl shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
            >
              <iframe
                :src="video.video_url"
                class="rounded-2xl w-full aspect-video"
                frameborder="0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <div class="mt-3 text-sm font-bold text-center h-14">
                <p>{{ video.title }}</p>
              </div>
              <div
                class="mt-3 float-right inline-block text-xs px-6 py-2 rounded-3xl font-semibold bg-sky-900 text-white w-auto"
              >
                <a href="">Play</a>
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
