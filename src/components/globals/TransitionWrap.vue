<template>
  <TransitionRoot
    appear
    :show="isShowing"
    as="template"
    enter="transform transition delay-75 duration-100"
    enter-from="opacity-0 scale-50"
    enter-to="opacity-0 scale-95"
    leave="transform duration-75 transition ease-in-out"
    leave-from="opacity-100 rotate-0 scale-100 "
    leave-to="opacity-0 scale-95 "
  >
    <slot name="content"></slot>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot } from "@headlessui/vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  isShowing: boolean;
}>();
</script>
