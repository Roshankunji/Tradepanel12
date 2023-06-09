import testnetAddress, { testnetTokens } from "./testnet";
import mainnetAddress, { mainnetTokens } from "./mainnet";

const isTest = true;
const contractAddress = isTest ? testnetAddress :  mainnetAddress;
const tokenAddress = isTest ? testnetTokens : mainnetTokens;

export { contractAddress, tokenAddress }