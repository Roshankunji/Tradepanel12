const baseVaultAddress = ""
const contractsFactoryAddress = "0x8FC2434dd3a5Ddaefac0b8a6d12bd14C2790e1Dd"
const gmxAdapterAddress = "0xd3Bae94407B79c733712eccBbe8625b8409d8DB3"
const lensAddress = "0x3aa7a1985232C2caCc20996F97afD6c3251998dD"
const traderWalletAddress = "0xa5429a46244FEE9ED33cF0C820ed9Ce57786Ef4A"
const traderWalletDeployerAddress = "0x3aa4e150ac6Dc0C897dc7859d275D199eF087598"
const uniswapV3AdapterAddress = "0x324934DeC111EC7357201d54BC66B033BaF9eE3f"
const usersVaultAddress = "0x8E519670206C2CAcF882282c0F51aD93aD90Bf0a"
const usersVaultDeployerAddress = "0x1B8C875e16EBAdAb5fBeCdcB2A83E5C0D86c69dD"

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

const testnetAddress = { baseVaultAddress, contractsFactoryAddress, gmxAdapterAddress, lensAddress, traderWalletAddress, traderWalletDeployerAddress, uniswapV3AdapterAddress, usersVaultAddress, usersVaultDeployerAddress }

export default testnetAddress;