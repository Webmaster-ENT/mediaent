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
});
</script>

<template>
  <NavbarUser />
  <!-- <div class=""> -->
    <div class="bg-sky-900">
      <div class="max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
      <br />
      <br />
        <!-- <div>
          <p
            class="
              text-white
              font-bold
              text-base
              
              md:text-xl md:ml-24
              lg:text-2xl lg:ml-32
            "
          >
            Article
          </p>
        </div> -->
      <br />
      <!-- md:p-0 md:w-1/2 -->
      <div class="container mx-auto px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
        <div v-for="article in articles" :key="article.id">
            <div class="p-4 rounded-2xl shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96">
                  <img class="rounded-2xl w-full " v-bind:src="article.thumbnail" alt="" />

                <div class="inline-block text-xs font-normal mt-4 text-white bg-sky-900 py-1 px-2 rounded-3xl w-auto flex-none">
                  {{ article.category.name }}
                </div>

                <div class="mt-3 text-sm font-bold h-14">
                  <p>{{ article.title }}</p>
                </div>
                      
                <div class="text-xs font-medium opacity-80 mt-3">
                  <span  v-html="article.summary"></span>
                </div>
                  
                <div class="pt-3 float-right inline-block text-xs font-semibold text-sky-900 w-auto">
                  <a  href="">Readmore</a>
                </div> 
  
          </div>

            <br />
        </div> 
      </div>

    </div>
  </div>
</template>
               <!-- <div class="flex ml-3 items-center text-sm md:text-xl">
                    <HandThumbUpIcon
                        class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      />
                    <span class="mx-2 mr-6">{{ article.comments.length }}</span>

                    <ChatBubbleLeftEllipsisIcon
                        class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      />
                    <span class="mx-2">{{ article.likes.length }}</span>
                  </div>  -->
                    

                
                <!-- <p>{{ article.updated_at }}</p>
                
                <p>{{ article.user.name }}</p> -->
<style>
</style>
