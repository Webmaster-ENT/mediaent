<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import HomeLayout from "@/Layouts/HomeLayout.vue";
import CarouselVue from "@/Components/Carousel.vue";
import {
  HandThumbUpIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  articles: Object,
  forums: Object,
  videos: Object,
  vidRecent: String,
});
</script>

<template>
  <HomeLayout>
    <CarouselVue />
    <div class="bg-sky-900">
      <div class="max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
        <br />
        <br />
        <br />
        <div class="md:ml-10 text-white mb-10 px-8 md:pl-24">
          <h1 class="text-lg md:text-2xl font-bold">Artikel Terbaru</h1>
          <p class="text-xs md:text-sm">
            Kumpulan artikel terbaru seputar kampus, teknologi, dan tren
            terkini.
          </p>
        </div>

        <div
          class="container mx-auto my-auto px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <!-- ARTICLE -->

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
        <div class="md:ml-10 text-white mb-10 px-8 md:pl-24">
          <h1 class="text-2xl font-bold">Forum</h1>
          <p>Wadah komunikasi untuk menambah relasi dan berbagai informasi.</p>
        </div>
        <div
          class="container mx-auto my-auto px-6 pb-16 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <!-- FORUM  -->
          <div v-for="forum in forums" :key="forum.id">
            <div
              class="p-4 rounded-2xl shadow-lg overflow-hidden mb-12 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
            >
              <div class="flex">
                <UserCircleIcon
                  class="text-dark w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                ></UserCircleIcon>
                <div class="mt-1.5">
                  <div
                    class="ml-3 uppercase tracking-wide text-xs text-dark font-medium md:text-base lg:text-lg"
                  >
                    {{ forum.user.name }}
                  </div>

                  <p
                    class="ml-3 font-medium text-slate-400 text-xs md:text-sm lg:text-base font"
                  >
                    Asked On {{ forum.created_at }} WIB
                  </p>
                  <Link :href="route('detail-forum.showforum', forum.slug)">
                    <div
                      class="mt-2 text-dark font-semibold mt-7 text-base md:text-xl lg:text-2xl"
                      v-html="forum.subject"
                    ></div>
                  </Link>
                  <div class="mt-4 md:mt-6">
                    <div
                      class="flex ml-3 text-dark items-center text-sm md:text-xl"
                    >
                      <HandThumbUpIcon
                        class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      />
                      <span class="mx-2 mr-6">{{ forum.likes.length }} </span>

                      <ChatBubbleLeftEllipsisIcon
                        class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      />
                      <span class="mx-2">{{ forum.comments.length }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:ml-10 text-white mb-10 px-8 md:pl-24">
          <h1 class="text-2xl font-bold">Video</h1>
          <p>
            Berbagai informasi menarik bersama ENT Crews melalui konten YouTube.
          </p>
        </div>
        <div
          class="container mx-auto my-auto px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <!-- VIDEO -->
          <div class="container mx-auto md:p-4 sm:justify-center">
            <div class="grid grid-cols-3">
              <div class="grid col-span-3 md:grid md:col-span-2">
                <iframe
                  :src="vidRecent.video_url"
                  class="rounded-2xl w-full aspect-video mb-5 md:mb-0"
                  frameborder="0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                >
                </iframe>
              </div>
              <div
                class="md:grid grid-none col-span-3 md:col-span-1 flex md:flex"
              >
                <template v-for="video in videos" :key="video.id">
                  <div class="md:flex mx-1">
                    <iframe
                      :src="video.video_url"
                      class="rounded-md md:rounded-2xl w-full md:w-1/2 aspect-video ml-0 md:ml-5 mb-2 md:mb-14"
                      frameborder="0"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    >
                    </iframe>
                    <p class="ml-0 md:ml-5 text-white text-xs mb-1 md:mb-4">
                      {{ video.title }}
                    </p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </HomeLayout>
</template>

<style setup>
/* @import url("https://fonts.googleapis.com"); */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

/* div {
  font-family: Roboto;
} */
</style>
