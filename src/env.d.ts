interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_BONDINGCURVE_CONTRACT_ADDRESS: string;
  readonly VITE_BLOCKCHAIN_NETWORK_NAME: string;
  readonly VITE_BLOCKCHAIN_NETWORK_ID: string;
  readonly VUE_APP_INFURA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@walletconnect/web3-provider/dist/umd/index.min.js" {
  import WalletConnectProvider from "@walletconnect/web3-provider/dist/esm/index";
  export default WalletConnectProvider;
}
