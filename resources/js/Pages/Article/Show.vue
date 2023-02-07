<script setup>
// import NavBarVue from "@/Components/NavBar.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
// import Ckeditor from "@/Components/Ckeditor.vue";
import DangerButton from "@/Components/DangerButton.vue";
import Delete from "@/Pages/Article/DeleteComment.vue";
import { ChevronLeftIcon, TrashIcon } from "@heroicons/vue/24/solid";
import { reactive, watch } from "vue";
import moment from "moment";

const props = defineProps({
<<<<<<< Updated upstream
  articles: Object,
=======
    articles: Object,
>>>>>>> Stashed changes
});

// const form = useForm({
//     id: props.article.id,
//     comment: props.article.comment,
//     like: props.article.like,
//     _method: "put",
// });

// const data = reactive({
//     deleteOpen: false,
// });

// function deleteLike(id) {
//     form.delete(route("article.delete-like", id));
// }

// const likeadd = () => {
//     form.post(route("article.create-like", props.article.id));
// };
// const comment = () => {
//     form.post(route("article.create-comment", props.article.id));
// };
</script>
<template>
<<<<<<< Updated upstream
  <Head title="Article" />
  <!-- <NavBarVue :open="sidebarOpened" @open="sidebarOpened = true" /> -->
  <div class="py-5">
    <div class="mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden">
        <div class="p-6 bg-white">
          <Link :href="route('article.index')">
            <div class="flex items-center">
              <ChevronLeftIcon class="w-4 h-4" />
              <span>Back</span>
            </div>
          </Link>
          <div
            class="container mx-auto pt-10 pb-20"
            v-for="article in articles"
            :key="article.id"
          >
            <section class="text-gray-500 bg-white rounded-lg">
              <img src="" class="w-20" alt="" />
              <div class="flex flex-wrap justify-center">
                <div class="w-50 md:w-3/4 pb-20">
                  <h1 class="font-bold text-6xl text-center text-gray-900 mb-4">
                    {{ article.title }}
                  </h1>
                  <p class="text-xl text-center">
                    {{ moment(article.updated_at).format("LL") }}
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
            <!-- <form
=======
    <Head title="Article" />
    <!-- <NavBarVue :open="sidebarOpened" @open="sidebarOpened = true" /> -->
    <div class="py-5">
        <div class="mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden">
                <div class="p-6 bg-white">
                    <Link :href="route('article.index')">
                        <div class="flex items-center">
                            <ChevronLeftIcon class="w-4 h-4" />
                            <span>Back</span>
                        </div>
                    </Link>
                    <div
                        class="container mx-auto pt-10 pb-20"
                        v-for="article in articles"
                    >
                        <section class="text-gray-500 bg-white rounded-lg">
                            <img src="" class="w-20" alt="" />
                            <div class="flex flex-wrap justify-center">
                                <div class="w-50 md:w-3/4 pb-20">
                                    <h1
                                        class="font-bold text-6xl text-center text-gray-900 mb-4"
                                    >
                                        {{ article.title }}
                                    </h1>
                                    <p class="text-xl text-center">
                                        {{
                                            moment(article.updated_at).format(
                                                "LL"
                                            )
                                        }}
                                        |
                                        {{ article.user.name }}
                                    </p>
                                    <div class="text-center my-4">
                                        <button
                                            class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                            disabled
                                        >
                                            {{ article.category.name }}
                                        </button>
                                    </div>
                                    <div
                                        class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple my-4"
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
                                        <span
                                            v-html="article.body"
                                            class="text-xl"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- <form
>>>>>>> Stashed changes
                            @submit.prevent="comment"
                            enctype="multipart/form-data"
                        >
                            <div class="mb-4">
                                <InputLabel for="comment" value="Comment" />

                                <TextInput
                                    id="comment"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.comment"
                                    autofocus
                                />
                                <span
                                    className="text-red-600"
                                    v-if="form.errors.comment"
                                >
                                    {{ form.errors.comment }}
                                </span>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 bg-primary dark:bg-primary border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-primary/90 focus:bg-primary/80 dark:focus:bg-primary/80 active:bg-primary dark:active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150 disabled:bg-primary/80"
                                >
                                    Save
                                </button>
                            </div>
                        </form> -->

<<<<<<< Updated upstream
            <!-- <div v-for="like in likes"> -->
            <!-- <div v-if="likes == ''">
=======
                        <!-- <div v-for="like in likes"> -->
                        <!-- <div v-if="likes == ''">
>>>>>>> Stashed changes
                            <form @submit.prevent="likeadd">
                                <div className="mt-4">
                                    <button type="submit">like</button>
                                </div>
                            </form>
                        </div>
                        <div v-else>
                            <template v-for="like in likes" :key="like.id">
                                <div
                                    v-show="
                                        like.user_id == $page.props.auth.user.id
                                    "
                                >
                                    <button
                                        @click="deleteLike(like.id)"
                                        tabindex="-1"
                                        type="button"
                                        class="mt-4"
                                    >
                                        Unlike
                                    </button>
                                </div>
                                <div
                                    v-show="
                                        like.user_id != $page.props.auth.user.id
                                    "
                                >
                                    <form @submit.prevent="likeadd">
                                        <div className="mt-4">
                                            <button type="submit">like</button>
                                        </div>
                                    </form>
                                </div>
                            </template>
                        </div>
                        <p>{{ props.likescount }}</p>
                        <Delete
                            :show="data.deleteOpen"
                            @close="data.deleteOpen = false"
                            :comment="data.comment"
                        /> -->
<<<<<<< Updated upstream
            <!-- <table>
=======
                        <!-- <table>
>>>>>>> Stashed changes
                            <thead>
                                <tr>
                                    <td>comment</td>
                                    <td>author</td>
                                    <td>action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="comment in comments">
                                    <td>{{ comment.comment }}</td>
                                    <td>
                                        {{ users[-1 + comment.user_id].name }}
                                    </td>
                                    <td
                                        v-if="
                                            comment.user_id ==
                                            $page.props.auth.user.id
                                        "
                                    >
                                        <DangerButton
                                            v-show="can(['delete user'])"
                                            type="button"
                                            @click="
                                                (data.deleteOpen = true),
                                                    (data.comment = comment)
                                            "
                                            class="px-2 py-1.5 rounded-none"
                                            v-tooltip="lang().tooltip.delete"
                                        >
                                            <TrashIcon class="w-4 h-4" />
                                        </DangerButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table> -->
<<<<<<< Updated upstream
          </div>
        </div>
      </div>
    </div>
  </div>
=======
                    </div>
                </div>
            </div>
        </div>
    </div>
>>>>>>> Stashed changes
</template>

<style>
h1 {
<<<<<<< Updated upstream
  font-family: sans-serif;
=======
    font-family: sans-serif;
>>>>>>> Stashed changes
}
</style>
