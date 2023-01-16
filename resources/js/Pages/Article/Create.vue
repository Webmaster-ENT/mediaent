<script setup>
import InputError from "@/Components/InputError.vue";
import SelectInput from "@/Components/SelectInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import Textarea from "@/Components/Textarea.vue";
import Ckeditor from "@/Components/Ckeditor.vue";
import { Head, useForm, Link } from "@inertiajs/inertia-vue3";
import {
    CheckBadgeIcon,
    ChevronLeftIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";

defineProps({
    categories: Object,
});
const form = useForm({
    title: "",
    body: "",
    status: "draft",
    thumbnail: null,
    category_id: null,
});

const submit = () => {
    form.post(route("article.store"));
};
</script>

<template>
    <Head title="Article" />
    <div class="py-5">
        <div class="mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden sm:rounded-lg">
                <div class="p-6 bg-white">
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

                                <div className="mb-4">
                                    <InputLabel for="body" value="Body" />

                                    <Ckeditor
                                        id="body"
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
                                        class="mt-1 block w-full rounded-none shadow-none"
                                        name="thumbnail"
                                        @change="upload"
                                        @input="
                                            form.thumbnail =
                                                $event.target.files[0]
                                        "
                                        multiple
                                    />
                                    <img
                                        :src="previewimage"
                                        alt=""
                                        class="w-30"
                                    />
                                    <div class="m-2 p-2">
                                        <img
                                            :src="form.thumbnail"
                                            class="w-32"
                                            alt=""
                                        />
                                    </div>
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
                                className="px-6 py-2 font-bold text-white bg-blue-500 rounded"
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
<script>
export default {
    props: ["id"],
    data() {
        return {
            previewimage: null,
        };
    },
    methods: {
        upload(e) {
            let files = e.target.files[0];
            this.previewimage = URL.createObjectURL(files);
            // console.log(e.target.files);
        },
    },
};
</script>
