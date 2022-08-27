import {
  queryAddressProfile,
  queryLatestState,
  queryTokenTrades,
} from "@/urql_dep/client";
import { defineStore } from "pinia";

export const useBondingCurveStore = defineStore("latestState", async () => {
  return { queryLatestState, queryTokenTrades, queryAddressProfile };
});
