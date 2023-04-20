import React, { useState } from "react";

const UserEmail = ({ className }) => {
  const [userName, setUserName] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          className={`username w-[100%] h-[60px] outline-none rounded-[18px] px-[25px] font-sora ${className}`}
          placeholder="username@email.com"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};

export default UserEmail;
