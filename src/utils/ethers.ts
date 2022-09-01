import { BigNumber, ethers } from "ethers";

/* convert wei bignumber to ether string */
export const formatToEther = (wei: BigNumber) => {
  return ethers.utils.formatEther(wei);
};

/* convert ethers string to wei big number*/
export const formatToWei = (eth: string) => {
  return ethers.utils.parseEther(eth);
};
