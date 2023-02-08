<script setup>
import HomeLayout from "@/Layouts/HomeLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import Textarea from "@/Components/Textarea.vue";
import TextInput from "@/Components/TextInput.vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
  ChatBubbleLeftEllipsisIcon,
  HandThumbUpIcon,
  UserCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  articles: Object,
  previous: Object,
  next: Object,
  articleid: Number,
});
const form = useForm({
  id: props.articles.id,
  comment: "",
  like: props.articles.like,
  _method: "put",
});

function deleteLike(id) {
  form.delete(route("article.delete-like", id));
}

const likeadd = () => {
  form.post(route("article.create-like", props.articleid));
};

const commentadd = () => {
  form.post(route("article.create-comment", props.articleid));
};
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

                <!-- Like Comment Count -->
                <div class="mt-4 md:mt-6">
                  <div
                    class="
                      flex
                      mb-12
                      text-black
                      items-center
                      text-sm
                      md:text-xl
                    "
                  >
                    <div v-if="article.likes == ''">
                      <form @submit.prevent="likeadd">
                        <button type="submit">
                          <HandThumbUpIcon
                            class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                          />
                        </button>
                      </form>
                    </div>
                    <div v-else>
                      <template v-for="like in article.likes" :key="like">
                        <div v-show="like.user_id == 1">
                          <button
                            @click="deleteLike(like.id)"
                            tabindex="-1"
                            type="button"
                            class="mt-1"
                          >
                            <HandThumbUpIcon
                              class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                            />
                          </button>
                        </div>
                        <div v-show="like.user_id != 1">
                          <form @submit.prevent="likeadd">
                            <div className="mt-4">
                              <button type="submit">
                                <HandThumbUpIcon
                                  class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                                />
                              </button>
                            </div>
                          </form>
                        </div>
                      </template>
                    </div>

                    <span class="mx-2 mr-6">{{ article.likes.length }} </span>

                    <ChatBubbleLeftEllipsisIcon
                      class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                    />
                    <span class="mx-2">{{ article.comments.length }}</span>
                  </div>
                </div>

                <div class="flex justify-between">
                  <div v-if="previous != null">
                    <Link
                      :href="route('detail-article.showArticle', previous.slug)"
                      class="
                        flex
                        text-md
                        font-semibold
                        text-slate-900
                        hover:font-black
                      "
                    >
                      <ChevronLeftIcon class="w-5 h-5 mt-0.5" />
                      Previous</Link
                    >
                  </div>
                  <div v-else>
                    <span>This First Article</span>
                  </div>
                  <div class="flex" v-if="next != null">
                    <Link
                      :href="route('detail-article.showArticle', next.slug)"
                      class="
                        flex
                        text-md
                        font-semibold
                        text-slate-900
                        hover:font-black
                      "
                      >Next <ChevronRightIcon class="w-5 h-5 mt-0.5"
                    /></Link>
                  </div>
                  <div v-else>
                    <span>This Last Article</span>
                  </div>
                </div>

                <!-- Comment -->
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
                    <b class="text-white"
                      >Add a Comment<i
                        class="fa-solid fa-pen-to-square ml-4"
                      ></i
                    ></b>
                  </a>
                </div>
                <div
                  v-for="comment in article.comments"
                  v-bind:key="comment.id"
                >
                  <br />
                  <br />

                  <hr class="m-auto border-t-2" />

                  <br />
                  <br />

                  <div>
                    <div class="py-4 md:py-6 md:ml-24 lg:p-8">
                      <div class="flex">
                        <UserCircleIcon
                          class="
                            text-sky-900
                            w-10
                            h-10
                            md:w-12 md:h-12
                            lg:w-14 lg:h-14
                          "
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
                            {{ comment.user.name }}
                          </div>
                          <p class="ml-3 font-medium text-sm opacity-50">
                            Commented On
                            {{ comment.created_at }}
                            WIB
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
                              lg:text-2xl
                            "
                            v-html="comment.comment"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="comment">
          <div>
            <div class="lg:p-8 w-full">
              <form @submit.prevent="commentadd">
                <div
                  class="
                    flex
                    max-w-xs
                    overflow-hidden
                    mx-auto
                    w-full
                    md:max-w-xl
                    lg:max-w-3xl
                  "
                >
                  <UserCircleIcon
                    class="
                      text-sky-900
                      w-12
                      h-12
                      my-auto
                      mr-2
                      md:w-14 md:h-14
                      lg:w-16 lg:h-16
                    "
                  ></UserCircleIcon>

                  <TextInput
                    id="title"
                    type="text"
                    placeholder="Comment"
                    class="
                      mt-4
                      mb-4
                      bg-sky-900
                      text-white
                      block
                      w-full
                      placeholder:text-slate-100
                      focus:border-sky-900 focus:ring-sky-900
                    "
                    v-model="form.comment"
                  />

                  <!-- <Textarea
                    class="
                      ml-4
                      mt-2
                      bg-sky-900
                      text-white
                      w-auto w-11/12
                      md:w-10/12
                      lg:w-11/12
                      placeholder:text-slate-200
                    "
                    v-model="form.comment"
                    id="comment"
                    placeholder="Comment"
                    rows="3"
                  >
                  </Textarea> -->
                  <button type="submit">
                    <!-- <i class="fa-solid fa-paper-plane"></i> -->
                    <PaperAirplaneIcon
                      class="text-sky-900 w-8 h-8 my-auto ml-2"
                    ></PaperAirplaneIcon>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </HomeLayout>
</template>

<style>
h1 {
  font-family: sans-serif;
}
</style>
