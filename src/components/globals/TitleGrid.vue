<template>
  <div class="bg-gray-50 pt-12 sm:pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="mt-10 pb-12 bg-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50" />
        <div class="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mx-auto">
            <slot name="container"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ title: string; description: string }>();
</script>
