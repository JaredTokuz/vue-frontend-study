export interface TokenTrades {
  id: string;
  nonce: number;
  er20Amount: number;
  ethAmount: number;
  timestamp: number;
  tradeType: "Burn" | "Mint";
  address: string;
}
export const tokenTrades: TokenTrades[] = [
  {
    id: "0",
    nonce: 0,
    er20Amount: 2,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0jk43nbj",
  },
  {
    id: "1",
    nonce: 1,
    er20Amount: 3,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0jk43nbj",
  },
  {
    id: "2",
    nonce: 2,
    er20Amount: 4,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0ck41nbj",
  },
  {
    id: "3",
    nonce: 3,
    er20Amount: 3,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Burn",
    address: "0x0jk43nbj",
  },
  {
    id: "4",
    nonce: 4,
    er20Amount: 7,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0ck41nbj",
  },
  {
    id: "5",
    nonce: 5,
    er20Amount: 6,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0bh43nbj",
  },
  {
    id: "6",
    nonce: 6,
    er20Amount: 8,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0jk43nbj",
  },
  {
    id: "7",
    nonce: 7,
    er20Amount: 5,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Burn",
    address: "0x0ck41nbj",
  },
  {
    id: "8",
    nonce: 8,
    er20Amount: 8,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0jk43nbj",
  },
  {
    id: "9",
    nonce: 9,
    er20Amount: 8,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0bh43nbj",
  },
  {
    id: "10",
    nonce: 10,
    er20Amount: 9,
    ethAmount: 100,
    timestamp: 1123312,
    tradeType: "Burn",
    address: "0x0jk43nbj",
  },
  {
    id: "11",
    nonce: 11,
    er20Amount: 10,
    ethAmount: 200,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0jk43nbj",
  },
  {
    id: "12",
    nonce: 12,
    er20Amount: 15,
    ethAmount: 220,
    timestamp: 1123312,
    tradeType: "Mint",
    address: "0x0jk43nbj",
  },
  {
    id: "13",
    nonce: 13,
    er20Amount: 10,
    ethAmount: 150,
    timestamp: 1123312,
    tradeType: "Burn",
    address: "0x0bh43nbj",
  },
];

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

export const addressProfiles: AddressProfile[] = [
  {
    id: "adf",
    address: "asdfads",
    erc20Purchased: 100,
    erc20Sold: 150,
    weiSpent: 200,
    weiSold: 250,
    weiNetRealized: 50,
    noTrades: 7,
  },
  {
    id: "hjk",
    address: "hjkhjk",
    erc20Purchased: 700,
    erc20Sold: 870,
    weiSpent: 260,
    weiSold: 590,
    weiNetRealized: 350,
    noTrades: 70,
  },
  {
    id: "rty",
    address: "tryrty",
    erc20Purchased: 500,
    erc20Sold: 170,
    weiSpent: 300,
    weiSold: 550,
    weiNetRealized: 150,
    noTrades: 17,
  },
];

export interface LatestTokenState {
  id: string;
  last_timestamp: number;
  lastNonce: number;
  price: number;
  weiIn: number;
  weiOut: number;
  noAddress: number;
  noTrades: number;
}

export const latestTokenState: LatestTokenState = {
  id: "latest",
  last_timestamp: 12341230,
  lastNonce: 12341233,
  price: 126,
  weiIn: 12230,
  weiOut: 123430,
  noAddress: 3,
  noTrades: 96,
};
