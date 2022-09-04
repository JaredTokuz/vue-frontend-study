<script setup lang="ts">
import HeroPage from "./components/TokenTrade/HeroPage.vue";
import TokenTrade from "./components/TokenTrade/TokenTrade.vue";
import UserProfile from "./components/TokenTrade/UserProfile.vue";
import Web3 from "web3";
import { createClient, provideClient } from "@urql/vue";
import { onMounted } from "vue";
import connect from "@/composables/wallets";

const client = createClient({
  url: "http://0.0.0.0:8000/subgraphs/name/jaredtokuz/bondingcurve",
});
provideClient(client);

const { autoConnect } = connect();

onMounted(async () => {
  console.log("mounted start");
  console.log("walletconnect..." + localStorage.getItem("walletconnect"));
  await autoConnect();
  console.log("mounted end");
});
</script>

<template>
  <!-- <HeroPage /> -->
  <TokenTrade />
  <UserProfile />
</template>
