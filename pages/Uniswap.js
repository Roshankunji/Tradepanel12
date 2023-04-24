import React from "react";
import Image from "next/image";
import setting from "../public/Images/setting.png";
import paper from "../public/Images/paper.png";
import Button from "../components/atoms/Button/Button";
import SouthIcon from "@mui/icons-material/South";
import { useState } from "react";
import DrawerC from "../components/controls/SideDrawer/SideDrawer";
import Avatar from "@mui/material/Avatar";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import TokenInfo from "../components/Molecules/Uniswap/TokenInfo";

const Uniswap = () => {
  const [totalProfitLoss, setTotalProfitLoss] = useState("loss");
  const [totalTokenAmount, setTotalTokenAmount] = useState();
  const [walletAddress, setWalletAddress] = useState("0x5175...526A");
  let tokens = [
    {
      tokenName: "Tether USD",
      tokenAmount: 10.75,
      dollarValue: 10.75,
      tokenSymbol: "USDT",
      percentChange: 0.05,
      profitLoss: "loss",
    },
    {
      tokenName: "USD Coin",
      tokenAmount: 10.35,
      dollarValue: 10.36,
      tokenSymbol: "USDC",
      percentChange: 0.07,
      profitLoss: "profit",
    },
    {
      tokenName: "Ethereum",
      tokenAmount: 0.003,
      dollarValue: 4.86,
      tokenSymbol: "ETH",
      percentChange: 1.33,
      profitLoss: "loss",
    },
  ];

  useState(() => {
    setTotalTokenAmount(
      tokens.map((item) => item.dollarValue).reduce((prev, next) => prev + next)
    );
  }, []);

  return (
    <>
      <div className="ml-auto w-[100px]">
        <DrawerC
          anchor="right"
          wallet={
            <div className="flex py-[7px] px-[12px]">
              <Avatar
                sx={{ width: 25, height: 25 }}
                src={""}
                alt="wallet"
                className="mr-2"
              />
              <div className="text-[16px] font-medium text-white">
                {walletAddress}
              </div>
            </div>
          }
          content={
            <div className="px-[20px] py-[16px]">
              <div>
                <div className="text-white text-[36px] font-medium">
                  ${totalTokenAmount}
                </div>
                <div className="flex items-center text-gray-400 text-[15px] font-medium">
                  {totalProfitLoss === "loss" ? (
                    <SouthEastIcon className="text-red-400 text-[16px] mr-[1px]" />
                  ) : (
                    <NorthEastIcon className="text-green-400 text-[16px] mr-[1px]" />
                  )}
                  <div className="">$0.06</div>
                  <div className="ml-1">(0.24%)</div>
                </div>
              </div>
              <div className="text-white text-[15px] font-bold mt-5 mb-3">
                Tokens
              </div>
              {tokens.map(function (e) {
                return (
                  <TokenInfo
                    key={""}
                    tokenName={e.tokenName}
                    tokenAmount={e.tokenAmount}
                    dollarValue={e.dollarValue}
                    tokenSymbol={e.tokenSymbol}
                    percentChange={e.percentChange}
                    profitLoss={e.profitLoss}
                  />
                );
              })}
            </div>
          }
          button={
            <div className="flex justify-end cursor-pointer pt-3">
              <div className="flex py-[7px] px-[12px] border border-gray-600 rounded-full">
                <Avatar
                  sx={{ width: 25, height: 25 }}
                  src={""}
                  alt="wallet"
                  className="mr-2"
                />
                <div className="text-[16px] font-medium">{walletAddress}</div>
              </div>
            </div>
          }
        />
      </div>

      {/* <SideDrawer openPanel={openPanel} btn="Open">
        <div className="w-[30%]">Hello</div>
      </SideDrawer> */}
      <div className="flex min-h-screen flex justify-center flex-col items-center bg-backgroundColor text-white ">
        {" "}
        <div className="w-[573px]  px-[20px] bg-darkBlueBlack1">
          <div className="flex justify-between  items-center py-[15px]">
            <div className="font-semiboold">swap</div>
            <div className="flex">
              <Image
                src={setting}
                alt="setting"
                className="w-[27px] h-[27px]"
              />
              <Image
                src={paper}
                alt="paper"
                className="w-[27px] h-[27px] ml-[20px]"
              />
            </div>
          </div>
          <div className="flex flex-col  relative w-[100%] z-1">
            <div className="flex justify-between py-[20px] px-[15px] mb-[8px] card">
              <div>
                <div className="mb-[15px]">5</div>
                <div>45.00</div>
              </div>
              <div>
                <div className="mb-[15px]">dropdown</div>
                <div>
                  Balance : 13.83 <span>Max</span>
                </div>
              </div>
            </div>
            <div className="rounded-[5px]  w-[40px] flex justify-center items-center py-[5px] absolute top-[80%] left-[50%] border-darkBlueBlack1 border-[4px] card1 z-2 ">
              <SouthIcon></SouthIcon>
            </div>
          </div>

          <div className="flex justify-between py-[20px] px-[15px] mb-[10px] card z-1">
            <div>
              <div className="mb-[15px]">5</div>
              <div>45.00</div>
            </div>
            <div>
              <div className="mb-[15px]">dropdown</div>
              <div>
                Balance : 13.83 <span>Max</span>
              </div>
            </div>
          </div>
          <Button className="bg-primary w-[100%]">Swap</Button>
        </div>
      </div>
    </>
  );
};

export default Uniswap;
