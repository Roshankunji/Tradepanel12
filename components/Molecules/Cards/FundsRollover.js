import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "../../atoms/Button/Button";
import Modal1 from "../../controls/Modal/Modal1";
import Box from "@mui/material/Box";

const label = { inputProps: { "aria-label": "Switch demo" } };

const FundsRollover = () => {
  const [depositShow, setDepositeShow] = useState(false);
  const [withdrawShow, setWithdrawShow] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="font-sora">
        <div
          className="bg-darkBlueBlack1 mb-[20px] py-[15px] px-[25px] rounded-[20px] cursor-pointer"
          onClick={() => {
            setDepositeShow(!depositShow);
          }}
        >
          <div className={"flex justify-between mb-[10px]"}>
            <text className="text-[20px] font-semibold font-sora">
              Deposits
            </text>
            {depositShow === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </div>
          {depositShow === false ? (
            <div className="flex flex-col mb-[10px]">
              <text className="text-[12px] font-sora">Amount</text>
              <text className="text-[18px] font-semibold font-sora">
                $10,000,363
              </text>
            </div>
          ) : (
            ""
          )}

          {depositShow === true && (
            <div>
              <div className="flex flex-col mb-[10px]">
                <text className="text-[12px] font-sora">Amount</text>
                <text className="text-[18px] font-semibold font-sora">
                  $10,000,363
                </text>
              </div>
              <div className="flex flex-col mb-[10px]">
                <text className="text-[12px] font-sora">Mint Shares</text>
                <text className="text-[18px] font-semibold font-sora">
                  $10,000,363
                </text>
              </div>
              <div className="flex flex-col mb-[10px]">
                <text className="text-[12px] font-sora">Share Price</text>
                <text className="text-[18px] font-semibold font-sora">
                  $10,000,363
                </text>
              </div>
              <div className="flex flex-col mb-[10px]">
                <text className="text-[12px] font-sora">Total Requests</text>
                <text className="text-[18px] font-semibold font-sora">
                  $10,000,363
                </text>
              </div>
            </div>
          )}
        </div>
        <div
          className="bg-darkBlueBlack1  mb-[20px] py-[15px] px-[25px] rounded-[20px] cursor-pointer"
          onClick={() => {
            setWithdrawShow(!withdrawShow);
          }}
        >
          <div className={"flex justify-between mb-[10px]"}>
            <text className="text-[20px] font-semibold">Withdrawals</text>
            {withdrawShow === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </div>
          {withdrawShow === false ? (
            <div className="flex flex-col mb-[10px]">
              <text className="text-[12px] font-sora">Amount</text>
              <text className="text-[18px] font-semibold font-sora">
                $10,000,363
              </text>
            </div>
          ) : (
            ""
          )}
          {withdrawShow === true && (
            <div>
              <div className="flex flex-col mb-[10px]">
                <text className="text-[12px] font-sora">Amount</text>
                <text className="text-[18px] font-semibold font-sora">
                  $10,000,363
                </text>
              </div>
              <div className="flex flex-col mb-[10px]">
                <text className="text-[12px] font-sora">Mint Shares</text>
                <text className="text-[18px] font-semibold font-sora">
                  $10,000,363
                </text>
              </div>
              <div className="flex flex-col mb-[10px]">
                <text className="text-[12px] font-sora">Share Price</text>
                <text className="text-[18px] font-semibold font-sora">
                  $10,000,363
                </text>
              </div>
              <div className="flex flex-col mb-[10px]">
                <text className="text-[12px] font-sora">Total Requests</text>
                <text className="text-[18px] font-semibold hover:text-primary underline underline-offset-4 border-b-0 border-[#2054A5] font-sora">
                  $10,000,365
                </text>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between px-[25px]">
          <text className="font-sora">Freeze Request</text>
          <Switch {...label} checked={checked} onChange={handleChange} />
        </div>
        <div className="text-center mt-5">
          <Modal1 control={checked}></Modal1>
        </div>
      </div>
    </>
  );
};

export default FundsRollover;
