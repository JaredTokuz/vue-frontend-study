<template>
  <TitleGrid
    :title="BondingTokenController.title.value"
    :description="BondingTokenController.description.value"
  >
    <template v-slot:container>
      <div class="rounded-lg bg-white shadow-lg xl:grid xl:grid-cols-4">
        <!-- The models the data to be viewed -->
        <div
          class="col-span-1 flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
        >
          <ListBoxWrapper
            v-model="selectedEquation"
            :list-names="tokenTradeEquations"
          />
        </div>
        <!-- View -->
        <div
          class="col-span-2 flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
        >
          <ApexChart :options="chartOptions" />
        </div>
        <!-- smart contract buy or sell TODO -->
        <div
          class="col-span-1 flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
        >
          <ContainerMap />
        </div>
      </div>
    </template>
  </TitleGrid>
</template>

<script setup lang="ts">
import {
  ChartOptionsLineTokenTrades,
  tokenTradeEquations,
} from "@/utils/token-trade";
import { computed, ref } from "vue";
import ApexChart from "@/components/globals/ApexChart.vue";
import ListBoxWrapper from "@/components/globals/ListBoxWrapper.vue";
import TitleGrid from "@/components/globals/TitleGrid.vue";
import { QueryTokenTrades } from "@/composables/token-trade-query";
import ContainerMap from "./ContainerMap.vue";

const { tokenTrades } = QueryTokenTrades();
/** initialize the data , axis created once here*/
const dataStaging = computed(() => {
  return ChartOptionsLineTokenTrades(tokenTrades.value || []);
});

const selectedEquation = ref(tokenTradeEquations[0]);

/** whenever the list box select has changed */
const chartOptions = computed(() => {
  /**
   * object map of listbox selection to functions
   * build the series data [] using mapped function & name is a map value
   * & xaxis.categories
   */
  return dataStaging.value.calculateChartOptions(selectedEquation.value);
});

const BondingTokenController = {
  title: ref("Trusted by developers from over 80 planets"),
  description: ref(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium."
  ),
};
</script>
