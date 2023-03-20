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
  vidRecent: Object,
});

let md = "";
</script>

<template>
  <HomeLayout>
    <CarouselVue />
    <div class="bg-sky-900">
      <div class="max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
        <div class="md:ml-10 text-white pt-10 md:pt-16 mb-4 md:mb-10 md:pl-24">
          <h1 class="text-lg md:text-2xl font-bold">Artikel Terbaru</h1>
          <p class="text-xs md:text-sm">
            Kumpulan artikel terbaru seputar kampus, teknologi, dan tren
            terkini.
          </p>
        </div>

        <div
          class="container mx-auto md:px-6 pb-4 md:pb-12 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center"
        >
          <!-- ARTICLE -->

          <div v-for="article in articles" :key="article.id">
            <div
              class="p-3 rounded-2xl shadow-lg overflow-hidden bg-white sm:w-64 md:w-80 lg:w-72 xl:w-96"
            >
              <Link :href="route('detail-article.showArticle', article.slug)">
                <img
                  class="rounded-lg w-full aspect-video"
                  v-bind:src="article.thumbnail"
                  alt=""
              /></Link>

              <div
                class="inline-block text-xs capitalize font-normal mt-4 text-white bg-sky-900 py-1 px-2 rounded-3xl w-auto flex-none"
              >
                {{ article.category.name }}
              </div>

              <div class="mt-3 text-sm font-bold h-14">
                <Link :href="route('detail-article.showArticle', article.slug)"
                  ><p>{{ article.title.substring(0, 100) }}</p></Link
                >
              </div>
              <div class="text-xs font-medium opacity-80 mt-0 mt-3">
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

        <div class="md:ml-10 text-white mb-4 md:mb-10 md:pl-24">
          <h1 class="text-2xl font-bold">Forum</h1>
          <p class="text-xs md:text-sm">
            Wadah komunikasi untuk menambah relasi dan berbagai informasi.
          </p>
        </div>
        <div
          class="container mx-auto my-auto md:px-6 pb-4 md:pb-10 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center"
        >
          <!-- FORUM  -->
          <div v-for="forum in forums" :key="forum.id">
            <div
              class="p-3 rounded-2xl shadow-lg overflow-hidden mb-6 md:mb-12 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
            >
              <div class="grid grid-cols-6 mx-auto">
                <div>
                  <UserCircleIcon
                    class="text-dark w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  ></UserCircleIcon>
                </div>
                <div class="col-span-5">
                  <div
                    class="uppercase tracking-wide text-xs text-dark font-medium md:text-base lg:text-lg"
                  >
                    {{ forum.user.name }}
                  </div>

                  <p
                    class="font-medium text-slate-400 text-xs md:text-sm lg:text-base font"
                  >
                    Asked On {{ forum.created_at }} WIB
                  </p>
                  <Link :href="route('detail-forum.showforum', forum.slug)">
                    <div
                      class="mt-2 text-dark font-semibold mt-7 text-xs md:text-lg"
                      v-html="forum.subject"
                    ></div>
                  </Link>
                  <div class="mt-4 md:mt-6">
                    <Link :href="route('detail-forum.showforum', forum.slug)">
                      <div
                        class="flex text-dark items-center text-sm md:text-xl"
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
                    </Link>
                  </div>
                </div>
              </div>
              <!-- <div class="flex"> -->
            </div>
            <!-- </div> -->
          </div>
        </div>
        <div class="md:ml-10 text-white mb-4 md:mb-4 md:pl-24">
          <h1 class="text-2xl font-bold">Video</h1>
          <p class="text-xs md:text-sm">
            Berbagai informasi menarik bersama ENT Crews melalui konten YouTube.
          </p>
        </div>
        <div
          class="container mx-auto md:px-6 pb-4 md:pb-10 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center"
        >
          <!-- VIDEO -->
          <div class="container mx-auto md:p-6 sm:justify-center">
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
                  <a :href="video.video_url">
                    <div class="md:flex mx-1">
                      <!-- <img
                        :src="'storage/images/video/' + video.thumbnail"
                        :alt="video.title"
                        class="rounded-md md:rounded-2xl w-full md:w-1/2 aspect-video ml-0 md:ml-5 mb-2 md:mb-14"
                      /> -->
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
                  </a>
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
</style>
