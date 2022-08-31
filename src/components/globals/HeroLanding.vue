<template>
  <div class="relative bg-gray-800 overflow-hidden">
    <slot name="background">
      <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        <svg
          class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width="364"
          height="384"
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="364"
            height="384"
            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
          />
        </svg>
      </div>
    </slot>

    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span class="sr-only">Workflow</span>
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                  class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-10 md:flex md:ml-10">
              <a
                v-for="item in config.navigation"
                :key="item.name"
                :href="item.href"
                class="font-medium text-white hover:text-gray-300"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="hidden md:flex"></div>
        </nav>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div></div>
                <div class="-mr-2">
                  <PopoverButton
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a
                  v-for="item in config.navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <!-- hero links -->
                <a
                  :href="config.links.secondary"
                  class="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span
                    class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full"
                    >{{ config.links.primary }}</span
                  >
                  <span class="ml-4 text-sm">{{ config.links.secondary }}</span>
                  <ChevronRightIcon
                    class="ml-2 w-5 h-5 text-gray-500"
                    aria-hidden="true"
                  />
                </a>
                <h1
                  class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                >
                  <span class="md:block">{{ titleSplit[0] }}</span>
                  {{ " " }}
                  <span class="text-indigo-400 md:block">{{
                    titleSplit[1]
                  }}</span>
                </h1>
                <p
                  class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  {{ config.description }}
                </p>
              </div>
            </div>

            <div class="mt-8 sm:mt-16 lg:mt-0 lg:col-span-6">
              <!-- slot: table or form or video/image -->
              <slot name="feat"></slot>
              <!-- <SummaryTable></SummaryTable> -->
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { ChevronRightIcon } from "@heroicons/vue/solid";
import { computed } from "vue";

export interface HeroLandConfig {
  title: string;
  description: string;
  links: {
    primary: string;
    secondary: string;
    href: string;
  };
  navigation: { name: string; href: string }[];
}
const props = defineProps<{ config: HeroLandConfig }>();

const titleSplit = computed(() => {
  const splitByMiddleSpace = (title: string): [string, string] => {
    const findSpace = (sentence: string, left: number, right: number) => {
      while (0 < left && right < sentence.length - 1) {
        if (sentence[left] == " ") return left;
        if (sentence[right] == " ") return right;
        left--;
        right++;
      }
    };
    const left = Math.floor(title.length / 2);
    const right = left + 1;

    const split = findSpace(title, left, right) || title.length;

    const primary = title.slice(0, split);
    const secondary = title.slice(split + 1, title.length);

    return [primary, secondary];
  };

  return splitByMiddleSpace(props.config.title);
});
</script>
