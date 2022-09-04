import { computed, reactive, watch } from "vue";
import walletConnect from "./walletConnect/connect";
import metaMask from "./metaMask/connect";
import type { providers } from "ethers";

interface WalletState {
  address: string;
  chainId: string;
  status: boolean;
  walletType: WalletTypes;
}

type WalletTypes = "walletConnect" | "browserMetaMask" | "";
interface ConnectionType {
  autoConnect: () => Promise<void>;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  getProvider: () => providers.Web3Provider;
}
const defaultState: WalletState = {
  address: "",
  chainId: "",
  status: false,
  walletType: "",
};
const STATE_NAME = "userState";
export const getDefaultState = (): typeof defaultState => {
  const stateName = localStorage.getItem(STATE_NAME);
  if (stateName !== null) {
    return JSON.parse(stateName);
  }
  return defaultState;
};
const state = reactive(getDefaultState());

const _walletConnect = walletConnect();
const _metaMask = metaMask();

const wallets: { [key in WalletTypes]: ConnectionType } = {
  walletConnect: {
    autoConnect: _walletConnect.autoConnect,
    connectWallet: _walletConnect.connectWalletConnect,
    disconnectWallet: _walletConnect.disconnectWallet,
    getProvider: _walletConnect.getProvider,
  },
  browserMetaMask: {
    autoConnect: _metaMask.autoConnect,
    connectWallet: _metaMask.connectMetaMask,
    disconnectWallet: _metaMask.disconnectWallet,
    getProvider: _metaMask.getProvider,
  },
  "": new Error("wallet type not set") as any,
};

const clear = async () => {
  if (state.walletType && state.status) {
    await wallets[state.walletType].disconnectWallet();
  }
  state.walletType = "";
};

const autoConnect = async () => {
  if (state.status && state.walletType) {
    await wallets[state.walletType].autoConnect();
  }
};

const disconnectWallet = async () => {
  if (state.status && state.walletType) {
    await wallets[state.walletType].disconnectWallet();
  }
};

const connectWallet = async () => {
  if (state.walletType) {
    await wallets[state.walletType].connectWallet();
  }
};

const getProvider = async () => {
  if (state.walletType) {
    return wallets[state.walletType].getProvider();
  }
};

// computed values reactive state
const getters = reactive({
  rolls: 0,
  connected: false,
});

watch(
  () => state,
  () => {
    localStorage.setItem(STATE_NAME, JSON.stringify(state));
    // computed values updated
    getters.rolls += 1;
    getters.connected = state.status && !!state.walletType;
  },
  { deep: true }
);
export default () => {
  if (localStorage.getItem(STATE_NAME) === null) {
    localStorage.setItem(STATE_NAME, JSON.stringify(state));
  }
  return {
    state,
    STATE_NAME,
    autoConnect,
    disconnectWallet,
    connectWallet,
    getters,
    clear,
    getProvider,
  };
};
