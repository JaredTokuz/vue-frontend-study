<script setup lang="ts">
import HeroPage from "./components/TokenTrade/HeroPage.vue";
import TokenTrade from "./components/TokenTrade/TokenTrade.vue";
import UserProfile from "./components/TokenTrade/UserProfile.vue";
import { createClient, provideClient } from "@urql/vue";
import { onMounted } from "vue";
import connect from "@/composables/wallets";

const client = createClient({
  url: "http://0.0.0.0:8000/subgraphs/name/jaredtokuz/bondingcurve",
});
provideClient(client);

const { autoConnect } = connect();

onMounted(async () => {
  await autoConnect();
});
</script>

<template>
  <HeroPage />
  <TokenTrade />
  <UserProfile />
</template>
