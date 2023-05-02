import React, { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
const Gmx = () => {
  const [toggle, setToggle] = useState("Long");
  const [marketPay, setMarketPay] = useState(null);
  const toggleHandler = (type) => {
    setToggle(type);
  };
  return (
    <>
      <div className="flex justify-end">
        <div className="w-[100%] flex  my-[10px]">
          <div className="w-[68%]"></div>
          <div className="w-[32%]">
            <div className="flex">
              <div onClick={() => toggleHandler("Long")} className="w-[50%]">
                <div
                  className={
                    toggle === "Long"
                      ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer"
                      : "text-center bg-gray-700 p-2 text-gray-400 border-1 font-medium cursor-pointer"
                  }
                >
                  <TrendingUpIcon className="mr-[5px]" />
                  Long
                </div>
              </div>
              <div onClick={() => toggleHandler("Short")} className="w-[50%]">
                <div
                  className={
                    toggle === "Short"
                      ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer"
                      : "text-center bg-gray-700 p-2 text-gray-400 border-1 font-medium cursor-pointer"
                  }
                >
                  <TrendingDownIcon className="mr-[5px]" /> Short
                </div>
              </div>
            </div>

            <div className="flex my-[10px]">
              <div className="mr-5">Market</div>
              <div>Limit</div>
            </div>

            <div className="my-[10px] flex justify-between">
              <text>pay: 10.00 USDF</text>
              <text>Balance: 13.8788</text>
            </div>
            <div>
              <input
                type="number"
                className="text-[36px] bg-darkBlue w-[100%] outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                value={marketPay}
                placeholder="0"
                onChange={(e) => {
                  setMarketPay(e.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gmx;
