import { useQuery } from "@urql/vue";
import { computed, watchEffect } from "vue";
import type { LatestTokenState } from "../schemas.interface";

export const latestTokenStateQuery = `
    query {
        latestTokenState(id: "latest") {
            id
            lastTimestamp
            lastBlock
            price
            weiSpent
            weiWithdrawn
            noAddress
            noTrades
        }
    }
`;

export function QueryLatestTokenState() {
  const results = useQuery({
    query: latestTokenStateQuery,
  });

  /** log every render */
  // watchEffect(() => {
  //   console.log("results", results);
  //   console.log("data", results.data.value);
  //   console.log("error", results.error.value);
  //   console.log("fetching", results.fetching.value);
  // });

  const latestTokenState = computed<LatestTokenState | undefined>(() => {
    return results.data.value?.latestTokenState;
  });
  return { latestTokenState };
}
