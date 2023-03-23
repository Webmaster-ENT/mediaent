<script setup>
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import Modal from "@/Components/Modal.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Textarea from "@/Components/Textarea.vue";
import SelectInput from "@/Components/SelectInput.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/inertia-vue3";

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["close"]);

const form = useForm({
  title: "",
  video_url: "https://www.youtube.com/embed/",
  status: "draft",
  thumbnail: null,
});

const create = () => {
  form.post(route("video.store"), {
    preserveScroll: true,
    onSuccess: () => {
      emit("close");
      form.reset();
    },
    onError: () => null,
    onFinish: () => null,
  });
};
</script>

<template>
  <section class="space-y-6">
    <Modal :show="props.show" @close="emit('close')">
      <form class="p-6" @submit.prevent="create">
        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
          Add Video Url
        </h2>
        <div class="my-6 space-y-2">
          <InputLabel for="thumbnail" value="Thumbnail" />

          <TextInput
            id="thumbnail"
            type="file"
            class="mt-1 block w-full rounded-none shadow-none"
            name="thumbnail"
            @change="upload"
            @input="form.thumbnail = $event.target.files[0]"
            multiple
          />
          <img
            :src="previewimage"
            alt=""
            class="w-100 md:w-64 mt-4 rounded-md"
          />

          <span className="text-red-600" v-if="form.errors.thumbnail">
            {{ form.errors.thumbnail }}
          </span>
        </div>

        <div class="my-6 space-y-4">
          <div>
            <InputLabel for="title" value="Title" />
            <TextInput
              id="name"
              type="text"
              class="mt-1 block w-full"
              v-model="form.title"
              required
              placeholder="Title"
            />
            <InputError class="mt-2" :message="form.errors.title" />
          </div>
        </div>
        <div class="my-6 space-y-4">
          <div>
            <InputLabel for="title" value="Link YouTube-Embed" />
            <TextInput
              id="video_url"
              type="text"
              class="mt-1 block w-full"
              v-model="form.video_url"
              required
              placeholder="https://www.youtube.com/embed/xxx..."
            />
            <InputError class="mt-2" :message="form.errors.title" />
          </div>
        </div>
        <div class="my-6 space-y-4">
          <InputLabel for="status" value="Status" />
          <select
            id="status"
            v-model="form.status"
            class="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"
          >
            <option value="draft" selected>Draft</option>
            <option value="show">Show</option>
          </select>
        </div>
        <div class="flex justify-end">
          <SecondaryButton :disabled="form.processing" @click="emit('close')">
            {{ lang().button.close }}
          </SecondaryButton>
          <PrimaryButton
            class="ml-3"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
            @click="create"
          >
            {{
              form.processing ? lang().button.add + "..." : lang().button.add
            }}
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  </section>
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
      console.log(e.target.files);
    },
  },
};
</script>
