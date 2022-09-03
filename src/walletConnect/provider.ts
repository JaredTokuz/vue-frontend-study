import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";

export const provider = new WalletConnectProvider({
  infuraId: import.meta.env.VITE_APP_INFURA_ID,
});
