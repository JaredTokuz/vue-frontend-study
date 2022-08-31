<template>
  <HeroPage />
  <TokenTrade />
  <UserProfile />
</template>

<script setup lang="ts">
import HeroPage from "./components/TokenTrade/HeroPage.vue";
import TokenTrade from "./components/TokenTrade/TokenTrade.vue";
import UserProfile from "./components/TokenTrade/UserProfile.vue";
import Web3 from "web3";
import { createClient, provideClient } from "@urql/vue";
import { onMounted } from "vue";

const client = createClient({
  url: "http://0.0.0.0:8000/subgraphs/name/jaredtokuz/bondingcurve",
});
provideClient(client);

onMounted(() => {
  //@ts-expect-error any
  window.ethereum.on("accountsChanged", (accounts) => {
    console.log("New account detected: ", accounts);
    window.location.reload();
  });
  //@ts-expect-error any
  window.ethereum.on("chainChanged", (chainId) => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    console.log("New chain detected: ", chainId);
    window.location.reload();
  });
});
</script>
