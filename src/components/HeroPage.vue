<template>
  <HeroLanding :config="heroTableConfig">
    <template v-slot:feat>
      <SummaryTable :section="sect">
        <template v-slot:caption>
          <p class="text-xs leading-5 text-gray-500">
            Last transacted on
            <span class="text-gray-900"> {{ "2/2/2022" }} </span>, at nonce
            <a href="#" class="font-medium text-gray-900 hover:underline">
              {{ latestTokenState.lastNonce }}</a
            >.
          </p>
        </template>
      </SummaryTable>
    </template>
  </HeroLanding>
</template>

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import HeroLanding from "./reusable/HeroLanding.vue";
import type { HeroLandConfig } from "./reusable/HeroLanding.vue";
import SummaryTable, { type Section } from "./reusable/SummaryTable.vue";
import { latestTokenState } from "@/datasets";
import { latestTokenStateQuery } from "@/urql/queries";
import { computed, reactive, ref } from "vue";

const heroTableConfig: HeroLandConfig = {
  title: "Interactive Graph Dapp deployed on Rinkeby",
  description:
    "This project tracks all trading activity of a bonding curve smart contract. Made with hardhat, solidity, the graph, urql, vue and apexcharts. The application code base was hosted on (decentralized github). This app was served to you using IPFS. ",
  links: {
    primary: "curious?",
    secondary: "see the src 👀",
    href: "#",
  },
  navigation: [
    { name: "Resume", href: "#" },
    { name: "Social", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Github", href: "#" },
  ],
};

const result = useQuery({
  query: latestTokenStateQuery,
});

const sect = computed<Section[]>(() => {
  console.log(result);
  console.log("data", result.data.value);
  console.log("error", result.error.value);
  console.log("fetching", result.fetching.value);
  return [
    {
      title: "Price",
      data: [
        {
          value: result.data.value.price,
          unit: "wei",
        },
      ],
    },
    {
      title: "Totals",
      data: [
        {
          value: result.data.value.weiIn,
          unit: "wei spent",
        },
        {
          value: result.data.value.weiOut,
          unit: "wei withdrawn",
        },
        {
          value: result.data.value.noAddress,
          unit: "addresses",
        },
        {
          value: result.data.value.noTrades,
          unit: "trades",
        },
      ],
    },
  ];
});

// const _sect: Section[] = [
//   {
//     title: "Price",
//     data: [
//       {
//         value: result.data.value.price,
//         unit: "wei",
//       },
//     ],
//   },
//   {
//     title: "Totals",
//     data: [
//       {
//         value: result.data.value.weiIn,
//         unit: "wei spent",
//       },
//       {
//         value: result.data.value.weiOut,
//         unit: "wei withdrawn",
//       },
//       {
//         value: result.data.value.noAddress,
//         unit: "addresses",
//       },
//       {
//         value: result.data.value.noTrades,
//         unit: "trades",
//       },
//     ],
//   },
// ];
</script>
