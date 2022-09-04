import walletState from "../../index";

//meta mask can only do a real disconnect in the wallet
const disconnectMetaMask = async () => {
  const { state } = walletState();
  state.status = false;
  state.address = "";
  localStorage.removeItem("userState");
};
export default disconnectMetaMask;
