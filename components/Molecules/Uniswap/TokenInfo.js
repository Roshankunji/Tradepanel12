/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { erc20ABI, usePublicClient } from "wagmi";
import { tokenInfoData } from "../../../constants/TokenData";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import { jsNumberForAddress } from "react-jazzicon";
import Image from "next/image";
import { fetchUSDPrice } from "../../../api/utils";
import { useStore } from "../../../context/StoreContext";
import { formatUnits } from "viem";

const TokenInfo = (props) => {
  const { tokenAddress, account, name } = props;
  const publicClient = usePublicClient();
  const [tokenName, setTokenName] = useState("...");
  const [tokenSymbol, setTokenSymbol] = useState("...");
  const [tokenAmount, setTokenAmount] = useState("...");
  const [percentChange, setPercentChange] = useState("3.4");
  const [profitLoss, setProfitLoss] = useState("2.4");
  const [usdPrice, setUSDPrice] = useState(0);
  const [currentToken, setCurrentToken] = useState([]);
  const { traderTotalAmount, setTraderTotalAmount, userTotalAmount, setUserTotalAmount } = useStore();

  const getTokenDetails = async () => {
    const _tokenName = await publicClient.readContract({ abi: erc20ABI, address: tokenAddress, functionName: "name" });
    const _tokenSymbol = await publicClient.readContract({ abi: erc20ABI, address: tokenAddress, functionName: "symbol" });
    const _tokenAmount = await publicClient.readContract({ abi: erc20ABI, address: tokenAddress, functionName: "balanceOf", args: [account] });
    const _decimal = await publicClient.readContract({ abi: erc20ABI, address: tokenAddress, functionName: "decimals" })
    const _tokenInfo = tokenInfoData.filter(element => element.shortName === _tokenSymbol);
    const amount = formatUnits(_tokenAmount, _decimal);
    setTokenName(_tokenName);
    setTokenSymbol(_tokenSymbol);
    setTokenAmount(amount);
    console.log({ _tokenInfo })
    setCurrentToken(_tokenInfo);
    const _usdPrice = await fetchUSDPrice(_tokenInfo[0]);
    setUSDPrice(_usdPrice);
    if(name === "trader") {
      const _amount = traderTotalAmount;
      const total = usdPrice * Number(amount) + Number(_amount);
      setTraderTotalAmount(total);
    } else {
      const _amount = userTotalAmount;
      const total = usdPrice * Number(amount) + Number(_amount);
      setUserTotalAmount(total);
    }
  }
  
  useEffect(() => {
    getTokenDetails();
  }, [])

  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          {
            currentToken[0]?.image ? 
              <Image
                width={40}
                height={40}
                src={currentToken[0]?.image}
                alt="wallet"
                className="mr-[9px]"
              />  
            : <Jazzicon diameter={35} paperStyles={{ marginRight: '20px' }} seed={jsNumberForAddress(tokenAddress)} />
          }
          
          <div className="flex flex-col">
            <div className="text-gray-200 font-medium">{tokenName}</div>
            <div className="text-gray-500 font-medium">
              {tokenAmount} {tokenSymbol}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-200 font-medium self-end">
            ${(usdPrice * Number(tokenAmount)).toFixed(2)}
          </div>
          <div className="flex items-center">
            {profitLoss === "loss" ? (
              <SouthEastIcon className="text-red-400 text-[16px] mr-[1px]" />
            ) : (
              <NorthEastIcon className="text-green-400 text-[16px] mr-[1px]" />
            )}

            <div className="text-gray-500 font-medium">{percentChange}%</div>
          </div>
        </div>
      </div>
    </>
  );
};



export default TokenInfo;
