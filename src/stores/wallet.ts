import { metaMaskProvider } from "@/services/ethers";
import type { ethers } from "ethers";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

/** add services that get data such as meta mask provider and the accounts, eth balances, get account, */
export interface WalletData {
  address: string;
  acc_short: string;
}
/**
 * @deprecated only using this to look up old code
 */
export const useWalletStore = defineStore("wallet", () => {
  const address = ref("");
  const connected = ref(false);
  const installed = ref(false);
  const chainId = ref("");
  const ens = ref("");
  const avatar = ref("");
  const walletType = ref("");
  const ethBalance = ref("");

  const acc_short = computed(() => {
    return `${address.value.slice(0, 2)}...${address.value.slice(-4)}`;
  });

  const saveWalletData = (payload: Pick<WalletData, "address">) => {
    address.value = payload.address;
  };

  /** set providee data to update store info about the type being used  */
  const setProvider = () => {
    const provider = metaMaskProvider();
  };

  return {
    address,
    acc_short,
    saveWalletData,
    setProvider,
  };
});
