<template>
  <div class="pb-6">
    <apexchart :options="options" :series="options.series"></apexchart>
  </div>
</template>

<script setup lang="ts">
import type { ApexOptions } from "apexcharts";
import { watchEffect } from "vue";
const props = defineProps<{ options: ApexOptions }>();

// watchEffect(() => {
//   console.log("apex charts props " + props.options.chart?.type, props.options);
// });
</script>
