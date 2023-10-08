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
  userid: Number,
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
  form.post(
    route("article.create-like", props.articleid, {
      preserveScroll: (page) => Object.keys(page.props.errors).length,
    })
  );
};

function deleteComment(id) {
  form.delete(route("article.delete-comment", id, { preserveScroll: true }));
}

const commentadd = () => {
  form.post(route("article.create-comment", props.articleid));
};
</script>
<template >
  <Head title="Article" />

  <HomeLayout>
    <div class="pt-5 overflow-y-auto" scroll-region>
      <div class="mx-auto max-w-7xl sm:px-6 px-4 lg:px-8">
        <Link :href="route('all-article.allarticle')">
          <div class="flex items-center pt-2 md:text-lg text-xs">
            <i class="fa-solid fa-chevron-left mr-1"></i>
            <span class="font-bold">Back to Article</span>
          </div>
        </Link>
      </div>

      <div class="mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div
          class="container mx-auto pt-4"
          v-for="article in articles"
          :key="article.id"
        >
          <section class="text-gray-500 bg-white rounded-lg">
            <div class="flex flex-wrap justify-center">
              <h1
                class="font-bold md:w-1/2 md:text-6xl text-3xl text-center text-gray-900 mb-4 px-2"
              >
                {{ article.title }}
              </h1>
              <div class="w-50 md:w-3/4">
                <p class="md:text-xl text-sm text-center capitalize">
                  {{ article.updated_at }}
                  |
                  {{ article.user.name }}
                </p>
                <div class="text-center my-4">
                  <button
                    class="inline-flex items-center md:px-4 px-3 md:py-2 py-1 bg-blue-600 border border-transparent rounded-full font-semibold md:text-xs text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                    disabled
                  >
                    {{ article.category.name }}
                  </button>
                </div>
                <div
                  class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple md:my-4 my-2 px-5"
                >
                  <img
                    v-bind:src="'../'+article.thumbnail"
                    class="w-full rounded-3xl mt-4"
                  />
                </div>
                <div
                  class="md:my-10 mt-10 prose lg:prose-xl md:max-w-4xl md:px-6 px-12 mx-auto"
                  style="text-align: justify"
                >
                  <span v-html="article.body" class="md:text-xl text-sm"></span>
                </div>

                <!-- Like Comment Count -->
                <div class="md:mt-6 px-6">
                  <div
                    class="flex md:mb-12 my-4 text-black items-center text-sm md:text-xl"
                  >
                    <div v-if="userid != null">
                      <div v-if="article.likes_user == ''">
                        <form @submit.prevent="likeadd">
                          <button type="submit">
                            <HandThumbUpIcon
                              class="w-4 h-4 mt-1 md:w-5 md:h-5 lg:w-6 lg:h-6"
                            />
                          </button>
                        </form>
                      </div>
                      <div v-else>
                        <template
                          v-for="like in article.likes_user"
                          :key="like"
                        >
                          <div v-show="like.user_id == userid">
                            <button
                              @click="deleteLike(like.id)"
                              tabindex="-1"
                              type="button"
                              class="mt-1"
                            >
                              <HandThumbUpIcon
                                class="w-4 h-4 text-yellow-700 md:w-5 md:h-5 lg:w-6 lg:h-6"
                              />
                            </button>
                          </div>
                          <div v-show="like.user_id != userid">
                            <form @submit.prevent="likeadd">
                              <div className="mt-4">
                                <button type="submit">
                                  <HandThumbUpIcon
                                    class="w-4 h-4 mt-1 md:w-5 md:h-5 lg:w-6 lg:h-6"
                                  />
                                </button>
                              </div>
                            </form>
                          </div>
                        </template>
                      </div>
                    </div>
                    <div v-else>
                      <HandThumbUpIcon
                        class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      />
                    </div>

                    <span class="mx-2 md:mr-6 mr-4 font-medium text-md"
                      >{{ article.likes.length }}
                    </span>

                    <ChatBubbleLeftEllipsisIcon
                      class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                    />
                    <span class="mx-2 font-medium text-md">{{
                      article.comments.length
                    }}</span>
                  </div>
                </div>

                <!-- Previous Next -->
                <div class="grid grid-cols-2 px-6">
                  <div>
                    <div v-if="previous != null">
                      <Link
                        :href="
                          route('detail-article.showArticle', previous.slug)
                        "
                        preserve-scroll
                        ><div class="text-md font-bold text-slate-900">
                          <i class="fa-solid fa-chevron-left"></i>
                          PREVIOUS
                        </div>
                        <span class="uppercase hover:font-bold">{{
                          previous.title
                        }}</span>
                      </Link>
                    </div>
                    <div v-else class="text-left">
                      <span class="text-md font-bold text-slate-900"
                        >This First Article</span
                      >
                    </div>
                  </div>

                  <div>
                    <div class="flex text-right" v-if="next != null">
                      <Link
                        :href="route('detail-article.showArticle', next.slug)"
                        preserve-scroll
                      >
                        <div
                          class="text-md font-semibold text-slate-900 hover:font-black"
                        >
                          NEXT <i class="fa-solid fa-chevron-right"></i>
                        </div>

                        <span class="uppercase hover:font-bold">{{
                          next.title
                        }}</span></Link
                      >
                    </div>
                    <div v-else class="text-right">
                      <span class="text-md font-bold text-slate-900"
                        >This Last Article</span
                      >
                    </div>
                  </div>
                </div>
                <br />
                <!-- Comment -->
                <div
                  class="mt-7 flex max-w-xs overflow-hidden mx-auto md:max-w-xl lg:max-w-3xl"
                >
                  <a
                    class="md:w-full w-3/4 mx-auto text-white md:py-2 h-full bg-sky-900 rounded-xl text-center"
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
                <br />
                <br />
                <div
                  v-for="comment in article.comments"
                  v-bind:key="comment.id"
                >
                  <br />
                  <hr class="mx-auto border-t-2 md:w-full w-10/12" />
                  <br />
                  <div v-if="userid != null">
                    <div class="py-2 md:py-6 md:ml-24 px-6 lg:p-8">
                      <div class="flex">
                        <div class="">
                          <UserCircleIcon
                            class="text-sky-900 w-10 h-10 my-auto md:w-12 md:h-12 lg:w-14 lg:h-14"
                          ></UserCircleIcon>
                        </div>
                        <div>
                          <div
                            class="ml-3 uppercase tracking-wide text-xs text-black font-medium md:text-base lg:text-lg"
                          >
                            {{ comment.user.name }}
                          </div>
                          <div class="flex justify-between">
                            <p class="flex ml-3 font-medium text-sm opacity-50">
                              Commented On
                              {{ comment.created_at }}
                              WIB
                            </p>
                            <div
                              v-if="comment.user_id == $page.props.auth.user.id"
                            >
                              <button
                                @click="deleteComment(comment.id)"
                                tabindex="-1"
                                type="button"
                                class="mx-4 my-auto"
                              >
                                <TrashIcon
                                  class="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 text-rose-700"
                                />
                              </button>
                            </div>
                          </div>

                          <div
                            class="md:mt-4 mt-2 ml-3 text-black font-normal text-base md:text-xl lg:text-2xl"
                            v-html="comment.comment"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="py-2 md:py-6 md:ml-24 px-6 lg:p-8">
                      <div class="flex">
                        <div class="">
                          <UserCircleIcon
                            class="text-sky-900 w-10 h-10 my-auto md:w-12 md:h-12 lg:w-14 lg:h-14"
                          ></UserCircleIcon>
                        </div>
                        <div>
                          <div
                            class="ml-3 uppercase tracking-wide text-xs text-black font-medium md:text-base lg:text-lg"
                          >
                            {{ comment.user.name }}
                          </div>
                          <div class="flex justify-between">
                            <p class="flex ml-3 font-medium text-sm opacity-50">
                              Commented On
                              {{ comment.created_at }}
                              WIB
                            </p>
                          </div>

                          <div
                            class="md:mt-4 mt-2 ml-3 text-black font-normal text-base md:text-xl lg:text-2xl"
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

        <div id="comment" v-if="userid != null">
          <div class="lg:p-8 w-full">
            <form @submit.prevent="commentadd">
              <div
                class="flex max-w-xs overflow-hidden mx-auto w-full md:max-w-xl lg:max-w-3xl"
              >
                <UserCircleIcon
                  class="text-sky-900 w-12 h-12 my-auto mr-2 md:w-14 md:h-14 lg:w-16 lg:h-16"
                ></UserCircleIcon>

                <TextInput
                  id="title"
                  type="text"
                  placeholder="Comment .."
                  class="mt-4 mb-4 bg-sky-900 text-white block w-full placeholder:text-slate-100 placeholder:italic focus:border-sky-900 focus:ring-sky-900"
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
        <div id="comment" v-else>
          <div class="lg:p-8 w-full">
            <div
              class="flex max-w-xs overflow-hidden mx-auto w-full md:max-w-xl lg:max-w-3xl"
            >
              <UserCircleIcon
                class="text-sky-900 w-12 h-12 my-auto mr-2 md:w-14 md:h-14 lg:w-16 lg:h-16"
              ></UserCircleIcon>

              <TextInput
                id="title"
                type="text"
                placeholder="Login for comment .."
                class="mt-4 mb-4 bg-sky-900 text-white block w-full placeholder:text-slate-100 placeholder:italic focus:border-sky-900 focus:ring-sky-900"
                v-model="form.comment"
                disabled
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
              <button>
                <!-- <i class="fa-solid fa-paper-plane"></i> -->
                <PaperAirplaneIcon
                  class="text-sky-900 w-8 h-8 my-auto ml-2"
                ></PaperAirplaneIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </HomeLayout>
</template>

<style setup>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
h1 {
  font-family: sans-serif;
}
div {
  font-family: Roboto;
}
</style>
