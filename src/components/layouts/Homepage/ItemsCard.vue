<script setup>
import { RouterLink } from "vue-router";

defineProps({
  id: Number,
  nama_items: String,
  caption_items: String,
  gambar_items: String,
});
</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <RouterLink :to="'/details/' + id">
        <div class="m-4 overflow-hidden rounded-xl">
          <img alt="Placeholder" class="block w-full h-auto" :src="gambar_items" />
        </div>
      </RouterLink>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <RouterLink
            class="font-semibold text-black no-underline hover:underline"
            :to="'/details/' + id"
          >
            {{ nama_items }}
          </RouterLink>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline">
          {{ caption_items }}
        </span>
      </header>
    </div>
  </div>
</template>

<style></style>
