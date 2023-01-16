<script setup>
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import Textarea from "@/Components/Textarea.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import Ckeditor from "@/Components/Ckeditor.vue";
// import { Inertia } from "@inertiajs/inertia";
import {
    CheckBadgeIcon,
    ChevronLeftIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";
const props = defineProps({
    article: Object,
    categories: Array,
    thumbnail: String,
});

const form = useForm({
    id: props.article.id,
    title: props.article.title,
    category_id: props.article.category_id,
    body: props.article.body,
    status: props.article.status,
    thumbnail: props.article.thumbnail,
});

const submit = () => {
    form.put(route("article.update", props.article.id));
};
</script>
<template>
    <Head title="Article" />

    <div class="py-5">
        <div class="mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white">
                    <div className="flex items-center justify-between mb-6">
                        <div class="flex justify-between items-center">
                            <ChevronLeftIcon class="w-4 h-4" />
                            <Link :href="route('article.index')">Back</Link>
                        </div>
                    </div>
                    <form
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

                                <div className="mb-4">
                                    <InputLabel
                                        for="body"
                                        class="mb-1"
                                        value="Body"
                                    />

                                    <Ckeditor
                                        id="body"
                                        v-model="form.body"
                                        autofocus
                                    />
                                    <!-- <Textarea
                                            id="body"
                                            class="mt-1 block w-full"
                                            v-model="form.body"
                                            autofocus
                                        /> -->
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
                                    <InputLabel for="status" value="Status" />

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
                                        value="Category"
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

                                    <TextInput
                                        id="thumbnail"
                                        type="file"
                                        class="mt-1 rounded-none"
                                        name="thumbnail"
                                        @input="
                                            form.thumbnail =
                                                $event.target.files[0]
                                        "
                                        multiple
                                    />
                                    <img :src="thumbnail" alt="" class="w-30" />
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
</template>
