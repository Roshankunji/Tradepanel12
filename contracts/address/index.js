import testnetAddress from "./testnet";
import mainnetAddress from "./mainnet";

const isTest = true;
const contractAddress = isTest ? testnetAddress :  mainnetAddress;

export default contractAddress;