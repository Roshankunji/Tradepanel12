import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const search = ({ className }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div
        className={`flex justify-center items-center border-[1px] border-lightBlue py-[10px] px-[10px] rounded-[10px] bg-darkBlueBlack mb-[20px] ${className}`}
      >
        <SearchIcon className="text-primary_text" />
        <input
          type="text"
          className={`username w-[100%] outline-none rounded-[18px] px-[10px] font-sora bg-darkBlueBlack text-white" ${className}`}
          placeholder="Search name or paste address"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};

export default search;
