import type { TokenTrades } from "@/components/TokenTrade/schemas.interface";
import { useQuery } from "@urql/vue";
import { computed, watchEffect } from "vue";

export const tokenTradeQuery = `
    query {
        tokenTrades(orderBy: timestamp, orderDirection: asc) {
            id
            block
            erc20Amount
            ethAmount
            timestamp
            tradeType
            address
        }
    }
`;

export function QueryTokenTrades() {
  const results = useQuery({
    query: tokenTradeQuery,
  });

  /** log every render */
  // watchEffect(() => {
  //   console.log("results", results);
  //   console.log("data", results.data.value);
  //   console.log("error", results.error.value);
  //   console.log("fetching", results.fetching.value);
  // });

  const refresh = () => {
    results.executeQuery({
      requestPolicy: "network-only",
    });
  };

  const tokenTrades = computed<TokenTrades[]>(() => {
    const tradeEvents = results.data.value?.tokenTrades || [];
    const formatted: TokenTrades[] = tradeEvents.map((x: any) => {
      return {
        ...x,
        erc20Amount: +x.erc20Amount,
        ethAmount: +x.ethAmount,
        block: +x.block,
        timestamp: +x.timestamp,
      };
    });
    return formatted;
  });
  return { tokenTrades, refresh };
}
