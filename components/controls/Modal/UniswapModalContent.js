import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Search from "../Input/Search";
import setting from "../../../public/Images/setting.png";
import Image from "next/image";
const UniswapModalContent = () => {
  const [selectEth, setSelectEth] = useState(false);
  const [selectDai, setSelectDai] = useState(false);
  const [selectUsdc, setSelectUsdc] = useState(false);
  const [selectUsdt, setSelectUsdt] = useState(false);
  const [selectWbtc, setSelectWbtc] = useState(false);
  const [selectWeth, setSelectWeth] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <text className="font-semibold my-[15px]">Select a Token</text>
        <CloseIcon className="cursor-pointer" />
      </div>
      <Search />
      {/* <div className="flex flex-wrap">
        <div
          className={
            selectEth === true
              ? "border-[#4C82FB] py-[10px] bg-[#4c82fb3d] px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] font-semibold cursor-pointer"
              : "py-[10px] bg-backgroundColor px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] border-borderColor font-semibold cursor-pointer"
          }
          onClick={() => {
            setSelectEth(!selectEth);
            setSelectDai(false);
            setSelectUsdc(false);
            setSelectUsdt(false);
            setSelectWbtc(false);
            setSelectWeth(false);
          }}
        >
          <Image
            src={setting}
            alt="coin"
            className="w-[20px] h-[20px] mr-[10px] "
          ></Image>
          <text>ETH</text>
        </div>

        <div
          className={
            selectDai === true
              ? "border-[#4C82FB] py-[10px] bg-[#4c82fb3d] px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] font-semibold cursor-pointer"
              : "py-[10px] bg-backgroundColor px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] border-borderColor font-semibold cursor-pointer"
          }
          onClick={() => {
            setSelectDai(!selectDai);
            setSelectEth(false);
            setSelectUsdc(false);
            setSelectUsdt(false);
            setSelectWbtc(false);
            setSelectWeth(false);
          }}
        >
          <Image
            src={setting}
            alt="coin"
            className="w-[20px] h-[20px] mr-[10px] "
          ></Image>
          <text>DAI</text>
        </div>

        <div
          className={
            selectUsdc === true
              ? "border-[#4C82FB] py-[10px] bg-[#4c82fb3d] px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] font-semibold cursor-pointer"
              : "py-[10px] bg-backgroundColor px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] border-borderColor font-semibold cursor-pointer"
          }
          onClick={() => {
            setSelectUsdc(!selectUsdc);
            setSelectEth(false);
            setSelectDai(false);
            setSelectUsdt(false);
            setSelectWbtc(false);
            setSelectWeth(false);
          }}
        >
          <Image
            src={setting}
            alt="coin"
            className="w-[20px] h-[20px] mr-[10px] "
          ></Image>
          <text>USDC</text>
        </div>

        <div
          className={
            selectUsdt === true
              ? "border-[#4C82FB] py-[10px] bg-[#4c82fb3d] px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] font-semibold cursor-pointer"
              : "py-[10px] bg-backgroundColor px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] border-borderColor font-semibold cursor-pointer"
          }
          onClick={() => {
            setSelectUsdt(!selectUsdt);
            setSelectEth(false);
            setSelectDai(false);
            setSelectUsdc(false);
            setSelectWbtc(false);
            setSelectWeth(false);
          }}
        >
          <Image
            src={setting}
            alt="coin"
            className="w-[20px] h-[20px] mr-[10px] "
          ></Image>
          <text>USDT</text>
        </div>

        <div
          className={
            selectWbtc === true
              ? "border-[#4C82FB] py-[10px] bg-[#4c82fb3d] px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] font-semibold cursor-pointer"
              : "py-[10px] bg-backgroundColor px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] border-borderColor font-semibold cursor-pointer"
          }
          onClick={() => {
            setSelectWbtc(!selectWbtc);
            setSelectEth(false);
            setSelectDai(false);
            setSelectUsdc(false);
            setSelectUsdt(false);
            setSelectWeth(false);
          }}
        >
          <Image
            src={setting}
            alt="coin"
            className="w-[20px] h-[20px] mr-[10px] "
          ></Image>
          <text>WBTC</text>
        </div>

        <div
          className={
            selectWeth === true
              ? "border-[#4C82FB] py-[10px] bg-[#4c82fb3d] px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] font-semibold cursor-pointer"
              : "py-[10px] bg-backgroundColor px-[15px] rounded-[20px] mr-[15px] mb-[10px] flex justify-center items-center border-[1px] border-borderColor font-semibold cursor-pointer"
          }
          onClick={() => {
            setSelectWeth(!selectWeth);
            setSelectEth(false);
            setSelectDai(false);
            setSelectUsdc(false);
            setSelectUsdt(false);
            setSelectWbtc(false);
          }}
        >
          <Image
            src={setting}
            alt="coin"
            className="w-[20px] h-[20px] mr-[10px] "
          ></Image>
          <text>WETH</text>
        </div>
      </div> */}
    </div>
  );
};

export default UniswapModalContent;
