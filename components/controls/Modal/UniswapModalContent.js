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
    </div>
  );
};

export default UniswapModalContent;
