import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Search from "../Input/Search";
import tokenData from "../../controls/Dropdown/TokenData.json";
import Image from "next/image";
const UniswapModalContent = ({
  tokenData1,
  tokenData2,
  closeModal,
  first,
  second,
}) => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);
  const search = (e) => {
    setSearchData(e);
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
      <div className="overflow-y-auto h-[370px] mb-[10px] scroll">
        {data.map((e) => {
          return (
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor"
              key={data.id}
              onClick={() => {
                if (first === true) {
                  tokenData1(e);
                } else if (second === true) {
                  tokenData2(e);
                }

                closeModal();
              }}
            >
              <div className="flex w-[100%] px-4 py-2">
                <div className="flex items-center">
                  <Image
                    src={`data:image/png;base64,${e.image}`}
                    alt="Token Image"
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
