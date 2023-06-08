import { EthSvg, FraxSvg, LinkSvg, UniSvg, UsdcSvg, UsdtSvg, WbtcSvg, WethSvg, DaiSvg } from "../../../config/images"
import { tokenAddress } from "../../../contracts/address"

export const tokenInfoData = [
  {
    "id": 1,
    "image": EthSvg,
    "name": "Ether",
    "shortName": "ETH",
    "address": '',
    "balance": 0
  },
  {
    "id": 2,
    "image": UsdcSvg,
    "name": "USDC Coin",
    "shortName": "USDC",
    "address": tokenAddress.usdc,
    "balance": 0
  },
  {
    "id": 3,
    "image": UsdtSvg,
    "name": "Tether USD",
    "shortName": "USDT",
    "address": tokenAddress.usdt,
    "balance": 0
  },
  {
    "id": 4,
    "image": DaiSvg,
    "name": "Dai Stablecoin",
    "shortName": "DAI",
    "address": tokenAddress.dai,
    "balance": 0
  },
  {
    "id": 5,
    "image": FraxSvg,
    "name": "Frax",
    "shortName": "FRAX",
    "address": tokenAddress.frax,
    "balance": 0
  },
  {
    "id": 6,
    "image": WethSvg,
    "name": "Wrapped Ether",
    "shortName": "WETH",
    "address": tokenAddress.weth,
    "balance": 0
  },
  {
    "id": 7,
    "image": WbtcSvg,
    "name": "Wrapped BTC",
    "shortName": "WBTC",
    "address": tokenAddress.wbtc,
    "balance": 0
  },
  {
    "id": 8,
    "image": UniSvg,
    "name": "Uniswap",
    "shortName": "UNI",
    "address": tokenAddress.uni,
    "balance": 0
  },
  {
    "id": 9,
    "image": LinkSvg,
    "name": "ChainLink Token",
    "shortName": "LINK",
    "address": tokenAddress.link,
    "balance": 0
  },
  ,
  {
    "id": 10,
    "name": "ShitCoin",
    "shortName": "SC",
    "address": tokenAddress.link,
    "balance": 0
  }
]