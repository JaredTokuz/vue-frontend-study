<template>
  <TitleGrid :title="Info.title.value" :description="Info.description.value">
    <template v-slot:container>
      <div class="rounded-lg bg-white shadow-lg xl:grid xl:grid-cols-4">
        <!-- View -->
        <div
          class="col-span-3 flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
        >
          <ApexChart :options="chartOptions" />
        </div>
        <!-- The models the data to be viewed -->
        <div
          class="col-span-1 flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
        >
          <ListBoxWrapper
            v-model="selectedEquation"
            :list-names="addressProfileViews"
          />
        </div>
      </div>
    </template>
  </TitleGrid>
</template>

<script setup lang="ts">
import {
  ChartOptionsPieAddressProfile,
  addressProfileViews,
} from "@/utils/address-profile";
import { computed, ref } from "vue";
import ApexChart from "@/components/globals/ApexChart.vue";
import ListBoxWrapper from "@/components/globals/ListBoxWrapper.vue";
import TitleGrid from "@/components/globals/TitleGrid.vue";
import { QueryAddressProfiles } from "@/composables/address-profile-query";

const { addressProfiles } = QueryAddressProfiles();
/** initialize the data , axis created once here*/
const dataStaging = computed(() => {
  return ChartOptionsPieAddressProfile(addressProfiles.value || []);
});

const selectedEquation = ref(addressProfileViews[1]);

/** whenever the list box select has changed */
const chartOptions = computed(() => {
  /**
   * object map of listbox selection to functions
   * build the series data [] using mapped function & name is a map value
   * & xaxis.categories
   */
  return dataStaging.value.calculateChartOptions(selectedEquation.value);
});

const Info = {
  title: ref("Trusted by developers from over 80 planets"),
  description: ref(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium."
  ),
};
</script>
