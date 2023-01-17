<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import Breadcrumb from "@/Components/Breadcrumb.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SelectInput from "@/Components/SelectInput.vue";
import { reactive, watch } from "vue";
import DangerButton from "@/Components/DangerButton.vue";
import { _, pickBy, debounce } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "@/Components/Pagination.vue";
import {
    CheckBadgeIcon,
    ChevronUpDownIcon,
    PencilIcon,
    EyeIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";
import Delete from "@/Pages/Article/Delete.vue";
import Checkbox from "@/Components/Checkbox.vue";

const props = defineProps({
    title: String,
    filters: Object,
    articles: Object,
    breadcrumbs: Object,
    perPage: Number,
});

const data = reactive({
    params: {
        search: props.filters.search,
        field: props.filters.field,
        order: props.filters.order,
        perPage: props.perPage,
    },
    selectedId: [],
    multipleSelect: false,
    createOpen: false,
    editOpen: false,
    deleteOpen: false,
    deleteBulkOpen: false,
    article: null,
    dataSet: [
        { label: "10", value: 10 },
        { label: "20", value: 20 },
        { label: "50", value: 50 },
        { label: "100", value: 100 },
    ],
});

const order = (field) => {
    data.params.field = field;
    data.params.order = data.params.order === "asc" ? "desc" : "asc";
};

watch(
    () => _.cloneDeep(data.params),
    debounce(() => {
        let params = pickBy(data.params);
        Inertia.get(route("article.index"), params, {
            replace: true,
            preserveState: true,
            preserveScroll: true,
        });
    }, 150)
);

const selectAll = (event) => {
    if (event.target.checked === false) {
        data.selectedId = [];
    } else {
        props.articles?.data.forEach((article) => {
            data.selectedId.push(article.id);
        });
    }
};
const select = () => {
    if (props.articles?.data.length == data.selectedId.length) {
        data.multipleSelect = true;
    } else {
        data.multipleSelect = false;
    }
};
</script>

<template>
    <Head :title="props.title" />

    <AuthenticatedLayout>
        <Breadcrumb :title="title" :breadcrumbs="breadcrumbs" />
        <div class="space-y-4">
            <div class="px-4 sm:px-0">
                <div class="rounded-lg overflow-hidden w-fit">
                    <Link
                        tabiprimndex="1"
                        type="button"
                        className="inline-flex items-center px-4 py-2 bg-primary dark:bg-primary border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-primary/90 focus:bg-primary/80 dark:focus:bg-primary/80 active:bg-primary dark:active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150 disabled:bg-primary/80"
                        :href="route('article.create')"
                        >Create</Link
                    >
                    <Delete
                        :show="data.deleteOpen"
                        @close="data.deleteOpen = false"
                        :article="data.article"
                    />
                </div>
            </div>
            <div
                class="relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
                <div class="flex justify-between p-2">
                    <div class="flex space-x-2">
                        <SelectInput
                            v-model="data.params.perPage"
                            :dataSet="data.dataSet"
                        />
                    </div>
                    <TextInput
                        v-model="data.params.search"
                        type="text"
                        class="block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg"
                        :placeholder="lang().placeholder.search"
                    />
                </div>
                <div class="overflow-x-auto scrollbar-table">
                    <table class="w-full">
                        <thead
                            class="uppercase text-sm border-t border-gray-200 dark:border-gray-700"
                        >
                            <tr class="dark:bg-gray-900/50 text-center">
                                <th class="px-2 py-4 text-center">
                                    <Checkbox
                                        v-model:checked="data.multipleSelect"
                                        @change="selectAll"
                                    />
                                </th>
                                <th class="px-2 py-4 text-center">#</th>
                                <th
                                    class="px-2 py-4 cursor-pointer"
                                    v-on:click="order('name')"
                                >
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <span>Thumbnail</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th
                                    class="px-2 py-4 cursor-pointer"
                                    v-on:click="order('title')"
                                >
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <span>Title</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th
                                    class="px-2 py-4 cursor-pointer"
                                    v-on:click="order('status')"
                                >
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <span>Status</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th
                                    class="px-2 py-4 cursor-pointer"
                                    v-on:click="order('like')"
                                >
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <span>Like</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th class="px-2 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(article, index) in articles.data"
                                :key="index"
                                class="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"
                            >
                                <td
                                    class="whitespace-nowrap py-4 px-2 sm:py-3 text-center"
                                >
                                    <input
                                        class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800"
                                        type="checkbox"
                                        @change="select"
                                        :value="article.id"
                                        v-model="data.selectedId"
                                    />
                                </td>
                                <td
                                    class="whitespace-nowrap py-4 px-2 sm:py-3 text-center"
                                >
                                    {{ ++index }}
                                </td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                                    <img
                                        :src="article.thumbnail"
                                        class="w-32 rounded"
                                        alt=""
                                    />
                                </td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                                    {{ article.title }}
                                </td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                                    {{ article.status }}
                                </td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                                    {{ article.like }}
                                </td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                                    <div
                                        class="flex justify-center items-center"
                                    >
                                        <div class="rounded-md overflow-hidden">
                                            <Link
                                                class="px-2 py-1.5 inline-flex items-center px-4 py-2 bg-yellow-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-500 active:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                                :href="
                                                    route(
                                                        'article.show',
                                                        article.id
                                                    )
                                                "
                                            >
                                                <EyeIcon class="w-4 h-4" />
                                            </Link>
                                            <Link
                                                class="px-2 py-1.5 inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                                :href="
                                                    route(
                                                        'article.edit',
                                                        article.id
                                                    )
                                                "
                                            >
                                                <PencilIcon class="w-4 h-4" />
                                            </Link>
                                            <DangerButton
                                                v-show="can(['delete user'])"
                                                type="button"
                                                @click="
                                                    (data.deleteOpen = true),
                                                        (data.article = article)
                                                "
                                                class="px-2 py-1.5 rounded-none"
                                                v-tooltip="
                                                    lang().tooltip.delete
                                                "
                                            >
                                                <TrashIcon class="w-4 h-4" />
                                            </DangerButton>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    class="flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"
                >
                    <Pagination
                        :links="props.articles"
                        :filters="data.params"
                    />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
