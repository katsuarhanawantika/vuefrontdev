<script setup>
import { onMounted, computed } from "vue";
// pinia
import { mamamiaBoss } from "@/stores/mamamia";
// pinia

import Logo from "@/components/layouts/NavbarItems/Logo.vue";
import NavigationLinks from "@/components/layouts/NavbarItems/NavigationLinks.vue";
import AuthButton from "@/components/layouts/Authentication/AuthButton.vue";
import UserInfo from "@/components/layouts/NavbarItems/UserInfo.vue";

// pinia
const mamamiA = mamamiaBoss();
const user = computed(() => mamamiA.getUser);
const isLoggedIn = computed(() => mamamiA.isLoggedIn);

onMounted(() => {
  mamamiA.fetchUser();
});

// pinia
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <Logo />
      <NavigationLinks />
      <UserInfo v-if="isLoggedIn" :userDataProfile="user.data" />
      <AuthButton v-else />
    </div>
  </nav>
</template>

<style></style>
