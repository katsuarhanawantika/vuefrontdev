<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavbarComp from '@/components/layouts/NavbarComp.vue'

components: {
  NavbarComp
}

</script>

<template>

  <div>

    <NavbarComp/>
    <RouterView />
  </div>

</template>

<style>
 
</style>
