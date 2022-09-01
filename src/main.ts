import { createApp } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./index.css";
import type { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}

const pinia = createPinia();
const app = createApp(App, {});
app.use(VueApexCharts);
app.use(pinia);

app.mount("#app");
