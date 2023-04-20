import React from "react";

export default function BasicLayout({ children, className, isFullWidth }) {
  return (
    <div className="min-h-[100vh] max-h-fit w-full bg-backgroundColor px-10  flex justify-center items-center font-sora">
      {children}
    </div>
  );
}
