<template>
  <div class="pb-6">
    <apexchart :options="options" :series="options.series"></apexchart>
  </div>
</template>

<script setup lang="ts">
import type { ApexOptions } from "apexcharts";
const props = defineProps<{ options: ApexOptions }>();
</script>
