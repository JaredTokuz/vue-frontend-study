/**
 * @deprecated only using this to look up old code
 */
import { metaMaskProvider } from "@/services/ethers";
import { useWalletStore } from "@/stores/wallet";
import { onMounted, ref } from "vue";
import { web3Provider } from "./provider";

/** ? make this ethers client wallet? */
export function WalletConnection() {
  onMounted(async () => {
    await checkNetwork();
  });

  const walletStore = useWalletStore();
  const targetNetwork = import.meta.env.VITE_BLOCKCHAIN_NETWORK_NAME;
  const targetNetworkId = import.meta.env.VITE_BLOCKCHAIN_NETWORK_ID || "0x1";
  const network_ok = ref<boolean>(false);

  // checks if current chain matches with the one provided in env variable
  const checkNetwork = async () => {
    // const provider = metaMaskProvider();
    const currentChainId = await web3Provider.send("eth_chainId", []);
    if (currentChainId == targetNetworkId) network_ok.value = true;
  };
  // switches network to the one provided in env variable SERVICE
  const switchNetwork = async () => {
    const provider = metaMaskProvider();
    await provider.send("wallet_switchEthereumChain", [
      { chainId: targetNetworkId },
    ]);
    // refresh
    window.location.reload();
  };
  // checks network and connects wallet
  const connectWallet = async () => {
    if (!network_ok.value) await switchNetwork();
    try {
      const provider = metaMaskProvider();
      const data = await provider.send("eth_requestAccounts", []);
      console.log("data :>> ", data);
      walletStore.saveWalletData({ address: data[0] });
      console.log("DApp connected to your wallet 💰");
    } catch (error) {
      console.error("Error connecting DApp to your wallet");
      console.error(error);
    }
  };

  // if (window.ethereum) {
  //   //@ts-expect-error any
  //   window.ethereum.on("accountsChanged", (accounts) => {
  //     console.log("New account detected: ", accounts);
  //     window.location.reload();
  //   });
  //   //@ts-expect-error any
  //   window.ethereum.on("chainChanged", (chainId) => {
  //     // Handle the new chain.
  //     // Correctly handling chain changes can be complicated.
  //     // We recommend reloading the page unless you have good reason not to.
  //     console.log("New chain detected: ", chainId);
  //     window.location.reload();
  //   });
  // }

  return {
    connectWallet,
    walletStore,
    checkNetwork,
    switchNetwork,
    network_ok,
    targetNetwork,
  };
}
