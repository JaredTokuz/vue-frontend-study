<template>
  <HeroPage />
  <TokenTrade />
  <UserProfile />
</template>

<script setup lang="ts">
import HeroPage from "./components/HeroPage.vue";
import TokenTrade from "./components/TokenTrade.vue";
import UserProfile from "./components/UserProfile.vue";

import { createClient, provideClient } from "@urql/vue";

const client = createClient({
  url: "http://0.0.0.0:8000/subgraphs/name/jaredtokuz/bondingcurve",
});
provideClient(client);
</script>
