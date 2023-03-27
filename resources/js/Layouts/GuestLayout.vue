<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/inertia-vue3";
// import SwitchDarkMode from '@/Components/SwitchDarkMode.vue'
</script>

<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900"
  >
    <div
      class="flex justify-between items-center w-full sm:max-w-md text-gray-500 dark:text-gray-300"
    >
      <!-- <Link class="mx-auto" href="/">
        <img src="../../../public/Logo-ENT-Gelap.svg" class="w-24 mx-auto" />
        <ApplicationLogo class="w-8 h-8 fill-current" />
        <p class="text-lg ml-2">Media ENT</p>
      </Link> -->
      <div>
        <!-- <SwitchDarkMode /> -->
      </div>
    </div>

    <div
      class="md:w-full sm:max-w-md mt-6 md:px-6 px-12 rounded-lg py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg"
    >
      <slot />
    </div>
  </div>
</template>
