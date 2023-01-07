
<script setup>
 
import { RouterLink } from 'vue-router' 
import LoginComponent from '@/components/layouts/Authentication/LoginComponent.vue'


</script>


<template>
  <div class="relative overflow-hidden bg-white">
      <div class="mx-auto max-w-7xl">
        <div
          class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0"
        >
          <div class="w-full p-5 mx-auto sm:max-w-md">
            <h2 class="mb-20 text-5xl font-bold text-center">Welcome Back</h2>
            

            <LoginComponent/>

          </div>
          
        </div>
      </div>
    </div>

</template>
