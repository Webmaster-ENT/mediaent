<script setup>
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import Modal from "@/Components/Modal.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Textarea from "@/Components/Textarea.vue";
import Ckeditor from "@/Components/Ckeditor.vue";
import { useForm } from "@inertiajs/inertia-vue3";

const props = defineProps({
    show: Boolean,
});

const emit = defineEmits(["close"]);

const form = useForm({
    subject: "",
});

const create = () => {
    form.post(route("forum.store"), {
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
                <h2
                    class="text-lg font-medium text-gray-900 dark:text-gray-100"
                >
                    Add Forum
                </h2>
                <div class="my-6 space-y-4">
                    <div>
                        <InputLabel for="subject" value="Isi Forum" />
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
                        @click="create"
                    >
                        {{
                            form.processing
                                ? lang().button.add + "..."
                                : lang().button.add
                        }}
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    </section>
</template>
