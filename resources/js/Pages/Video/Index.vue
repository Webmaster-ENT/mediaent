<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
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
import Create from "@/Pages/Video/Create.vue";
import Edit from "@/Pages/Video/Edit.vue";
import Delete from "@/Pages/Video/Delete.vue";
import DeleteBulk from "@/Pages/Video/DeleteBulk.vue";
import Checkbox from "@/Components/Checkbox.vue";

const props = defineProps({
  title: String,
  filters: Object,
  videos: Object,
  // roles: Object,
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
  video: null,
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
    Inertia.get(route("video.index"), params, {
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
    props.videos?.data.forEach((video) => {
      data.selectedId.push(video.id);
    });
  }
};
const select = () => {
  if (props.videos?.data.length == data.selectedId.length) {
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
          <PrimaryButton
            v-show="can(['create user'])"
            class="rounded-none"
            @click="data.createOpen = true"
          >
            Create
          </PrimaryButton>
          <Create :show="data.createOpen" @close="data.createOpen = false" />
          <Edit
            :show="data.editOpen"
            @close="data.editOpen = false"
            :video="data.video"
          />
          <Delete
            :show="data.deleteOpen"
            @close="data.deleteOpen = false"
            :video="data.video"
          />
          <DeleteBulk
            :show="data.deleteBulkOpen"
            @close="
              (data.deleteBulkOpen = false),
                (data.multipleSelect = false),
                (data.selectedId = [])
            "
            :selectedId="data.selectedId"
          />
        </div>
      </div>
      <div class="relative bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <div class="flex justify-between p-2">
          <div class="flex space-x-2">
            <SelectInput
              v-model="data.params.perPage"
              :dataSet="data.dataSet"
            />
            <DangerButton
              @click="data.deleteBulkOpen = true"
              v-show="data.selectedId.length != 0 && can(['delete user'])"
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
              class="
                uppercase
                text-sm
                border-t border-gray-200
                dark:border-gray-700
              "
            >
              <tr class="dark:bg-gray-900/50 text-left">
                <th class="px-2 py-4 text-center">
                  <Checkbox
                    v-model:checked="data.multipleSelect"
                    @change="selectAll"
                  />
                </th>
                <th class="px-2 py-4 text-center">#</th>
                <th
                  class="px-2 py-4 cursor-pointer"
                  v-on:click="order('title')"
                >
                  <div class="flex justify-between items-center">
                    <span>Video</span>
                    <ChevronUpDownIcon class="w-4 h-4" />
                  </div>
                </th>
                <th
                  class="px-2 py-4 cursor-pointer"
                  v-on:click="order('video_url')"
                >
                  <div class="flex justify-between items-center">
                    <span>Title</span>
                    <ChevronUpDownIcon class="w-4 h-4" />
                  </div>
                </th>
                <th
                  class="px-2 py-4 cursor-pointer"
                  v-on:click="order('status')"
                >
                  <div class="flex justify-between items-center">
                    <span>Status</span>
                    <ChevronUpDownIcon class="w-4 h-4" />
                  </div>
                </th>
                <th class="px-2 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(video, index) in videos.data"
                :key="index"
                class="
                  border-t border-gray-200
                  dark:border-gray-700
                  hover:bg-gray-200/30 hover:dark:bg-gray-900/20
                "
              >
                <td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center">
                  <input
                    class="
                      rounded
                      dark:bg-gray-900
                      border-gray-300
                      dark:border-gray-700
                      text-primary
                      shadow-sm
                      focus:ring-primary/80
                      dark:focus:ring-primary dark:focus:ring-offset-gray-800
                    "
                    type="checkbox"
                    @change="select"
                    :value="video.id"
                    v-model="data.selectedId"
                  />
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center">
                  {{ ++index }}
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                  <iframe
                    :src="video.video_url"
                    class="rounded"
                    frameborder="0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                  {{ video.title }}
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3 text-capitalize">
                  {{ video.status }}
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                  <div class="flex justify-center items-center">
                    <div class="rounded-md overflow-hidden">
                      <InfoButton
                        v-show="can(['update user'])"
                        type="button"
                        @click="(data.editOpen = true), (data.video = video)"
                        class="px-2 py-1.5 rounded-none"
                        v-tooltip="lang().tooltip.edit"
                      >
                        <PencilIcon class="w-4 h-4" />
                      </InfoButton>
                      <DangerButton
                        v-show="can(['delete user'])"
                        type="button"
                        @click="(data.deleteOpen = true), (data.video = video)"
                        class="px-2 py-1.5 rounded-none"
                        v-tooltip="lang().tooltip.delete"
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
          class="
            flex
            justify-between
            items-center
            p-2
            border-t border-gray-200
            dark:border-gray-700
          "
        >
          <Pagination :links="props.videos" :filters="data.params" />
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
