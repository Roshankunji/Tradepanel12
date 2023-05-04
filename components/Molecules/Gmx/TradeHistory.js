import React from "react";
import Avatar from "@mui/material/Avatar";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const TradeHistory = (props) => {
  const { date, details } = props;

  return (
    <>
      <div className="flex flex-col justify-between bg-[#16182e] border border-[1px] border-[#1e2136] rounded mb-2 p-3">
        <div className="text-gray-300 text-[12px]">{date}</div>
        <div className="text-gray-300 text-[14px]">{details}</div>
      </div>
    </>
  );
};

export default TradeHistory;
