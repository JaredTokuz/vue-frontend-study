<template>
  <div class="pb-6">
    <apexchart
      width="700"
      height="500"
      :options="options"
      :series="options.series"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
import type { ApexOptions } from "apexcharts";
const props = defineProps<{ options: ApexOptions }>();
</script>
