import type { AddressProfile, LatestTokenState, TokenTrades } from "@/datasets";
import { createClient, gql } from "@urql/core";
import {
  addressProfileQuery,
  latestTokenStateQuery,
  tokenTradeQuery,
} from "./queries";

const APIURL = "https://api.thegraph.com/subgraphs/name/username/subgraphname";

const client = createClient({
  url: APIURL,
});

export const queryLatestState = async () => {
  return client.query<LatestTokenState>(latestTokenStateQuery, {}).toPromise();
};

export const queryTokenTrades = async () => {
  return client.query<TokenTrades[]>(tokenTradeQuery, {}).toPromise();
};

export const queryAddressProfile = async () => {
  return client.query<AddressProfile[]>(addressProfileQuery, {}).toPromise();
};
