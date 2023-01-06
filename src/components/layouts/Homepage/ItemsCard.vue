
<script setup>
defineProps({
    nama_items: String,
    caption_items: String,
    gambar_items:String
})
</script>

<template>
    <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
            <a href="details.html">
                <div class="m-4 overflow-hidden rounded-xl">
                    <img alt="Placeholder" class="block w-full h-auto" :src="'src/assets/img/'+gambar_items" />
                </div>
            </a>

            <header class="px-4 mb-4 leading-tight">
                <h1 class="text-lg">
                    <a class="font-semibold text-black no-underline hover:underline" href="#">
                        {{nama_items}}
                    </a>
                </h1>
                <span class="block text-sm font-light text-gray-500 no-underline">
                   {{caption_items}}
                </span>
            </header>
        </div>
    </div>

</template>


<style>

</style>