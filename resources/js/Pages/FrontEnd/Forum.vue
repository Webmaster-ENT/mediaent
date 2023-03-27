<script setup>
import HomeLayout from "@/Layouts/HomeLayout.vue";
import Create from "@/Pages/Forum/Create.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import Textarea from "@/Components/Textarea.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { reactive, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import {
  HandThumbUpIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/solid";
import { _, pickBy, debounce } from "lodash";
const props = defineProps({
  forums: Object,
});

const data = reactive({
  createOpen: false,
  editOpen: false,
  deleteOpen: false,
  deleteBulkOpen: false,
});

const form = useForm({
  subject: "",
});

const createforum = () => {
  form.post(route("storeforum.storeForum"));
};

// const commentadd = () => {
//   form.post(route("forum.create-comment", props.forumid));
// };
</script>

<template>
  <HomeLayout>
    <Head title="Forum" />

    <div class="bg-sky-900">
      <div class="max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
        <div v-if="$page.props.auth.user != null">
          <div class="py-4 md:py-6 md:ml-24 lg:p-8 md:mr-24">
            <form @submit.prevent="createforum">
              <div class="flex mx-auto w-full">
                <UserCircleIcon
                  class="text-white h-12 my-auto md:w-10 md:h-10 lg:w-16 lg:h-12"
                ></UserCircleIcon>

                <TextInput
                  id="title"
                  type="text"
                  placeholder="Whats on your mind?"
                  class="mt-4 mb-4 bg-white text-sky-900 block w-full placeholder:text-slate-900 rounded-full placeholder:italic focus:border-sky-900 focus:ring-sky-900 mr-2"
                  v-model="form.subject"
                />

                <button type="submit">
                  <div class="bg-white p-1 py-2 rounded-full">
                    <PaperAirplaneIcon
                      class="text-sky-900 md:w-6 md:h-6 w-4 h-4 my-auto mx-1"
                    ></PaperAirplaneIcon>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div v-else>
          <div class="py-4 md:py-6 md:ml-24 lg:p-8 md:mr-24">
            <div class="flex mx-auto w-full">
              <UserCircleIcon
                class="text-white h-12 my-auto md:w-10 md:h-10 lg:w-16 lg:h-12"
              ></UserCircleIcon>

              <TextInput
                id="title"
                type="text"
                placeholder="Login for share your minds .."
                class="mt-4 mb-4 bg-white text-sky-900 block w-full placeholder:text-slate-900 rounded-full placeholder:italic focus:border-sky-900 focus:ring-sky-900 mr-2"
                v-model="form.subject"
                readonly
              />

              <button>
                <div class="bg-white p-1 py-2 rounded-full">
                  <PaperAirplaneIcon
                    class="text-sky-900 md:w-6 md:h-6 w-4 h-4 my-auto mx-1"
                  ></PaperAirplaneIcon>
                </div>
              </button>
            </div>
          </div>
        </div>

        <hr class="m-auto border-t-2 my-2 w-1/2" />

        <div v-for="forum in forums" :key="forum.id">
          <div class="py-4 md:py-6 md:ml-24 lg:p-8">
            <div class="flex">
              <UserCircleIcon
                class="text-white w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              ></UserCircleIcon>
              <div class="mt-1.5">
                <div
                  class="ml-3 uppercase tracking-wide text-xs text-white font-medium md:text-base lg:text-lg"
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
                    class="mt-2 ml-3 text-white font-semibold mt-7 text-base md:text-xl lg:text-2xl"
                    v-html="forum.subject"
                  ></div>
                </Link>
                <div class="mt-4 md:mt-6">
                  <div
                    class="flex ml-3 text-white items-center text-sm md:text-xl"
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
          <hr class="m-auto border-t-2 my-2 w-4/5" />
        </div>
      </div>
    </div>
  </HomeLayout>
</template>

<style setup>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
