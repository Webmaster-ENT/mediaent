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
  forums: Object,
});
</script>
<template>
  <NavbarUser />
  <div class="bg-sky-900">
    <br />
    <br />
    <p class="mx-36 text-xl text-white font-bold">FORUM</p>
    <br />
    <div
      class="
        max-w-xs
        md:max-w-2xl
        lg:max-w-5xl
        mx-auto
        rounded-xl
        overflow-hidden
      "
      v-for="forum in forums"
      :key="forum.id"
    >
      <div class="md:flex">
        <div class="p-8">
          <div class="flex">
            <UserCircleIcon class="text-white w-14 h-14"></UserCircleIcon>
            <div class="mt-1.5">
              <div
                class="
                  ml-6
                  uppercase
                  tracking-wide
                  text-sm text-white
                  font-semibold
                "
              >
                {{ forum.user.name }}
              </div>

              <p class="ml-6 font-medium text-sm text-slate-400">
                Asked On {{ forum.created_at }} WIB
              </p>
              <Link
                :href="route('detail.showforum', [forum.user.name, forum.id])"
              >
                <div
                  class="mt-2 ml-6 text-white font-medium text-2xl mt-7"
                  v-html="forum.subject"
                ></div>
              </Link>
              <div class="mt-7">
                <div class="flex ml-6 text-xl text-white items-center">
                  <HandThumbUpIcon class="w-6 h-6" />
                  <span class="mx-2 mr-6">{{ forum.likes.length }} </span>

                  <ChatBubbleLeftEllipsisIcon class="w-6 h-6" />
                  <span class="mx-2">{{ forum.comments.length }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="w-4/5 m-auto border-t-2" />
      <br />
    </div>
  </div>

  <!-- <br />
    <hr class="w-4/5 m-auto 1px border-t-2" />
    <hr class="w-4/5 m-auto 1px border-t-2" /> -->
  <FooterUser />
</template>

<style setup>
/* @import url("https://fonts.googleapis.com"); */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

div {
  font-family: Roboto;
}
</style>
