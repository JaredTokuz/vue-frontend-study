import {
  queryAddressProfile,
  queryLatestState,
  queryTokenTrades,
} from "@/urql/client";
import { defineStore } from "pinia";

export const useBondingCurveStore = defineStore("latestState", async () => {
  return { queryLatestState, queryTokenTrades, queryAddressProfile };
});
