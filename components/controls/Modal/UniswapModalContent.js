import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Search from "../Input/Search";
import { tokenInfoData } from "../Dropdown/TokenData.js";
import Image from "next/image";
import { isValidAddress } from "../../../utils/isValidAddress";
import { erc20ABI, useAccount, usePublicClient } from 'wagmi'
import { getTokenBalance, getTokenDetail } from "../../../contracts";
import { formatEtherValue } from "../../../utils/formatNumber";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import { jsNumberForAddress } from "react-jazzicon";
import { TraderWalletABI, UsersVaultABI } from "../../../contracts/abis";
import { contractAddress } from "../../../contracts/address";
const UniswapModalContent = ({
  token,
  setToken,
  tokenNext,
  setTokenNext,
  first,
  second,
  closeModal
}) => {
  const [searchData, setSearchData] = useState("");
  const { address } = useAccount();
  const [isLoad, setLoad] = useState(false);
  const [tokenDataArray, setTokenDataArray] = useState(tokenInfoData);

  const search = async (e) => {
    const val = e;
    setSearchData(val);
    if(isValidAddress(val) && address !== undefined) {
      setLoad(true);
      try {
        const token = await getTokenDetail(val);
        const balance = await getTokenBalance(val);
        if (token?.tokenName !== undefined && balance !== undefined) {
          const newToken = [
            {
              id: 0,
              name: token.tokenName,
              shortName: token.tokenSymbol,
              image: undefined,
              address: val,
              balance: balance
            }
          ];
          setTokenDataArray(newToken);
        }
        setLoad(false);
      } catch(err) {
        setLoad(false);
        console.log(err);
      }
    } 
  };

  useEffect(() => {
    const dataOfToken = tokenDataArray.filter((e) => {
      const uppercase = e?.name?.toUpperCase();
      const lowercase = e?.name?.toLowerCase();
      const uppercase1 = e?.shortName?.toUpperCase();
      const lowercase1 = e?.shortName?.toLowerCase();

      return (
        e.name == searchData ||
        e.name.startsWith(searchData) ||
        e.shortName == searchData ||
        e.shortName.startsWith(searchData) ||
        uppercase.startsWith(searchData.toUpperCase()) ||
        lowercase.startsWith(searchData.toLowerCase()) ||
        uppercase1.startsWith(searchData.toUpperCase()) ||
        lowercase1.startsWith(searchData.toLowerCase())
      );
    });
    setTokenDataArray(dataOfToken);
    if (searchData === "") {
      setTokenDataArray(tokenInfoData);
    }
  }, [searchData]);

  // useEffect(() => {
  //   setData(tokenInfoData);
  // }, []);

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <p className="font-semibold my-[2px] text-[18px]">
          Select a Token
        </p>
        <CloseIcon
          className="cursor-pointer"
          onClick={() => {
            closeModal();
          }}
        />
      </div>
      <Search
        className="mx-4"
        searchToken={(e) => {
          search(e);
        }}
      />
      <div className="overflow-y-auto h-[370px] mb-[10px] scroll">
        {tokenDataArray.map((e) => {
          return (
            <TokenDetails onClick={() => {
              if (first === true) {
                setToken(e);
              } else if (second === true) {
                setTokenNext(e);
              }
              closeModal();
            }} image={e.image} name={e.name} shortName={e.shortName} tokenAddress={e.address} key={e.id} disabled={first ? e === tokenNext : second ? e === token : false} />
          );
        })}
      </div>
    </div>
  );
};

const TokenDetails = ({ onClick, image, name, shortName, tokenAddress, disabled }) => {
  const publicClient = usePublicClient();
  const [balance, setBalance] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchBalances = async () => {
    const trader = await publicClient.readContract({ 
        abi: UsersVaultABI, 
        address: contractAddress.usersVaultAddress, 
        functionName: "traderWalletAddress" 
    });
    console.log("trader: ", trader);
    // const underlyingToken = await publicClient.readContract({ 
    //     abi: TraderWalletABI, 
    //     address: contractAddress.traderWalletAddress, 
    //     functionName: "underlyingTokenAddress" 
    //   });
    if(fetchBalances === undefined) { 
      setBalance(0) 
    } else {
      if(shortName === "ETH") {
        const _amount = await publicClient.getBalance({ address: trader });
        const amount = formatEtherValue(_amount);
        console.log("shortName: ", shortName, "Balance: ", amount);
        setBalance(amount);
      } else {
        const _amount = await publicClient.readContract({ 
          address: tokenAddress,
          abi: erc20ABI, 
          functionName: 'balanceOf', 
          args: [trader] 
        });
        const amount = formatEtherValue(_amount);
        console.log("shortName: ", shortName, "Balance: ", amount);
        setBalance(amount)
    }
   }
  }
  useEffect(() => {
    fetchBalances();
  }, [balance, fetchBalances])
  return(
    <div
    className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor pointer"
    onClick={disabled ? undefined : onClick}
  >
    <div className="flex w-[100%] px-4 py-2">
      <div className="flex items-center">
        {
          image === undefined ? <Jazzicon diameter={35} paperStyles={{ marginRight: '20px' }} seed={jsNumberForAddress(tokenAddress)} />:
          <Image
            src={image}
            alt="Token Image"
            className="rounded-[20px] mr-[20px] w-[35px] h-[35px]"
          />
        }
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-[18px]">{name}</p>
        <p className="font-extralight text-[13px]">
          {shortName}
        </p>
      </div>
    </div>
    <div className="mr-[12px] text-[14px]">{balance}</div>
  </div>
  )
}

export default UniswapModalContent;
