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

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css);

div {
  font-family: Roboto;
}
</style>
