import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Search from "../Input/Search";
import tokenData from "../../controls/Dropdown/TokenData.json";
import Image from "next/image";
const UniswapModalContent = ({ tokenData1, closeModal }) => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);
  const search = (e) => {
    // data(e);
    setSearchData(e);
  };
  useEffect(() => {
    // if (searchData == tokenData.name || searchData == tokenData.shortName) {
    //   console.log("yess filter");
    // }
    // console.log("searchdata", searchData);
    // console.log("tokendata.name", tokenData[0].name);
  }, [searchData, tokenData]);
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <text className="font-semibold my-[2px] text-[18px]">
          Select a Token
        </text>
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
      <div className="overflow-y-auto h-[370px] mb-[10px]">
        {tokenData.map((e) => {
          return (
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor"
              onClick={() => {
                tokenData1(e);
                closeModal();
              }}
            >
              <div className="flex w-[100%] px-4 py-2">
                <div className="flex items-center">
                  <Image
                    src={`data:image/png;base64,${e.image}`}
                    width={35}
                    height={35}
                    className="rounded-[20px] mr-[20px]"
                  />
                </div>
                <div className="flex flex-col">
                  <text className="font-semibold text-[18px]">{e.name}</text>
                  <text className="font-extralight text-[13px]">
                    {e.shortName}
                  </text>
                </div>
              </div>
              <div className="mr-[12px] text-[14px]">0.002571</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UniswapModalContent;
