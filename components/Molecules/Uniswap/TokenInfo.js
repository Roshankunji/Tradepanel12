import React from "react";
import Avatar from "@mui/material/Avatar";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const TokenInfo = (props) => {
  const {
    tokenName,
    tokenAmount,
    tokenSymbol,
    percentChange,
    dollarValue,
    profitLoss,
  } = props;

  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Avatar
            sx={{ width: 40, height: 40 }}
            src={"/Images/usdcSymbol.png"}
            alt="wallet"
            className="mr-[9px]"
          />
          <div className="flex flex-col">
            <div className="text-gray-200 font-medium">{tokenName}</div>
            <div className="text-gray-500 font-medium">
              {tokenAmount} {tokenSymbol}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-200 font-medium self-end">
            ${dollarValue}
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
