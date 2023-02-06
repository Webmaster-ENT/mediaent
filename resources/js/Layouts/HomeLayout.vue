<template>
  <div class="w-full">
    <NavbarUser />
    <main>
      <slot />
    </main>
    <FooterUser />
  </div>
</template>
<script setup>
import { ref } from "vue";
import NavbarUser from "@/Components/NavbarUser.vue";
import FooterUser from "@/Components/FooterUser.vue";
// export default {};
</script>

<style>
</style>
