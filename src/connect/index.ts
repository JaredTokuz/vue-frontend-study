import { reactive, watch } from "vue";
import connectWalletConnect from "./connectWalletConnect";
import autoConnect from "./autoconnect";
import disconnectWallet from "./disconnectWallet";

const defaultState = {
  address: "",
  chainId: "",
  status: false,
};

const STATE_NAME = "userState";
const getDefaultState = () => {
  if (localStorage.getItem(STATE_NAME) !== null) {
    const stateName = localStorage.getItem(STATE_NAME);
    return stateName ? JSON.parse(stateName) : null;
  }
  return defaultState;
};
const state = reactive(getDefaultState());

const actions = {
  connectWalletConnect,
  autoConnect,
  disconnectWallet,
};

watch(
  () => state,
  () => {
    localStorage.setItem(STATE_NAME, JSON.stringify(state));
  },
  { deep: true }
);
export default () => {
  if (localStorage.getItem(STATE_NAME) === null) {
    localStorage.setItem(STATE_NAME, JSON.stringify(state));
  }
  return {
    state,
    ...actions,
  };
};
