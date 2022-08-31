import { defineStore } from "pinia";
import { ref } from "vue";

/** add services that get data such as meta mask provider and the accounts, eth balances, get account, */
export interface WalletData {
  address: string;
  acc_short: string;
}

export const useWalletStore = defineStore("wallet", () => {
  const address = ref("");
  const provider = ref(null);
  const acc_short = ref("");
  const saveWalletData = (payload: Pick<WalletData, "address">) => {
    address.value = payload.address;
    acc_short.value = `${payload.address.slice(0, 2)}...${payload.address.slice(
      -4
    )}`;
  };

  return {
    address,
    provider,
    acc_short,
    saveWalletData,
  };
});
