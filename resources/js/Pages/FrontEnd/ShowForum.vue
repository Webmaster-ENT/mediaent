<script setup>
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import HomeLayout from "@/Layouts/HomeLayout.vue";
import Textarea from "@/Components/Textarea.vue";
import TextInput from "@/Components/TextInput.vue";
import Ckeditor from "@/Components/Ckeditor.vue";
import {
  HandThumbUpIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronLeftIcon,
  PaperAirplaneIcon,
  TrashIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  forums: Object,
  forumid: Number,
  userid: Number,
});

const form = useForm({
  id: props.forums.id,
  comment: "",
  like: props.forums.like,
  _method: "put",
});

function deleteLike(id) {
  form.delete(route("forum.delete-like", id));
}

const likeadd = () => {
  form.post(route("forum.create-like", props.forumid));
};

function deleteComment(id) {
  form.delete(route("forum.delete-comment", id));
}

const commentadd = () => {
  form.post(route("forum.create-comment", props.forumid));
};
</script>

<template>
<<<<<<< HEAD
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
=======
  <HomeLayout>
    <div class="bg-white pt-5">
      <div class="mx-auto max-w-7xl sm:px-6 px-4 lg:px-8">
        <Link :href="route('all-forum.allforum')">
          <div class="flex items-center pt-2 md:text-lg text-xs">
            <i class="fa-solid fa-chevron-left mr-1"></i>
            <span class="font-bold">Back to Forum</span>
>>>>>>> 728748d07c8f4f59e32fc551df9dadb4f47cb2d7
          </div>
        </Link>
      </div>
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
<<<<<<< HEAD
                    class="ml-3
                    tracking-wide
                    text-xs text-black
                    font-medium
                    md:text-base
                    lg:text-lg"
=======
                    class="
                      ml-3
                      uppercase
                      tracking-wide
                      text-xs text-black
                      font-medium
                      md:text-base
                      lg:text-lg
                    "
>>>>>>> 728748d07c8f4f59e32fc551df9dadb4f47cb2d7
                  >
                    {{ forum.user.name }}
                  </div>
                  <p class="ml-3 font-medium text-sm opacity-50">
                    Asked on {{ forum.created_at }} WIB
                  </p>
                  <div
<<<<<<< HEAD
                    class="                    
                    ml-3
                    text-black
                    font-normal
                    mt-7
                    text-base
                    md:text-xl
                    lg:text-2xl"
                    v-html="comment.comment"
=======
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
>>>>>>> 728748d07c8f4f59e32fc551df9dadb4f47cb2d7
                  ></div>
                  <div class="mt-4 md:mt-6">
                    <div
                      class="
                        flex
                        ml-3
                        text-black
                        items-center
                        text-sm
                        md:text-xl
                      "
                    >
                      <div v-if="userid != null">
                        <div v-if="forum.likes_user == ''">
                          <form @submit.prevent="likeadd">
                            <button type="submit">
                              <HandThumbUpIcon
                                class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                              />
                            </button>
                          </form>
                        </div>
                        <div v-else>
                          <template
                            v-for="like in forum.likes_user"
                            :key="like"
                          >
                            <div
                              v-if="like.user_id == $page.props.auth.user.id"
                            >
                              <button
                                @click="deleteLike(like.id)"
                                tabindex="-1"
                                type="button"
                              >
                                <HandThumbUpIcon
                                  class="
                                    w-4
                                    h-4
                                    text-yellow-700
                                    md:w-5 md:h-5
                                    lg:w-6 lg:h-6
                                  "
                                />
                              </button>
                            </div>
                            <div
                              v-else-if="
                                like.user_id != $page.props.auth.user.id
                              "
                            >
                              <form @submit.prevent="likeadd">
                                <div className="mt-4">
                                  <button type="submit">
                                    <HandThumbUpIcon
                                      class="
                                        w-4
                                        h-4
                                        md:w-5 md:h-5
                                        lg:w-6 lg:h-6
                                      "
                                    />
                                  </button>
                                </div>
                              </form>
                            </div>
                            <div v-else>
                              <div className="mt-4">
                                <button type="submit">
                                  <HandThumbUpIcon
                                    class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                                  />
                                </button>
                              </div>
                            </div>
                          </template>
                        </div>
                      </div>
                      <div v-else>
                        <HandThumbUpIcon
                          class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                        />
                      </div>
                      <span class="mx-2 mr-6 font-medium text-md"
                        >{{ forum.likes.length }}
                      </span>

                      <ChatBubbleLeftEllipsisIcon
                        class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      />
                      <span class="mx-2 font-medium text-md">{{
                        forum.comments.length
                      }}</span>
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

          <div v-for="comment in forum.comments" v-bind:key="comment.id">
            <br />
            <br />

            <hr class="m-auto border-t-2" />

            <br />
            <br />

            <div v-if="userid != null">
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
                    <div class="flex justify-between">
                      <p class="flex ml-3 font-medium text-sm opacity-50">
                        Answered On
                        {{ comment.created_at }}
                        WIB
                      </p>
                      <div v-if="comment.user_id == userid">
                        <button
                          @click="deleteComment(comment.id)"
                          tabindex="-1"
                          type="button"
                          class="mx-4 my-auto"
                        >
                          <TrashIcon
                            class="
                              w-4
                              h-4
                              md:w-4 md:h-4
                              lg:w-4 lg:h-4
                              text-rose-700
                            "
                          />
                        </button>
                      </div>
                    </div>
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

            <div v-else>
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
                    <div class="flex justify-between">
                      <p class="flex ml-3 font-medium text-sm opacity-50">
                        Answered On
                        {{ comment.created_at }}
                        WIB
                      </p>
                      <div v-if="comment.user_id == userid">
                        <button
                          @click="deleteComment(comment.id)"
                          tabindex="-1"
                          type="button"
                          class="mx-4 my-auto"
                        >
                          <TrashIcon
                            class="
                              w-4
                              h-4
                              md:w-4 md:h-4
                              lg:w-4 lg:h-4
                              text-rose-700
                            "
                          />
                        </button>
                      </div>
                    </div>
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

      <div v-if="userid != null" id="comment">
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
                placeholder="Comment .."
                class="
                  mt-4
                  mb-4
                  bg-sky-900
                  text-white
                  block
                  w-full
                  placeholder:text-slate-100 placeholder:italic
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
      <div v-else id="comment">
        <div class="lg:p-8 w-full">
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
                mr-2
                my-auto
                md:w-14 md:h-14
                lg:w-16 lg:h-16
              "
            ></UserCircleIcon>

            <TextInput
              id="title"
              type="text"
              placeholder="Login to write answer .."
              class="
                mt-4
                mb-4
                bg-sky-900
                text-white
                block
                w-full
                placeholder:text-slate-100 placeholder:italic
                focus:border-sky-900 focus:ring-sky-900
              "
              v-model="form.comment"
              disabled
            />

            <button>
              <PaperAirplaneIcon
                class="text-sky-900 w-8 h-8 my-auto ml-2"
              ></PaperAirplaneIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </HomeLayout>
</template>

<style setup>
/* @import url("https://fonts.googleapis.com"); */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
div {
  font-family: Roboto;
}
</style>
