import React from "react";
import FundsRollover from "./FundsRollover";

const BaseCard = ({ name, className }) => {
  return (
    <>
      <div
        className={`bg-[#16182e] rounded-[10px] w-[100%] sm:w-[45%] md:w-[30%] h-[100%] font-sora ${className}`}
      >
        <div className="w-[100%] h-[100%] text-white ">
          <div className="text-white  flex justify-center py-[10px] text-[18px]">
            {name}
          </div>
          <hr className="border-borderColor borderWidth-[0.05px]" />
          {name === "Funds Rollover" ? (
            <div className="px-[25px] py-[15px]">
              <FundsRollover />
            </div>
          ) : (
            <div className="py-[15px] px-[25px]">
              <div className="flex flex-col py-[6px] ">
                <text className="text-[12px] font-sora">Total Funds</text>
                <text className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788
                </text>
              </div>
              <div className="flex flex-col py-[6px] ">
                <text className="text-[12px] font-sora">Unused</text>
                <text className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788
                </text>
              </div>
              <div className="flex flex-col py-[6px] ">
                <text className="text-[12px] font-sora">Deployed</text>
                <text className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788
                </text>
              </div>
              <div className="flex flex-col py-[6px]">
                <text className="text-[12px] font-sora">Current Value</text>
                <text className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788
                </text>
              </div>
              <div className="flex flex-col py-[6px] ">
                <text className="text-[12px] font-sora">Returns</text>
                <text className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788
                </text>
              </div>
              {name === "User Valut" ? (
                <div>
                  <div className="flex flex-col py-[6px] ">
                    <text className="text-[12px] font-sora">Total Shares</text>
                    <text className="text-[18px] font-semibold font-sora">
                      $34,44,44,4788
                    </text>
                  </div>
                  <div className="flex flex-col py-[6px] ">
                    <text className="text-[12px] font-sora">
                      Price Per Share
                    </text>
                    <text className="text-[18px] font-semibold font-sora">
                      $34,44,44,4788
                    </text>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col py-[6px] ">
                  <text className="text-[12px] font-sora">Uv/Tw(Unused)</text>
                  <text className="text-[18px] font-semibold font-sora">
                    1,000.45
                  </text>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BaseCard;
