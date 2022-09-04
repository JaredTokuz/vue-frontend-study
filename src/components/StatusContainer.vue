<script setup lang="ts">
import connect from "@/composables/wallets";

const { state, clear, connectWallet, disconnectWallet } = connect();
const connectUserWallet = async () => {
  await connectWallet();
};

const disconnectUser = async () => {
  await disconnectWallet();
};
</script>

<template>
  <div v-if="!state.walletType">
    <h1>Select wallet integration</h1>
    <div>
      <button
        @click="state.walletType = 'walletConnect'"
        class="disconnect__button"
      >
        WalletConnect
      </button>
      <div></div>
      <button
        @click="state.walletType = 'browserMetaMask'"
        class="disconnect__button"
      >
        Meta Mask
      </button>
    </div>
  </div>
  <div v-else>
    <button @click="clear">switch</button>
    <h1>Welcome to Your Vue.js Dapp</h1>

    <div v-if="state.status">
      <button @click="connectUserWallet" class="button">Connected</button>
      <h3>Address: {{ state.address }}</h3>
      <h3>ChainId: {{ state.chainId }}</h3>
      <button @click="disconnectUser" class="disconnect__button">
        Disconnect
      </button>
    </div>

    <button v-else @click="connectUserWallet" class="button">
      Connect Wallet
    </button>
  </div>
</template>
