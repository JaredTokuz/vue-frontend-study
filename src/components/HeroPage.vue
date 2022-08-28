<template>
  <HeroLanding :config="heroTableConfig">
    <template v-slot:feat>
      <SummaryTable :section="sect">
        <template v-slot:caption>
          <p class="text-xs leading-5 text-gray-500">
            Last transacted on
            <span class="text-gray-900"> {{ footer.lastTimestamp }} </span>, at
            block
            <a href="#" class="font-medium text-gray-900 hover:underline">
              {{ footer.lastBlock }}</a
            >.
          </p>
        </template>
      </SummaryTable>
    </template>
  </HeroLanding>
</template>

<script setup lang="ts">
import HeroLanding from "./reusable/HeroLanding.vue";
import type { HeroLandConfig } from "./reusable/HeroLanding.vue";
import SummaryTable from "./reusable/SummaryTable.vue";
import { computed } from "vue";
import {
  createDataEntry,
  createSection,
  type Section,
} from "./reusable/utils/sections";
import { QueryLatestTokenState } from "./TokenTrade/composables/latest-token-query";

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

const { latestTokenState } = QueryLatestTokenState();

const sect = computed<Section[]>(() => {
  return [
    createSection("Price", [
      createDataEntry(latestTokenState.value?.price || "-", "wei"),
    ]),
    createSection("Totals", [
      createDataEntry(latestTokenState.value?.weiSpent || "-", "wei spent"),
      createDataEntry(
        latestTokenState.value?.weiWithdrawn || "-",
        "wei withdrawn"
      ),
      createDataEntry(latestTokenState.value?.noAddress || "-", "addresses"),
      createDataEntry(latestTokenState.value?.noTrades || "-", "trades"),
    ]),
  ];
});

const footer = computed(() => {
  const ts = latestTokenState.value?.lastTimestamp
    ? new Date(+latestTokenState.value?.lastTimestamp * 1000)
    : "-";
  return {
    lastTimestamp: ts,
    lastBlock: latestTokenState.value?.lastBlock || "-",
  };
});
</script>
