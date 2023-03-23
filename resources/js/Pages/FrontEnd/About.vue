<template>
  <HomeLayout>
    <div class="bg-sky-900">
      <div class="max-w-xs mx-auto overflow-hidden md:max-w-5xl lg:max-w-7xl">
        <div
          class="container mx-auto px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"
        >
          <Head title="Video" />
          <h2>ini about</h2>
        </div>
      </div>
    </div>
  </HomeLayout>
</template>

<script setup>
import HomeLayout from "@/Layouts/HomeLayout.vue";
import NavbarUser from "@/Components/NavbarUser.vue";
import { Head } from "@inertiajs/inertia-vue3";
</script>

<style>
</style>
