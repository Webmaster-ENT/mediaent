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
        <div class="text-white pt-10 md:pt-16 mb-4 md:mb-10 text-center">
          <h1 class="text-lg md:text-2xl font-bold">Video</h1>
          <p class="text-xs md:text-sm">
            Berbagai informasi menarik bersama ENT Crews melalui konten YouTube.
          </p>
        </div>
        <div
          class="container mx-auto py-8 md:py-12 px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <div v-for="video in videos" :key="video.id">
            <div
              class="lg:p-4 px-2 pt-2 pb-4 rounded-2xl shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
            >
              <div class="grid grid-cols-9">
                <div class="col-start-1 col-end-10">
                  <iframe
                    :src="video.video_url"
                    class="rounded-2xl w-full aspect-video"
                    frameborder="0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                <div class="col-start-1 col-end-8 mr-2">
                  <p class="mt-3 text-sm font-bold text-start">
                    {{ video.title }}
                  </p>
                </div>

                <div class="col-end-10 col-span-2 lg:ml-4 mt-4">
                  <a
                    :href="video.video_url"
                    class="mt-3 px-4 py-2 lg:px-5 text-xs rounded-3xl font-semibold bg-sky-900 hover:bg-yellow-700 text-white"
                    target="_blank"
                    >Play</a
                  >
                </div>
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
#myVideoContainer .ytp-large-play-button,
#myVideoContainer .ytp-button,
#myVideoContainer .ytp-large-play-button-red-bg {
  display: none !important;
}
</style>


