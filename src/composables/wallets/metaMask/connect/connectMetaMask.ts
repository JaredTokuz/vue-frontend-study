import walletState from "../../index";

import { metaMaskProvider } from "@/services/ethers";

const connectMetaMask = async () => {
  try {
    const { state } = walletState();
    //  Enable session (triggers QR Code modal)
    // await provider.enable();
    const web3Provider = metaMaskProvider();
    //  request accounts in order to connect
    await web3Provider.send("eth_requestAccounts", []);
    const signer = await web3Provider.getSigner();
    const address = await signer.getAddress();
    state.status = true;
    state.address = address;
    state.chainId = await web3Provider.send("eth_chainId", []);
  } catch (error) {
    console.log(error);
  }
};
export default connectMetaMask;
