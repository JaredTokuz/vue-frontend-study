<template>
  <p
    class="mt-6 mb-2 text-center text-sm text-white uppercase tracking-wide font-semibold sm:mt-10"
  >
    Summary
  </p>
  <div
    class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
  >
    <div class="px-4 py-8 sm:px-10">
      <div class="grid grid-cols-2 mt-1 gap-3">
        <p class="text-sm font-medium text-gray-700">
          {{ dataStaging.first.title }}
        </p>
        <div
          class="grid grid-cols-1 gap-2"
          v-for="d in dataStaging.first.data"
          :key="d.unit"
        >
          <div>
            {{ d.value }} <span class="text-sm">{{ d.unit }}</span>
          </div>
        </div>
      </div>

      <template v-for="block in dataStaging.rest" :key="block.title">
        <div class="mt-6 relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500"> </span>
          </div>
        </div>

        <div class="grid grid-cols-2 mt-6 gap-3">
          <p class="text-sm font-medium text-gray-700">{{ block.title }}</p>
          <div class="grid grid-cols-1 gap-2">
            <div v-for="d in block.data" :key="d.unit">
              {{ d.value }}
              <span class="text-sm text-gray-700">{{ d.unit }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
      <slot name="caption"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Section } from "@/utils/sections";
import { computed } from "vue";

const props = defineProps<{ section: Section[] }>();

const dataStaging = computed<{ first: Section; rest: Section[] }>(() => {
  return {
    first: props.section[0],
    rest: props.section.slice(1),
  };
});
</script>
