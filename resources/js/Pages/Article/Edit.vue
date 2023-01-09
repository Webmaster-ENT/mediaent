<script setup>
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import Textarea from "@/Components/Textarea.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import Ckeditor from "@/Components/Ckeditor.vue";
const props = defineProps({
    article: Object,
});
const form = useForm({
    id: props.article.id,
    title: props.article.title,
    category_id: props.article.category_id,
    body: props.article.body,
    status: props.article.status,
    thumbnail: props.article.thumbnail,
});
// function updateArticle() {
//     Inertia.post("/article/${props.article.id}",
//     _method:"put",
//     );
// }
const submit = () => {
    form.put(route("article.update", props.article.id));
};
</script>
<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Post
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                :href="route('article.index')"
                            >
                                Back
                            </Link>
                        </div>
                        <form name="createForm" @submit.prevent="submit">
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
                                            :editor="editor"
                                            v-model="form.body"
                                            :config="editorConfig"
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

                                        <Input
                                            id="thumbnail"
                                            type="file"
                                            class="mt-1 block w-full"
                                            @input="
                                                form.thumbnail =
                                                    $event.target.files[0]
                                            "
                                            multiple
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
<!-- <template>
    <Head title="Articles" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit Post
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                :href="route('posts.index')"
                            >
                                Back
                            </Link>
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
</template> -->
<!-- Create a new file Textaarea.vue inside resources/js/Pages/Components
resources/js/Pages/Components/Textarea.vue -->

<!-- <script setup>
import { onMounted, ref } from "vue";
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
const input = ref(null);
onMounted(() => {
    if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
    }
});
</script> -->
<!-- <template>
    <textarea
        class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
    ></textarea>
</template> -->
