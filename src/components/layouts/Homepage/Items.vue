<script setup>
import ItemsCard from "@/components/layouts/Homepage/ItemsCard.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

// input data manual
// const itemss = ref([
//   {
//     id: 1,
//     nama_items: "Mobile UI Kit",
//     caption_items: "Mobile UI Kit",
//     gambar_items: "items-1.jpg",
//   },
//   {
//     id: 2,
//     nama_items: "Online Doctor Consultation",
//     caption_items: "Website UI Kit",
//     gambar_items: "items-2.jpg",
//   },
//   {
//     id: 3,
//     nama_items: "Banking Crypto",
//     caption_items: "Mobile UI Kit",
//     gambar_items: "items-3.jpg",
//   },
// ]);

const itemss = ref([]);

async function getItemsData() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.buildwithangga.id/api/products"
    );
    itemss.value = response.data.data.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getItemsData();
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <ItemsCard
        v-for="items in itemss"
        :key="items.id"
        :id="items.id"
        :nama_items="items.name"
        :caption_items="items.subtitle"
        :gambar_items="items.thumbnails"
      />
    </div>
  </div>
</template>

<style></style>
