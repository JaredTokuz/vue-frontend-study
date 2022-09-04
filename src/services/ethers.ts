import { ethers, providers } from "ethers";
import simpleBondingCurve from "@/contracts/SimpleBondingCurve.sol/SimpleBondingCurve.json";
// import { SimpleBondingCurve } from "@/typechain/SimpleBondingCurve";
import { SimpleBondingCurve__factory } from "@/typechain/factories/SimpleBondingCurve__factory";

/*
 * A Web3 Provider wraps a standard Web3 provider, which is
 * what MetaMask injects as window.ethereum into each page
 * */
export const metaMaskProvider = () => {
  if (!window.ethereum) throw "ethereum is not loaded";
  return new providers.Web3Provider(window.ethereum);
};

/**
 *
 * @returns return an array of accounts[the one selected] if the app has the permission to access the wallet. If not, will fire up the permission request and then return the array of accounts
 */
export const requestAccounts = async (): Promise<string[]> => {
  try {
    const provider = metaMaskProvider();
    return provider.send("eth_requestAccounts", []);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Error during the dApp approval");
    }
  }
};

/**
 *
 * @returns Array of accounts. For now, it will return always an array with the account selected in metamask. In the future, will return an array of accounts
 */
export const getAccounts = async (): Promise<string[]> => {
  try {
    const provider = metaMaskProvider();
    return provider.send("eth_accounts", []);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Error trying to get your accounts[s]");
    }
  }
};

export const getChainId = async (): Promise<string> => {
  try {
    const provider = metaMaskProvider();
    return provider.send("eth_chainId", []);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Error getting the chain id");
    }
  }
};

/* Connecting to Ethereum via JSON-RPC */

// If you don't specify a url, Ethers connects to the default
// http://localhost:8545
export const jsonRPCProvider = () => {
  // TODO create two separate insert credentials such as infura or alchemy
  const provider = new ethers.providers.JsonRpcProvider("infura.api");
  return provider;
};

// The Contract object
export const getBondingCurveContract = (
  provider: ethers.providers.Provider | ethers.Signer
) => {
  const contractAddress = import.meta.env.VITE_BONDINGCURVE_CONTRACT_ADDRESS; // ens acceptable as well
  const contract = SimpleBondingCurve__factory.connect(
    contractAddress, // ens acceptable as well
    provider
  );
  return contract;
};

export const getBondingCurveContractInstance = (
  provider: ethers.providers.Provider | ethers.Signer
) => {
  const contractAddress = import.meta.env.VITE_BONDINGCURVE_CONTRACT_ADDRESS; // ens acceptable as well
  const contract = new ethers.Contract(
    contractAddress,
    simpleBondingCurve.abi,
    provider
  );
  return contract;
};
