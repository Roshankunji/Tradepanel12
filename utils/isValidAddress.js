import { ethers } from "ethers";

export const isValidAddress = (tokenAddy) => {
  // Check if the address is a contract address
  const isValidContract = tokenAddy.startsWith('0x');

  // Check if the address is a checksum address
  const isChecksumAddress = ethers.utils.isAddress(tokenAddy);

  return isValidContract && isChecksumAddress;
};
