import connect from "./index";
import walletState from "../../index";

const autoConnect = async () => {
  const { connectWalletConnect } = connect();
  const { state } = walletState();
  if (state.status) {
    if (localStorage.getItem("walletconnect") == null) {
      console.log("disconnected");
      console.log("disconnected");
      state.status = false;
      state.address = "";
      localStorage.removeItem("userState");
    }
    if (localStorage.getItem("walletconnect")) {
      (async () => {
        console.log("start");
        connectWalletConnect();
      })();
    }
  }
};
export default autoConnect;
