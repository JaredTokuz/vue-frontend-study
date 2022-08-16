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
          ></ListBoxWrapper>
        </div>
        <!-- View -->
        <div
          class="col-span-2 flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
        >
          <ApexChart :options="chartOptions"></ApexChart>
        </div>
        <!-- smart contract buy or sell TODO -->
        <div
          class="col-span-1 auto-cols-min flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
        >
          <TokenTradeForm></TokenTradeForm>
        </div>
      </div>
    </template>
  </TitleGrid>
</template>

<script setup lang="ts">
import { tokenTrades } from "@/datasets";
import {
  ChartOptionsLineTokenTrades,
  tokenTradeEquations,
} from "@/token-trade";
import { computed, ref } from "vue";
import ApexChart from "./reusable/ApexChart.vue";
import ListBoxWrapper from "./reusable/headless/ListBoxWrapper.vue";
import TitleGrid from "./reusable/TitleGrid.vue";
import TokenTradeForm from "./TokenTradeForm.vue";

const dataTokenTrades = ref(tokenTrades);
/** initialize the data , axis created once here*/
const dataStaging = computed(() => {
  return ChartOptionsLineTokenTrades(dataTokenTrades.value);
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
