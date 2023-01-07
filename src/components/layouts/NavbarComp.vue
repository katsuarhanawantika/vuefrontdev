<script setup>
import Logo from "@/components/layouts/NavbarItems/Logo.vue";
import NavigationLinks from "@/components/layouts/NavbarItems/NavigationLinks.vue";
import AuthButton from "@/components/layouts/Authentication/AuthButton.vue";
// import UserInfo from "@/components/layouts/NavbarItems/UserInfo.vue";
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <Logo />
      <NavigationLinks />
      <!-- <UserInfo /> -->
      <AuthButton />
    </div>
  </nav>
</template>

<style></style>
