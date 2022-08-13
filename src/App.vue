<template>
  <HeroPage></HeroPage>

  <!-- original one -->
  <div class="bg-gray-50 pt-12 sm:pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Trusted by developers from over 80 planets
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          repellat laudantium.
        </p>
      </div>
    </div>
    <div class="mt-10 pb-12 bg-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div
                class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
              >
                <dt
                  class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                >
                  Pepperoni
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                  100%
                </dd>
              </div>
              <div
                class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
              >
                <dt
                  class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                >
                  Delivery
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                  24/7
                </dd>
              </div>
              <div
                class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
              >
                <dt
                  class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                >
                  Calories
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                  100k
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- second mess around one -->
  <div class="bg-gray-50 pt-12 sm:pt-16">
    <div class="mt-10 pb-12 bg-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50" />
        <div class="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mx-auto">
            <dl class="rounded-lg bg-white shadow-lg lg:grid xl:grid-cols-8">
              <!-- The list box -->
              <div
                class="col-span-2 flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
              >
                <ListBoxWrapper
                  v-model="selectedEquation"
                  :list-names="tokenTradeEquations"
                ></ListBoxWrapper>
              </div>
              <!-- Chart -->
              <div
                class="col-span-6 flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
              >
                <ApexChart :options="chartOptions"></ApexChart>
              </div>
              <!-- smart contract buy or sell TODO -->
              <div
                class="auto-cols-min flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
              >
                <div class="grid grid-cols-2 gap-4">
                  <div>01</div>
                  <div>02</div>
                  <div>03</div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ApexChart :options="chartOptions"></ApexChart>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import HeroPage from "./components/HeroPage.vue";
import ApexChart from "./components/ApexChart.vue";
import { tokenTrades, addressProfiles, latestTokenState } from "./datasets";
import { ChartOptionsTokenTrades, tokenTradeEquations } from "./token-trade";

// import {
//   Listbox,
//   ListboxButton,
//   ListboxOptions,
//   ListboxOption,
// } from "@headlessui/vue";
// import { CheckIcon } from "@heroicons/vue/solid";
import ListBoxWrapper from "./components/headless/ListBoxWrapper.vue";
console.log("setup");
const selectedEquation = ref(tokenTradeEquations[0]);
const dataTokenTrades = ref(tokenTrades);
console.log("refs set");
/** initialize the data , axis created once here*/
const dataStaging = computed(() => {
  console.log("staging");
  return ChartOptionsTokenTrades(dataTokenTrades.value);
});

console.log("prettier format test");

/** whenever the list box select has changed */
const chartOptions = computed(() => {
  /**
   * object map of listbox selection to functions
   * build the series data [] using mapped function & name is a map value
   * & xaxis.categories
   */
  console.log("transform");
  return dataStaging.value.calculateChartOptions(selectedEquation.value);
});
</script>
