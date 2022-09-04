<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <!-- Price Feed Here -->
    <div class="grid grid-cols-2 md:grid-cols-1">
      <div class="col-span-1 my-auto pb-2">
        <div class="grid grid-cols-1 bg-white pr-4">
          <div class="text-center px-4 pr-4 py-2">
            <div
              :class="[
                '',
                'inline-flex items-baseline py-0.5 text-base font-medium text-gray-700 md:mt-2 lg:mt-0',
              ]"
            >
              Price in Wei
            </div>
            <div
              class="flex-shrink-0 mx-auto h-5 w-5 text-xl"
              aria-hidden="true"
            >
              {{ price }}
            </div>
          </div>
        </div>
      </div>
      <div id="right-col" class="col-span-1">
        <div
          id="button-container"
          class="grid grid-cols-1 rounded-lg bg-white overflow-hidden md:grid-cols-2"
        >
          <div class="cursor-pointer" @click="$emit('transact', 'buy')">
            <div
              class="text-center px-4 pr-8 py-2 bg-green-100 shadow hover:bg-green-200 hover:shadow-md active:bg-green-300"
            >
              <div
                :class="[
                  'text-green-800',
                  'inline-flex items-baseline py-0.5 rounded-full text-2xl font-medium md:mt-2 lg:mt-0',
                ]"
              >
                {{ "Buy" }}
                <ArrowSmUpIcon
                  class="ml-2 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div class="cursor-pointer" @click="$emit('transact', 'sell')">
            <div
              class="text-center pl-2 py-2.5 bg-red-100 shadow hover:bg-red-200 hover:shadow-md active:bg-red-300"
            >
              <div
                :class="[
                  ' text-red-800',
                  'inline-flex items-baseline px-2.5 rounded-full text-2xl font-medium md:mt-2 lg:mt-0',
                ]"
              >
                <ArrowSmDownIcon
                  class="mr-2 flex-shrink-0 self-center h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
                {{ "Sell" }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/vue/solid";
import { computed, ref } from "vue";
import { QueryLatestTokenState } from "@/composables/latest-token-query";

const props = defineProps<{
  price: string;
}>();

const emit = defineEmits<{
  (e: "transact", id: "buy" | "sell"): void;
}>();
</script>
