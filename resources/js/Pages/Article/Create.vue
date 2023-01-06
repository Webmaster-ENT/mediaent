<script setup>
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputError from "@/Components/InputError.vue";
import SelectInput from "@/Components/SelectInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import Textarea from "@/Components/Textarea.vue";
// import Modal from "@/Components/Modal.vue";
import { Head, useForm, Link } from "@inertiajs/inertia-vue3";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
    CheckBadgeIcon,
    ChevronLeftIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";

// import Form from "vue";
// export default {
//     data() {
//         return {
//             editor: ClassicEditor,
//             editorData: "<p>Your Post Content</p>",
//             editorConfig: {},

//             form: new Form({
//                 post_text: "",
//                 post_title: "",
//                 post_image: "",
//             }),
//         };
//     },
// };
defineProps({
    categories: Array,
});
const form = useForm({
    title: "",
    body: "",
    status: "",
    thumbnail: "",
    category_id: "",
});

const submit = () => {
    form.post(route("article.store"));
};
</script>

<template>
    <Head title="Article" />
    <AuthenticatedLayout>
        <div class="py-5">
            <div class="mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <div class="flex justify-between items-center">
                                <ChevronLeftIcon class="w-4 h-4" />
                                <Link :href="route('article.index')">Back</Link>
                            </div>
                        </div>
                        <form
                            name="createForm"
                            @submit.prevent="submit"
                            enctype="multipart/form-data"
                        >
                            <div className="grid grid-cols-4 gap-4">
                                <div className="col-span-3">
                                    <div class="mb-4">
                                        <InputLabel for="title" value="Title" />

                                        <TextInput
                                            id="title"
                                            type="text"
                                            class="mt-1 block w-full"
                                            v-model="form.title"
                                            autofocus
                                        />
                                        <span
                                            className="text-red-600"
                                            v-if="form.errors.title"
                                        >
                                            {{ form.errors.title }}
                                        </span>
                                    </div>
                                    <!-- <ClassicEditor
                                        :editor="editor"
                                        v-model="form.post_text"
                                        :config="editorConfig"
                                    ></ClassicEditor> -->

                                    <div className="mb-4">
                                        <InputLabel for="body" value="Body" />

                                        <Textarea
                                            id="body"
                                            class="mt-1 block w-full"
                                            v-model="form.body"
                                            autofocus
                                        />
                                        <span
                                            className="text-red-600"
                                            v-if="form.errors.body"
                                        >
                                            {{ form.errors.body }}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-4">
                                        <InputLabel
                                            for="status"
                                            value="Status"
                                        />

                                        <select
                                            id="status"
                                            v-model="form.status"
                                            class="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"
                                        >
                                            <option value="draft" selected>
                                                Draft
                                            </option>
                                            <option value="show">Show</option>
                                        </select>
                                        <span
                                            className="text-red-600"
                                            v-if="form.errors.status"
                                        >
                                            {{ form.errors.status }}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <InputLabel
                                            for="category_id"
                                            value="Category_id"
                                        />

                                        <select
                                            id="category_id"
                                            v-model="form.category_id"
                                            class="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"
                                            autofocus
                                        >
                                            <option
                                                v-for="category in categories"
                                                v-bind:value="category.id"
                                            >
                                                <p>{{ category.name }}</p>
                                            </option>
                                        </select>
                                        <span
                                            className="text-red-600"
                                            v-if="form.errors.category_id"
                                        >
                                            {{ form.errors.category_id }}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <InputLabel
                                            for="thumbnail"
                                            value="Thumbnail"
                                        />

                                        <Input
                                            id="thumbnail"
                                            type="file"
                                            class="mt-1 block w-full"
                                            v-model="form.thumbnail"
                                            autofocus
                                        />
                                        <span
                                            className="text-red-600"
                                            v-if="form.errors.thumbnail"
                                        >
                                            {{ form.errors.thumbnail }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
