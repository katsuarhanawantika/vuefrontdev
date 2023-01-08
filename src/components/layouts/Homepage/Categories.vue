<script setup>
import TopCategories from "@/components/layouts/Homepage/TopCategoriesComp.vue";
import axios from "axios";
import { onMounted } from "vue";
import { ref } from "vue";

// manual input data
// const categories = ref([
//   {
//     id: 1,
//     ncategories: "Mobile UI Kits",
//     jumlah: "731 items",
//     image: "categories-1.jpg",
//   },
//   { id: 2, ncategories: "Icon Set", jumlah: "83,559, items", image: "categories-3.jpg" },
//   { id: 3, ncategories: "Font", jumlah: "657 items", image: "categories-2.jpg" },
//   {
//     id: 4,
//     ncategories: "Website UI Kit",
//     jumlah: "4,500 items",
//     image: "categories-4.jpg",
//   },
// ]);

// API
const categories = ref([]);

async function getCategoriesData() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.buildwithangga.id/api/categories?limit=3"
    );
    categories.value = response.data.data.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getCategoriesData();
});

// tuAPI
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
    <h2 class="mb-4 text-xl font-bold md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <TopCategories
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :ncategories="category.name"
        :jumlah="category.products_count"
        :image="category.thumbnails"
      />
    </div>
  </div>
</template>

<style></style>
