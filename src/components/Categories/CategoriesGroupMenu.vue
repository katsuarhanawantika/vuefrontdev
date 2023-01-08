<script setup>
import TopCategories from "@/components/layouts/Homepage/TopCategoriesComp.vue";
import axios from "axios";
import { onMounted } from "vue";
import { ref } from "vue";

const categories = ref([]);

async function getCategoriesData() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.buildwithangga.id/api/categories"
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

//
<script>
export default {
  data: () => ({ selected: "" }),
  methods: {
    switchSelect(event) {
      alert(this.selected);
      this.selected = event.target.value;
    },
  },
};
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
    <h2 class="mb-4 text-xl font-bold md:mb-0 md:text-lg">All Categories</h2>
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

    <h1>testAPI</h1>

    <br />

    <p>Your choice is: {{ selected }}</p>

    <select name="catrogi" id="catrogi" v-model="selected" @change="switchSelect">
      <option disabled value="">Please select one</option>
      <option
        :value="pilihankategory.name"
        v-for="pilihankategory in categories"
        :key="pilihankategory.id"
      >
        {{ pilihankategory.name }} / {{ pilihankategory.products_count }}
      </option>
    </select>
    <br />
    <br />
  </div>
</template>

<style scoped>
#catrogi {
  padding: 9px;
  width: 20%;
}
</style>
