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
  videos: Object,
});
</script>

<template>
  <div v-for="video in videos" :key="video.id">
    <p>{{ video.title }}</p>
    <iframe
      :src="video.video_url"
      class="rounded"
      frameborder="0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style>
</style>
