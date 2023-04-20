import React from "react";
import Nav from "../Nav/Nav";
export default function LayoutMain({ children, className, noNavbar }) {
  return (
    <div className="bg-gray-100 h-full min-h-screen flex justify-center">
      <div
        className={`flex flex-col w-full h-full min-h-screen max-w-screen-2xl ${className}`}
      >
        <Nav className="px-8" />
        <div className="px-8 flex flex-col space-y-4 text-base text-primary_text">
          {children}
        </div>
      </div>
    </div>
  );
}
