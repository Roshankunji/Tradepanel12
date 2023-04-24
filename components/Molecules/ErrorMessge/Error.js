import React from "react";

const Error = ({ children, className }) => {
  return (
    <>
      <div className={`text-red-600 ${className}`}>{children}</div>
    </>
  );
};

export default Error;
