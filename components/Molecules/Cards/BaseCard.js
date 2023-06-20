import React, { useEffect, useState } from "react";
import FundsRollover from "./FundsRollover";
import { erc20ABI, useAccount, usePublicClient } from "wagmi";
import { contractAddress } from "../../../contracts/address";
import { DynamicValuationABI, TraderWalletABI, UsersVaultABI } from "../../../contracts/abis";
import { useStore } from "../../../context/StoreContext";
import { commaSeparators } from "../../../utils/commaSeparator";
import { formatUnitValue } from "../../../utils/formatNumber";

const BaseCard = ({ name, className }) => {
  const publicClient = usePublicClient();
  const { traderWallet, vaultAddress } = useStore();

  const [userValuation, setUserValuation] = useState(0);
  const [underlyingToken, setUnderlyingToken] = useState();
  const [underlyingTokenDecimal, setUnderlyingTokenDecimal] = useState();
  const [underlyingTokenUserBalance, setUnderlyingTokenUserBalance] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [traderValuation, setTraderValuation] = useState(0);
  const [underlyingTokenTraderBalance, setUnderlyingTokenTraderBalance] = useState(0);
  const { isConnected } = useAccount();

  const getUnderlyingToken = async () => {
    const _underlyingToken = await publicClient.readContract({ 
      abi: TraderWalletABI, 
      address: contractAddress.traderWalletAddress, 
      functionName: "underlyingTokenAddress" 
    });
    const _underlyingTokenDecimal = await publicClient.readContract({
      abi: erc20ABI,
      address: _underlyingToken,
      functionName: 'decimals'
    })
    setUnderlyingToken(_underlyingToken);
    setUnderlyingTokenDecimal(_underlyingTokenDecimal);
  }

  const getDashboardValues = async () => {
    const [_userValuation, _underlyingTokenUserBalance, _totalSupply, _traderValuation, _underlyingTokenTraderBalance] = (
      await publicClient.multicall({
        contracts: [
          {
            address: contractAddress.usersVaultAddress,
            abi: UsersVaultABI,
            functionName: "getContractValuation" // D6
          },
           {
            address: underlyingToken,
            abi: erc20ABI,
            functionName: "balanceOf",
            args: [vaultAddress] // D7
          },
          {
            address: contractAddress.usersVaultAddress,
            abi: UsersVaultABI,
            functionName: "totalSupply" // D11
          },
          {
            address: contractAddress.traderWalletAddress,
            abi: TraderWalletABI,
            functionName: "getContractValuation" //D13
          },
          {
            address: underlyingToken,
            abi: erc20ABI,
            functionName: "balanceOf",
            args: [traderWallet] // D14
          }
        ]
      })
    ).map((v) => v.result);
    setUserValuation(Number(_userValuation).toFixed(2));
    setUnderlyingTokenUserBalance(formatUnitValue(_underlyingTokenUserBalance, underlyingTokenDecimal));
    setTotalSupply(Number(_totalSupply).toFixed(2));
    setTraderValuation(Number(_traderValuation).toFixed(2));
    setUnderlyingTokenTraderBalance(formatUnitValue(_underlyingTokenTraderBalance, underlyingTokenDecimal));
  }

  useEffect(() => {
    getUnderlyingToken();
  }, [isConnected])

  useEffect(() => {
    if(underlyingToken !== undefined && underlyingTokenDecimal !== underlyingToken) {
      getDashboardValues();
    }
  }, [underlyingToken, underlyingTokenDecimal, isConnected])
  return (
    <>
      <div
        className={`bg-[#16182e] rounded-[10px] w-[100%] sm:w-[45%] md:w-[30%] h-[100%] font-sora ${className}`}
      >
        <div className="w-[100%] h-[100%] text-white ">
          <div className="text-white  flex justify-center py-[10px] text-[18px]">
            {name}
          </div>
          <hr className="border-borderColor borderWidth-[0.05px]" />
          {name === "Funds Rollover" ? (
            <div className="px-[25px] py-[15px]">
              <FundsRollover />
            </div>
          ) : (
            <div className="py-[15px] px-[25px]">
              <div className="flex flex-col py-[6px] ">
                <p className="text-[12px] font-sora">Total Funds</p>
                <p className="text-[18px] font-semibold font-sora">
                  {name === "User Vault" ? `$${userValuation}` : `$${traderValuation}`}
                </p>
              </div>
              <div className="flex flex-col py-[6px] ">
                <p className="text-[12px] font-sora">Unused</p>
                <p className="text-[18px] font-semibold font-sora">
                  {name === "User Vault" ? `$${commaSeparators(underlyingTokenUserBalance)}` : `$${commaSeparators(underlyingTokenTraderBalance)}`}
                </p>
              </div>
              <div className="flex flex-col py-[6px] ">
                <p className="text-[12px] font-sora">Deployed</p>
                <p className="text-[18px] font-semibold font-sora">
                   {name === "User Vault" ? `$${Number(userValuation) - Number(underlyingTokenUserBalance)}` : `$${Number(traderValuation) - Number(underlyingTokenTraderBalance)}` }
                </p>
              </div>
              <div className="flex flex-col py-[6px]">
                <p className="text-[12px] font-sora">Current Value</p>
                <p className="text-[18px] font-semibold font-sora">
                  ${commaSeparators(underlyingTokenTraderBalance)}
                </p>
              </div>
              <div className="flex flex-col py-[6px] ">
                <p className="text-[12px] font-sora">Returns</p>
                <p className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788{" "}
                  <span className="text-green-500 font-normal">(+50.3%)</span>
                </p>
              </div>
              {name === "User Vault" ? (
                <div>
                  <div className="flex flex-col py-[6px] ">
                    <p className="text-[12px] font-sora">Total Shares</p>
                    <p className="text-[18px] font-semibold font-sora">
                      ${commaSeparators(totalSupply)}
                    </p>
                  </div>
                  <div className="flex flex-col py-[6px] ">
                    <p className="text-[12px] font-sora">
                      Price Per Share
                    </p>
                    <p className="text-[18px] font-semibold font-sora">
                      $34,44,44,4788
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col py-[6px] ">
                  <p className="text-[12px] font-sora">Uv/Tw(Unused)</p>
                  <p className="text-[18px] font-semibold font-sora">
                    {(underlyingTokenUserBalance / underlyingTokenTraderBalance).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BaseCard;
