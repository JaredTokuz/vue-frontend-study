import { providers } from "ethers";
import connect from "./index";
import walletState from "../../index";

import { web3Provider } from "../provider";
import { metaMaskProvider } from "@/services/ethers";

const connectMetaMask = async () => {
  try {
    const { state } = walletState();
    //  Enable session (triggers QR Code modal)
    // await provider.enable();
    const web3Provider = metaMaskProvider();
    // web3Provider.getBalance
    const accounts = await web3Provider.send("eth_requestAccounts", []);
    const signer = await web3Provider.getSigner();
    const address = await signer.getAddress();
    state.status = true;
    state.address = address;
    state.chainId = await web3Provider.send("eth_chainId", []);
    web3Provider.on("disconnect", (code: any, reason: any) => {
      console.log(code, reason);
      console.log("listener - disconnected");
      state.status = false;
      state.address = "";
      localStorage.removeItem("userState");
    });
    web3Provider.on("accountsChanged", (accounts: string | any[]) => {
      if (accounts.length > 0) {
        state.address = accounts[0];
      }
    });
    web3Provider.on("chainChanged", (chainId: any) => {
      state.chainId = chainId;
    });
  } catch (error) {
    console.log(error);
  }
};
export default connectMetaMask;
