<script setup>
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import Modal from "@/Components/Modal.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { watchEffect } from "vue";
import Ckeditor from "@/Components/Ckeditor.vue";

const props = defineProps({
    show: Boolean,
    forum: Object,
});

const emit = defineEmits(["close"]);

const form = useForm({
    subject: "",
});

const update = () => {
    form.put(route("forum.update", props.forum?.id), {
        preserveScroll: true,
        onSuccess: () => {
            emit("close");
            form.reset();
        },
        onError: () => null,
        onFinish: () => null,
    });
};

watchEffect(() => {
    if (props.show) {
        form.subject = props.forum?.subject;
    }
});
</script>

<template>
    <section class="space-y-6">
        <Modal :show="props.show" @close="emit('close')">
            <form class="p-6" @submit.prevent="update">
                <h2
                    class="text-lg font-medium text-gray-900 dark:text-gray-100"
                >
                    Edit Forum
                </h2>
                <div class="my-6 space-y-4">
                    <div>
                        <InputLabel for="title" value="Title" />
                        <Ckeditor
                            id="subject"
                            class="mt-1 block w-full"
                            v-model="form.subject"
                            required
                        />
                        <InputError
                            class="mt-2"
                            :message="form.errors.subject"
                        />
                    </div>
                </div>
                <div class="flex justify-end">
                    <SecondaryButton
                        :disabled="form.processing"
                        @click="emit('close')"
                    >
                        {{ lang().button.close }}
                    </SecondaryButton>
                    <PrimaryButton
                        class="ml-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="update"
                    >
                        {{
                            form.processing
                                ? lang().button.save + "..."
                                : lang().button.save
                        }}
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    </section>
</template>
