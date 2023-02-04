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
  articles: Object,
  comments: Object,
});
</script>

<template>
  <div v-for="article in articles" :key="article.id">
    <p>{{ article.title }}</p>
    <p>{{ article.updated_at }}</p>
    <img v-bind:src="'../' + article.thumbnail" alt="" />
    <p>{{ article.user.name }}</p>
    <p>{{ article.category.name }}</p>
    <span v-html="article.body"></span>
  </div>
</template>

<style>
</style>
