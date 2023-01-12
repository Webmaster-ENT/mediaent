<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import Breadcrumb from "@/Components/Breadcrumb.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InfoButton from "@/Components/InfoButton.vue";
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
    TrashIcon,
} from "@heroicons/vue/24/solid";
import Create from "@/Pages/Article/Create.vue";
import Edit from "@/Pages/Article/Edit.vue";
import Delete from "@/Pages/Article/Delete.vue";
import Checkbox from "@/Components/Checkbox.vue";

const props = defineProps({
    title: String,
    filters: Object,
    articles: Object,
    roles: Object,
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
const form = useForm();
function destroy(id) {
    if (confirm("Are you sure you want to Delete")) {
        form.delete(route("article.destroy", id));
    }
}
</script>

<template>
    <Head :title="props.title" />

    <AuthenticatedLayout>
        <Breadcrumb :title="title" :breadcrumbs="breadcrumbs" />
        <div class="space-y-4">
            <div class="px-4 sm:px-0">
                <div class="rounded-lg overflow-hidden w-fit">
                    <PrimaryButton
                        v-show="can(['create article'])"
                        class="rounded-none"
                        @click="data.createOpen = true"
                    >
                        {{ lang().button.add }}
                    </PrimaryButton>
                    <Link
                        tabindex="1"
                        type="button"
                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                        :href="route('article.create')"
                        >Create</Link
                    >
                    <!-- <Create
                        :show="data.createOpen"
                        @close="data.createOpen = false"
                        :roles="props.roles"
                    /> -->
                    <!-- <Edit
                        :show="data.editOpen"
                        @close="data.editOpen = false"
                        :article="data.article"
                        :roles="props.roles"
                    /> -->
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
                        <DangerButton
                            @click="data.deleteBulkOpen = true"
                            v-show="
                                data.selectedId.length != 0 &&
                                can(['delete article'])
                            "
                            class="px-3 py-1.5"
                            v-tooltip="lang().tooltip.delete_selected"
                        >
                            <TrashIcon class="w-5 h-5" />
                        </DangerButton>
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
                            <tr class="dark:bg-gray-900/50 text-left">
                                <th class="px-2 py-4 text-center">
                                    <Checkbox
                                        v-model:checked="data.multipleSelect"
                                        @change="selectAll"
                                    />
                                </th>
                                <th
                                    class="px-2 py-4 cursor-pointer"
                                    v-on:click="order('title')"
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
                                    v-on:click="order('updated_at')"
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
                                    v-on:click="order('updated_at')"
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
                                    v-on:click="order('updated_at')"
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
                                v-for="article in articles.data"
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
                                        v-model="article.selectedId"
                                    />
                                </td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                                    <span
                                        class="flex justify-start items-center"
                                    >
                                        <!-- <CheckBadgeIcon
                                        class="ml-[2px] w-4 h-4 text-blue-600 dark:text-white"
                                        v-show="article.email_verified_at"
                                        /> -->
                                    </span>
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
                                    <Link
                                        tabIndex="1"
                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                        :href="
                                            route('article.edit', article.id)
                                        "
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        @click="destroy(article.id)"
                                        tabIndex="-1"
                                        type="button"
                                        className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                    >
                                        Delete
                                    </button>
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
