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
        <p class="text-sm font-medium text-gray-700">Price</p>
        <div class="font-medium">{{ 96 }} <span class="text-sm">wei</span></div>
      </div>

      <!-- divider -->
      <div class="mt-6 relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300" />
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500"> </span>
        </div>
      </div>

      <div class="mt-6">
        <p class="text-sm font-medium text-gray-700">Totals</p>
        <div class="grid grid-cols-2 gap-2">
          <div></div>
          <div class="">
            {{ 960 }}
            <span class="text-sm text-gray-700">wei spent</span>
          </div>
          <div></div>
          <div class="">
            {{ 840 }}
            <span class="text-sm text-gray-700">wei withdrawn</span>
          </div>
          <div></div>
          <div class="">
            {{ 9 }}
            <span class="text-sm text-gray-700">addresses</span>
          </div>
          <div></div>
          <div class="">
            {{ 37 }}
            <span class="text-sm text-gray-700">trades</span>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
      <p class="text-xs leading-5 text-gray-500">
        Last transacted on
        <span class="text-gray-900"> {{ "2/2/2022" }} </span>, at nonce
        <a href="#" class="font-medium text-gray-900 hover:underline">
          {{ 2938472 }}</a
        >.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
