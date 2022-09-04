import type { AddressProfile } from "@/components/TokenTrade/schemas.interface";
import { useQuery } from "@urql/vue";
import { computed, watchEffect } from "vue";

export const addressProfileQuery = `
    query {
        addressProfiles {
            id
            address
            erc20Purchased
            erc20Sold
            weiSpent
            weiReceived
            weiNetRealized
            noTrades
        }
    }
`;

export function QueryAddressProfiles() {
  // manage in store
  const results = useQuery({
    query: addressProfileQuery,
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

  const addressProfiles = computed<AddressProfile[]>(() => {
    const addressEvents = results.data.value?.addressProfiles || [];
    const formatted: AddressProfile[] = addressEvents.map((x: any) => {
      return {
        ...x,
        erc20Purchased: +x.erc20Purchased,
        erc20Sold: +x.erc20Sold,
        weiSpent: +x.weiSpent,
        weiSold: +x.weiSold,
        weiNetRealized: +x.weiNetRealized,
        noTrades: +x.noTrades,
      };
    });
    return formatted;
  });

  return { addressProfiles, refresh };
}
