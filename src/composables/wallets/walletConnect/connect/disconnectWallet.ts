import { provider } from "../provider";
import walletState from "../../index";

const disconnectWallet = async () => {
  const { state } = walletState();
  await provider.disconnect();
  state.status = false;
  state.address = "";
  localStorage.removeItem("userState");
};
export default disconnectWallet;
