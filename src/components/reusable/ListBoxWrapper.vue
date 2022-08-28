<!-- eslint-disable vue/no-mutating-props -->
<template>
  <Listbox as="div" v-model="value">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      Graph to view
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton
        class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <span class="block truncate">{{ value?.name }} </span>

        <span class="absolute inset-y-0 right-0 flex pr-2 pointer-events-none">
          <ChevronDoubleDownIcon
            class="h-8 w-5 pt-2 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="item in listNames"
            :key="item.id"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                'cursor-default select-none relative py-2 pl-8 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'block truncate',
                ]"
              >
                {{ item.name }}
              </span>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 left-0 flex items-center pl-1.5',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronDoubleDownIcon } from "@heroicons/vue/solid";
import { computed } from "vue";

const props = defineProps<{
  listNames: {
    id: number;
    name: string;
  }[];
  modelValue: { name: string };
}>();

const e = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    e("update:modelValue", value);
  },
});
</script>
