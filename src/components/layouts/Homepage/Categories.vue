<script setup>
import TopCategories from "@/components/layouts/Homepage/TopCategoriesComp.vue";
import { ref } from "vue";

const categories = ref([
  {
    id: 1,
    ncategories: "Mobile UI Kits",
    jumlah: "731 items",
    image: "categories-1.jpg",
  },
  { id: 2, ncategories: "Icon Set", jumlah: "83,559, items", image: "categories-3.jpg" },
  { id: 3, ncategories: "Font", jumlah: "657 items", image: "categories-2.jpg" },
  {
    id: 4,
    ncategories: "Website UI Kit",
    jumlah: "4,500 items",
    image: "categories-4.jpg",
  },
]);
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <TopCategories
        v-for="category in categories"
        :key="category.id"
        :ncategories="category.ncategories"
        :jumlah="category.jumlah"
        :image="category.image"
      />
    </div>
  </div>
</template>

<style></style>
