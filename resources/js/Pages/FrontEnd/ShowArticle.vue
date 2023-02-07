<script setup>
import HomeLayout from "@/Layouts/HomeLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ChevronLeftIcon, TrashIcon } from "@heroicons/vue/24/solid";
import Pagination from "@/Components/Pagination.vue";

const props = defineProps({
  articles: Object,
});
</script>
<template>
  <Head title="Article" />

  <HomeLayout>
    <div class="pt-5">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Link :href="route('all-article.allarticle')">
          <div class="flex items-center pt-2">
            <ChevronLeftIcon class="w-4 h-4" />
            <span class="font-bold">Back to Article</span>
          </div>
        </Link>
      </div>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          class="container mx-auto pt-10"
          v-for="article in articles"
          :key="article.id"
        >
          <section class="text-gray-500 bg-white rounded-lg">
            <div class="flex flex-wrap justify-center">
              <div class="w-50 md:w-3/4">
                <h1 class="font-bold text-6xl text-center text-gray-900 mb-4">
                  {{ article.title }}
                </h1>
                <p class="text-xl text-center">
                  {{ article.updated_at }}
                  |
                  {{ article.user.name }}
                </p>
                <div class="text-center my-4">
                  <button
                    class="
                      inline-flex
                      items-center
                      px-4
                      py-2
                      bg-blue-600
                      border border-transparent
                      rounded-full
                      font-semibold
                      text-xs text-white
                      uppercase
                      tracking-widest
                      hover:bg-blue-500
                      active:bg-blue-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:ring-offset-2
                      dark:focus:ring-offset-gray-800
                      transition
                      ease-in-out
                      duration-150
                    "
                    disabled
                  >
                    {{ article.category.name }}
                  </button>
                </div>
                <div
                  class="
                    relative
                    overflow-hidden
                    bg-no-repeat bg-cover
                    relative
                    overflow-hidden
                    bg-no-repeat bg-cover
                    ripple
                    my-4
                  "
                >
                  <img
                    :src="'../../' + article.thumbnail"
                    class="w-full rounded-3xl mt-4"
                  />
                </div>
                <div
                  class="my-10 prose lg:prose-xl"
                  style="text-align: justify"
                >
                  <span v-html="article.body" class="text-xl"></span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </HomeLayout>
</template>

<style>
h1 {
  font-family: sans-serif;
}
</style>
