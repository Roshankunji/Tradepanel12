import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PassWord = ({ className }) => {
  const [passWord, setPassWord] = useState("");
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="relative w-[100%] h-[60px]">
        <input
          type={show === true ? "text" : "password"}
          className={`username w-[100%] h-[60px] outline-none rounded-[18px] px-[25px] font-sora ${className}`}
          placeholder="Password"
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        ></input>
        {show === false ? (
          <VisibilityOffIcon
            className="absolute top-4 right-6 cursor-pointer text-gray-500 "
            onClick={() => setShow(!show)}
          />
        ) : (
          <VisibilityIcon
            className="absolute top-4 right-6 cursor-pointer text-gray-500"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
    </>
  );
};

export default PassWord;
