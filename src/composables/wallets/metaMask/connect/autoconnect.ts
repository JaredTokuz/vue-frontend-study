import connect from "./index";
import walletState from "../../index";

const autoConnect = async () => {
  const { connectMetaMask } = connect();
  const { state } = walletState();
  // check if the status is true first
  if (state.status) {
    await connectMetaMask();
  }
};
export default autoConnect;
