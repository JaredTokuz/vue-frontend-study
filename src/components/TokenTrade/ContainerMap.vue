<template>
  <div class="container-map">
    <TransitionWrap class="map-element" :is-showing="selected == 'main'">
      <template v-slot:content>
        <TokenTradeFront @transact="changeSelected" />
      </template>
    </TransitionWrap>
    <TransitionWrap class="map-element" :is-showing="selected == 'buy'">
      <template v-slot:content>
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="flex">
            <div></div>
            <div class="">
              <button
                @click="changeSelected('main')"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <div
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Insert Wei
              <input v-model="insertedWei" />
              <button
                type="button"
                class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="buyTokens"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </template>
    </TransitionWrap>
    <TransitionWrap class="map-element" :is-showing="selected == 'sell'">
      <template v-slot:content>
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="flex">
            <div></div>
            <div class="">
              <button
                @click="changeSelected('main')"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <div
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Number of Tokens
              <input v-model="insertedErc20" />
              <button
                type="button"
                class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="sellTokens"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </template>
    </TransitionWrap>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TransitionWrap from "@/components/globals/TransitionWrap.vue";
import TokenTradeFront from "./TokenTradeFront.vue";
import { XIcon } from "@heroicons/vue/outline";
import { WalletConnection } from "@/composables/wallet-connection";

const displays = ["main", "buy", "sell"] as const;
type Displays = typeof displays[number];

const selected = ref<Displays>(displays[0]);

const insertedWei = ref(0);
const insertedErc20 = ref(0);

const changeSelected = (value: Displays) => {
  if (!displays.includes(value)) {
    throw "change selection value is not an option";
  }
  selected.value = value;
};

const buyTokens = async () => {
  insertedWei.value = 0;
  await connectWallet();
  changeSelected("main");
};

const sellTokens = () => {
  insertedErc20.value = 0;
  changeSelected("main");
};

const { connectWallet, walletStore, network_ok, targetNetwork } =
  WalletConnection();
</script>
