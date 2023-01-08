<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
// import router from "../../router";

// const defaultImage = ref('gallery-2.png');
// const galleries = ref([
//   { id: 1, gambar: "gallery-2.png" },
//   { id: 2, gambar: "gallery-3.png" },
//   { id: 3, gambar: "gallery-4.png" },
//   { id: 4, gambar: "gallery-5.png" },
// ]);
// jika pakaifungsi

// @click="balabalabrubah(gallery.gambar)"
// function balabalabrubah(image) {
//   this.defaultImage = image;
// }

defineProps({
  defaultImage: String,
  galleriess: Array,
});
</script>

<template>
  <section id="gallery">
    <img alt="" :src="defaultImage" class="w-full mt-6 rounded-2xl" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <template v-for="gallery in galleriess">
        <div
          @click="defaultImage = gallery.url"
          class="overflow-hidden cursor-pointer rounded-2xl"
          :class="{ 'ring-2 ring-indigo-500': defaultImage == gallery.url }"
        >
          <img :src="gallery.url" class="w-full" alt="" />
        </div>
      </template>
    </div>
  </section>
</template>
