import connectWalletConnect from "./connectWalletConnect";
import autoConnect from "./autoconnect";
import disconnectWallet from "./disconnectWallet";
import { provider } from "../provider";
import { providers } from "ethers";

const getProvider = () => {
  return new providers.Web3Provider(provider);
};

const actions = {
  connectWalletConnect,
  autoConnect,
  disconnectWallet,
  getProvider,
};

export default () => {
  return {
    ...actions,
  };
};
