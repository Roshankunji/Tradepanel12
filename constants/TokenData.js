import { EthSvg, FraxSvg, LinkSvg, UniSvg, UsdcSvg, UsdtSvg, WbtcSvg, WethSvg, DaiSvg } from "../config/images"
import { tokenAddress } from "../contracts/address"

export const tokenInfoData = [
  {
    "id": 1,
    "ids": "ethereum",
    "image": EthSvg,
    "name": "Ethereum",
    "shortName": "ETH",
    "address": tokenAddress.weth,
    "balance": 0
  },
  {
    "id": 2,
    "ids": "usd-coin",
    "image": UsdcSvg,
    "name": "USD Coin",
    "shortName": "USDC",
    "address": tokenAddress.usdc,
    "balance": 0
  },
  {
    "id": 3,
    "ids": "tether",
    "image": UsdtSvg,
    "name": "Tether USD",
    "shortName": "USDT",
    "address": tokenAddress.usdt,
    "balance": 0
  },
  {
    "id": 4,
    "ids": "dai",
    "image": DaiSvg,
    "name": "Dai Stablecoin",
    "shortName": "DAI",
    "address": tokenAddress.dai,
    "balance": 0
  },
  {
    "id": 5,
    "ids": "frax",
    "image": FraxSvg,
    "name": "Frax",
    "shortName": "FRAX",
    "address": tokenAddress.frax,
    "balance": 0
  },
  {
    "id": 6,
    "ids": "weth",
    "image": WethSvg,
    "name": "Wrapped Ether",
    "shortName": "WETH",
    "address": tokenAddress.weth,
    "balance": 0
  },
  {
    "id": 7,
    "ids": "wrapped-bitcoin",
    "image": WbtcSvg,
    "name": "Wrapped BTC",
    "shortName": "WBTC",
    "address": tokenAddress.wbtc,
    "balance": 0
  },
  {
    "id": 8,
    "ids": "uniswap",
    "image": UniSvg,
    "name": "Uniswap",
    "shortName": "UNI",
    "address": tokenAddress.uni,
    "balance": 0
  },
  {
    "id": 9,
    "ids": "chainlink",
    "image": LinkSvg,
    "name": "ChainLink Token",
    "shortName": "LINK",
    "address": tokenAddress.link,
    "balance": 0
  },
  ,
  {
    "id": 10,
    "ids": "siacoin",
    "name": "ShitCoin",
    "shortName": "SC",
    "address": tokenAddress.link,
    "balance": 0
  }
]