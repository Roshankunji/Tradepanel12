import React from "react";
import Image from "next/image";
import kunjiname from "../../../public/Images/kunjiname.png";
import Button from "../../atoms/Button/Button";
import UserEmail from "../../controls/Input/UserEmail";
import PassWord from "../../controls/Input/PassWord";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col md:w-[45%] sm:w-[60%] w-[80%] h-[100%] bg-backgroundColor">
        <div className="w-[100%] h-[100%] flex justify-center items-center">
          <Image
            src={kunjiname}
            alt="kunjilogo"
            className="lg:w-[186px] md:w-[120px] sm:w-[90px] w-[100px] lg:h-[57px] md:h-[40px] sm:h-[40px] mb-[20px] "
          />
        </div>
        <div className="px-[45px] py-[35px] rounded-[24px] card">
          {/* bg-gradient-to-r from-[#000033] from-30% to-[#00001a] to-100% */}
          <div>
            <div className="mb-[15px] flex flex-col">
              <text className="text-white mb-[10px] ml-[10px] font-sora">
                Email Address
              </text>
              <UserEmail className="bg-darkBlueBlack text-white" />
            </div>
            <div className="mb-[40px] flex flex-col">
              <text className="text-white mb-[10px] ml-[10px] font-sora">
                Password
              </text>
              <PassWord className="bg-darkBlueBlack text-white" />
            </div>
            <Button
              className="bg-primary w-[100%] text-white font-sora"
              onClick={() => {
                router.push("/Dashboard");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
