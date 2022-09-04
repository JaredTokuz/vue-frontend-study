import { reactive, watch } from "vue";
import connectMetaMask from "./connectMetaMask";
import autoConnect from "./autoconnect";
import disconnectWallet from "./disconnectMetaMask";
import { metaMaskProvider } from "@/services/ethers";
// import walletState from "../../index";

// const { state } = walletState();
const defaultState = {
  address: "",
  chainId: "",
  status: false,
};

const STATE_NAME = "userState";
const getDefaultState = (): typeof defaultState => {
  const stateName = localStorage.getItem(STATE_NAME);
  if (stateName !== null) {
    return JSON.parse(stateName);
  }
  return defaultState;
};
const state = reactive(getDefaultState());

const getProvider = () => {
  return metaMaskProvider();
};

const actions = {
  connectMetaMask,
  autoConnect,
  disconnectWallet,
  getProvider,
};

// // computed values reactive state
// const computed = reactive({ rolls: 0 });

// watch(
//   () => state,
//   () => {
//     localStorage.setItem(STATE_NAME, JSON.stringify(state));
//     // computed values updated
//     computed.rolls += 1;
//   },
//   { deep: true }
// );
if (window.ethereum) {
  //@ts-expect-error any
  window.ethereum.on("accountsChanged", (accounts) => {
    console.log("New account detected: ", accounts);
    window.location.reload();
  });
  //@ts-expect-error any
  window.ethereum.on("chainChanged", (chainId) => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    console.log("New chain detected: ", chainId);
    window.location.reload();
  });
}
export default () => {
  return {
    // state,
    ...actions,
  };
};
