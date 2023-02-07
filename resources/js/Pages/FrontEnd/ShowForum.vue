<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Textarea from "@/Components/Textarea.vue";
import {
  HandThumbUpIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronLeftIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  forums: Object,
  comments: Object,
});
</script>

<template>
  <div class="bg-white">
    <br />
    <br />
    <Link :href="route('all-forum.allforum')" class="flex">
      <p
        class="
          flex
          text-black
          font-medium
          text-base
          ml-12
          md:text-xl md:ml-24
          lg:text-2xl lg:ml-32
        "
      >
        <ChevronLeftIcon class="w-5 h-6 md:w-6 md:h-7 lg:w-7 lg:h-8" />Back To
        Forum
      </p>
    </Link>
    <br />
    <br />
    <div class="max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
      <div v-for="forum in forums" :key="forum.id">
        <div class="">
          <div class="py-4 md:py-6 md:ml-24 lg:p-8">
            <div class="flex">
              <UserCircleIcon
                class="text-sky-900 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              ></UserCircleIcon>
              <div class="mt-1.5">
                <div
                  class="
                    ml-3
                    uppercase
                    tracking-wide
                    text-xs text-black
                    font-medium
                    md:text-base
                    lg:text-lg
                  "
                >
                  {{ forum.user.name }}
                </div>
                <p
                  class="ml-3 font-medium text-sm opacity-50
                  "
                >
                  Asked on {{ forum.created_at }} WIB
                </p>
                <div
                  class="
                    mt-2
                    ml-3
                    text-black
                    font-semibold
                    mt-7
                    text-base
                    md:text-xl
                    lg:text-2xl
                  "
                  v-html="forum.subject"
                ></div>
                <div class="mt-4 md:mt-6">
                  <div
                    class="flex ml-3 text-black items-center text-sm md:text-xl"
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
          <div
            class="
              mt-7
              flex
              max-w-xs
              overflow-hidden
              mx-auto
              md:max-w-xl
              lg:max-w-3xl
            "
          >
            <a
              class="
                w-full
                text-white
                py-2
                h-full
                bg-sky-900
                rounded-xl
                text-center
              "
              type=""
              href="#comment"
            >
              <b class="text-white">Answer Question</b>
            </a>
          </div>
        </div>

        <div v-for="comment in comments" v-bind:key="comment.id">
          <br />
          <br />

          <hr class="m-auto border-t-2" />

          <br />
          <br />

          <div>
            <div class="py-4 md:py-6 md:ml-24 lg:p-8">
              <div class="flex">
                <UserCircleIcon
                  class="text-sky-900 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                ></UserCircleIcon>
                <div class="mt-1.5">
                  <div
                    class="ml-3
                    uppercase
                    tracking-wide
                    text-xs text-black
                    font-medium
                    md:text-base
                    lg:text-lg"
                  >
                    {{ comment.user.name }}
                  </div>
                  <p class="ml-3 font-medium text-sm opacity-50">
                    Answered On {{ comment.created_at }} WIB
                  </p>
                  <div
                    class="                    
                    mt-2
                    ml-3
                    text-black
                    font-normal
                    mt-7
                    text-base
                    md:text-xl
                    lg:text-2xl"
                    v-html="comment.comment"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <hr class="w-4/5 m-auto border-t-2" />

      <br />
      <br />
      <br />
      <br />

      <section id="comment">
        <div>
          <div class="lg:p-8 w-full">
            <div
              class="
                flex
                max-w-xs
                overflow-hidden
                mx-auto
                md:max-w-xl
                lg:max-w-3xl
              "
            >
              <UserCircleIcon
                class="text-sky-900 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              ></UserCircleIcon>
              <input
                type="text"
                placeholder="Write Answer..."
                class="
                  w-full
                  h-10
                  bg-sky-900
                  shadow
                  appearance-none
                  border
                  rounded-2xl
                  py-2
                  px-3
                  mt-1
                  md:mt-2
                  lg:mt-3
                  text-white
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
              />
              <UserCircleIcon
                class="
                  text-sky-900
                  w-12
                  h-12
                  md:w-14 md:h-14
                  lg:w-16 lg:h-1w-16
                "
              ></UserCircleIcon>
              <!-- <a href="" class="text-black">Post</a> -->

              <!-- ngkok gantinen logo Pesawat opo opo ngunu gantine tombol kirim -->

              <!-- <div class="ml-4 pr-1 bg-sky-900 rounded-2xl w-full ">
                  <Textarea
                    class="
                      ml-4
                      mt-2
                      bg-sky-900
                      text-white
                      w-auto
                      w-11/12
                      md:w-10/12
                      lg:w-11/12
                    "
                    name=""
                    id=""
                    placeholder="Write Answer"
                    rows="6"
                  ></Textarea>

                </div> -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style setup>
/* @import url("https://fonts.googleapis.com"); */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
div {
  font-family: Roboto;
}
</style>
