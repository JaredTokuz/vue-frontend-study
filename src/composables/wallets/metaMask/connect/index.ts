import connectMetaMask from "./connectMetaMask";
import autoConnect from "./autoconnect";
import disconnectWallet from "./disconnectMetaMask";
import { metaMaskProvider } from "@/services/ethers";

const getProvider = () => {
  return metaMaskProvider();
};

const actions = {
  connectMetaMask,
  autoConnect,
  disconnectWallet,
  getProvider,
};

if (window.ethereum) {
  //   @ts-expect-error any
  window.ethereum.on("accountsChanged", async (accounts) => {
    console.log("New account detected: ", accounts);
    // properly disconnect if disconnected from meta mask
    if (accounts.length == 0) {
      await disconnectWallet();
      console.log("disconnected state");
    }
    window.location.reload();
  });
  //@ts-expect-error any
  window.ethereum.on("chainChanged", (chainId) => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    // TODO look into this statement more
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
