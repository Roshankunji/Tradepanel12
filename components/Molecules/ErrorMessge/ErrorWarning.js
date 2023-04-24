import React from "react";

const ErrorWarning = ({ children, className }) => {
  return (
    <>
      <div className={`text-yellow-600 ${className}`}>{children}</div>
    </>
  );
};

export default ErrorWarning;
