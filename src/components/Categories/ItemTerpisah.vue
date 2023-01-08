<script setup>
import ItemsCard from "@/components/layouts/Homepage/ItemsCard.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const itemss = ref([]);
const route = useRoute();
const namaKategori = ref([]);
async function getItemsData() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.buildwithangga.id/api/categories?id=" + route.params.id
    );
    itemss.value = response.data.data.products;
    namaKategori.value = response.data.data;
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
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ namaKategori.name }}</h2>
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
