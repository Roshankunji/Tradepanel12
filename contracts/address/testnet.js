const baseVaultAddress = ""
const contractsFactoryAddress = "0x77a272EF5Ba33B5c3D1fA68566F75b0144C679AD"
const gmxAdapterAddress = "0xd3Bae94407B79c733712eccBbe8625b8409d8DB3"
const lensAddress = "0x783e40fBae3E5C427102b496cf8621Fc5dD32F80"
const traderWalletAddress = "0x8842c31f32bFFB6f07Fa20237d15F8Ad6eDe13A6"
const traderWalletDeployerAddress = "0x3aa4e150ac6Dc0C897dc7859d275D199eF087598"
const uniswapV3AdapterAddress = "0xd8A9d057795fe2ef6171FCB05d2c96001555ff6d"
const usersVaultAddress = "0x644a0F971422d7C744BB26089fb5267a4F6f5AA1"
const usersVaultDeployerAddress = "0x1B8C875e16EBAdAb5fBeCdcB2A83E5C0D86c69dD"
const dynamicValueationAddress = "0xda430a73106D31120Ec5128Bb1008bcd00d25A9C"

export const testnetTokens = {
  usdc: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
  usdt: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
  dai: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
  frax: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F",
  weth: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // shortable
  wbtc: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f", // shortable
  uni: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0", // shortable
  link: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4", // shortable
  randomCoin: "0x1E5E907F690a2aEa6c68D60f8bb9771FE585bC34",
};

const testnetAddress = { baseVaultAddress, contractsFactoryAddress, gmxAdapterAddress, lensAddress, traderWalletAddress, traderWalletDeployerAddress, uniswapV3AdapterAddress, usersVaultAddress, usersVaultDeployerAddress, dynamicValueationAddress }

export default testnetAddress;