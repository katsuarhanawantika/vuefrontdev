<script setup>
defineProps({
  id: Number,
  ncategories: String,
  jumlah: Number,
  image: String,
});
</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <RouterLink :to="'/itemscat/' + id">
        <div class="m-4 overflow-hidden rounded-xl">
          <img :alt="image" class="block w-full h-auto" :src="image" />
        </div>
      </RouterLink>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <RouterLink
            :to="'/itemscat/' + id"
            class="font-semibold text-black no-underline hover:underline"
          >
            {{ ncategories }}
          </RouterLink>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline">
          {{ jumlah }}
        </span>
      </header>
    </div>
  </div>
</template>

<style></style>
