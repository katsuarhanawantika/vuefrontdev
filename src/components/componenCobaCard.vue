<script setup>
import { ref } from "vue";

const abc = ref("ini adalah text awal");
const cdef = ref([
  { id: 0, isi: "ini adalah text awal" },
  { id: 1, isi: "ini adalah text tengah" },
  { id: 2, isi: "ini adalah text akhir" },
  { id: 3, isi: "ini adalah text the end" },
]);
</script>

<template>
  <div class="text-center">
    <h1 class="text-2xl text-center font-bold mt-4 mb-6 text-green-400">{{ abc }}</h1>

    <div v-for="texteran in cdef" :key="texteran.id" class="inline ml-4">
      <a
        @click="abc = texteran.isi"
        href="#"
        class="shadow-lg py-3 px-5 rounded-lg bg-green-700 text-white"
        :class="{ 'ring-2 ring-yellow-500': abc == texteran.isi }"
      >
        {{ texteran.isi }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
