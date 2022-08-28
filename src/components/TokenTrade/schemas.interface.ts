export interface TokenTrades {
  id: string;
  block: number;
  erc20Amount: number;
  ethAmount: number;
  timestamp: number;
  tradeType: "burn" | "mint";
  address: string;
}

export interface AddressProfile {
  id: string;
  address: string;
  erc20Purchased: number;
  erc20Sold: number;
  weiSpent: number;
  weiSold: number;
  weiNetRealized: number;
  noTrades: number;
}

export interface LatestTokenState {
  id: string;
  lastTimestamp: string;
  lastBlock: string;
  price: string;
  weiSpent: string;
  weiWithdrawn: string;
  noAddress: string;
  noTrades: string;
}
