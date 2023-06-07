import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Search from "../Input/Search";
import tokenData from "../../controls/Dropdown/TokenData.json";
import Image from "next/image";
import { isValidAddress } from "../../../utils/isValidAddress";
import { useAccount } from 'wagmi'
import { getTokenDetail } from "../../../contracts";
const UniswapModalContent = ({
  tokenData1,
  tokenData2,
  closeModal,
  first,
  second,
}) => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);
  const { address } = useAccount();
  const [isLoad, setLoad] = useState(false);
  const search = async (e) => {
    const val = e;
    setSearchData(val);
    if(isValidAddress(val) && address !== undefined) {
      setLoad(true);
      try {
        const token = await getTokenDetail(val);
        // const balance = await getTokenBalance(val);
        if (token?.tokenName !== undefined && balance !== undefined) {
          const newToken = [
            {
              id: 0,
              name: token.tokenName,
              shortName: token.tokenSymbol,
              image: undefined,
              address: val,
              // balance: balance.toString()
              balance: 0
            }
          ];
          setData(newToken);
        }
        setLoad(false);
      } catch(err) {
        setLoad(false);
        console.log(err);
      }
    } 
  };

  useEffect(() => {
    const dataOfToken = tokenData.filter((e) => {
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
    setData(dataOfToken);
    if (searchData === "") {
      setData(tokenData);
    }
  }, [searchData]);

  useEffect(() => {
    setData(tokenData);
  }, []);

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
        {data.map((e) => {
          return (
            <TokenDetails onClick={() => {
              if (first === true) {
                tokenData1(e);
              } else if (second === true) {
                tokenData2(e);
              }
              closeModal();
            }} image={e.image} name={e.name} shortName={e.shortName} balance={0.002571} key={e.id} />
          );
        })}
      </div>
    </div>
  );
};

const TokenDetails = ({ onClick, image, name, shortName, balance }) => {
  return(
    <div
    className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor"
    onClick={onClick}
  >
    <div className="flex w-[100%] px-4 py-2">
      <div className="flex items-center">
        <Image
          src={`data:image/png;base64,${image}`}
          alt="Token Image"
          width={35}
          height={35}
          className="rounded-[20px] mr-[20px]"
        />
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
