import { QueryAddressProfiles } from "./address-profile-query";
import { QueryLatestTokenState } from "./latest-token-query";
import { QueryTokenTrades } from "./token-trade-query";

export function mainRefresh() {
  const tokenTradeRes = QueryTokenTrades();
  const ltsRes = QueryLatestTokenState();
  const apRes = QueryAddressProfiles();

  const refresh = () => {
    tokenTradeRes.refresh();
    ltsRes.refresh();
    apRes.refresh();
  };

  return { refresh };
}
