import { ethers } from "ethers";
import simpleBondingCurve from "@/types/SimpleBondingCurve.json";
import { SimpleBondingCurve } from "@/types/SimpleBondingCurve";

/*
 * A Web3 Provider wraps a standard Web3 provider, which is
 * what MetaMask injects as window.ethereum into each page
 * */
export const metaMaskProvider = () => {
  if (!window.ethereum) throw "ethereum is not loaded";
  return new ethers.providers.Web3Provider(window.ethereum);
};

type MetaMaskProvider = ReturnType<typeof metaMaskProvider>;

/* Connecting to Ethereum via JSON-RPC */

// If you don't specify a url, Ethers connects to the default
// http://localhost:8545
export const jsonRPCProvider = () => {
  // TODO create two separate insert credentials such as infura or alchemy
  const provider = new ethers.providers.JsonRpcProvider("infura.api");
  return provider;
};

type RpcProvider = ReturnType<typeof jsonRPCProvider>;

// only export this provider
export type EthersProviders = MetaMaskProvider & RpcProvider;

// MetaMask requires requesting permission to connect users accounts
export const requestAccounts = async (provider: EthersProviders) => {
  return provider.send("eth_requestAccounts", []);
};

// The Contract object
export const getBondingCurveContract = (
  addressOrName: string,
  provider: EthersProviders
) => {
  const contract = new SimpleBondingCurve(
    addressOrName, // ens acceptable
    simpleBondingCurve,
    provider
  );
  return contract;
};
