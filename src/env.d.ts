interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_BONDINGCURVE_CONTRACT_ADDRESS: string;
  readonly VITE_BLOCKCHAIN_NETWORK_NAME: string;
  readonly VITE_BLOCKCHAIN_NETWORK_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
