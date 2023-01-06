<script setup>
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputError from "@/Components/InputError.vue";
import SelectInput from "@/Components/SelectInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import Textarea from "@/Components/Textarea.vue";
// import Modal from "@/Components/Modal.vue";
import { Head, useForm, Link } from "@inertiajs/inertia-vue3";
import {
    CheckBadgeIcon,
    ChevronLeftIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";
defineProps({
    categories: Array,
});
const form = useForm({
    title: "",
    body: "",
    status: "",
    thumbnail: "",
    category_id: "",
    comment: "halo",
});

const submit = () => {
    form.post(route("article.store"));
};
</script>

<template>
    <Head title="Article" />
    <AuthenticatedLayout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <div class="flex justify-between items-center">
                                <ChevronLeftIcon class="w-4 h-4" />
                                <Link :href="route('article.index')">Back</Link>
                            </div>
                        </div>
                        <form name="createForm" @submit.prevent="submit">
                            <div className="flex flex-col">
                                <div className="mb-4">
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
                                            {{ category.name }}
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
                                        id="title"
                                        type="text"
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
