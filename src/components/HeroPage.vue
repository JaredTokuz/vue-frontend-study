<template>
  <HeroLanding :config="heroTableConfig">
    <template v-slot:feat>
      <SummaryTable :section="sect">
        <template v-slot:caption>
          <p class="text-xs leading-5 text-gray-500">
            Last transacted on
            <span class="text-gray-900"> {{ "2/2/2022" }} </span>, at nonce
            <a href="#" class="font-medium text-gray-900 hover:underline">
              {{ latestTokenState.last_nonce }}</a
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
import SummaryTable, { type Section } from "./reusable/SummaryTable.vue";
import { latestTokenState } from "@/datasets";
import { queryLatestState } from "@/urql/client";

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

const { data } = await queryLatestState();
if (!data) throw "";

const sect: Section[] = [
  {
    title: "Price",
    data: [
      {
        value: data.price,
        unit: "wei",
      },
    ],
  },
  {
    title: "Totals",
    data: [
      {
        value: data.weiIn,
        unit: "wei spent",
      },
      {
        value: data.weiOut,
        unit: "wei withdrawn",
      },
      {
        value: data.noAddress,
        unit: "addresses",
      },
      {
        value: data.noTrades,
        unit: "trades",
      },
    ],
  },
];
</script>
