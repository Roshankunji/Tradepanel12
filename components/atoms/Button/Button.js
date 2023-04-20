import React from "react";

const Button = ({ children, className, onClick, type, disabled, id }) => {
  function handleClick(e) {
    if (onClick) {
      onClick(e);
    }
  }
  return (
    <>
      <button
        type={type}
        disabled={disabled ? disabled : false}
        className={` rounded-[18px] text-[18px] py-[16px] px-[19px]   ${
          disabled ? "opacity-50" : ""
        } ${className} `}
        onClick={handleClick}
        id={id}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
