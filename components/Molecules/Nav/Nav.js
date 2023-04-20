import React, { useEffect, useState } from "react";
import kunjilogo from "../../../public/Images/kunjilogo.png";
import Image from "next/image";
import Button from "../../atoms/Button/Button";
import Dropdown1 from "../../controls/Dropdown/Dropdown";
import Link from "next/link";
import NavModal from "../../controls/Modal/NavModal";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const name = router.pathname.slice(1);

  const [dashFont, setDashFont] = useState(false);
  const [gmsFont, setGmsFont] = useState(false);
  const [uniswapFont, setUniswapFont] = useState(false);

  useEffect(() => {
    if (name == "Dashboard") {
      setDashFont(true);
    } else if (name == "GMX") {
      setGmsFont(true);
    } else if (name == "Uniswap") {
      setUniswapFont(true);
    } else {
      setDashFont(false);
      setGmsFont(false);
      setUniswapFont(false);
    }
  }, [router && router.pathname]);
  return (
    <>
      <div className="bg-backgroundColor text-white py-[20px] px-10 w-[100%] flex justify-between">
        <ul className="flex md:flex-nowrap flex-wrap items-center w-[40%]">
          <Image
            src={kunjilogo}
            alt="kunjilogo"
            className="w-[34px] h-[34px]"
          />
          <li
            className={`mx-[10px] sm:mx-[20px] md:mx-[50px] text-[18px]  ${
              dashFont === true && name === "Dashboard"
                ? "font-semibold text-white"
                : "font-light text-initialNavTextColor font-sora"
            };
              "
            }`}
            onClick={() => {
              setDashFont(true);
              setGmsFont(false);
              setUniswapFont(false);
            }}
          >
            <Link href="/Dashboard">Dashboard</Link>
          </li>
          <li
            className={`mx-[10px] sm:mx-[20px] md:mx-[50px] text-[18px]  ${
              gmsFont === true
                ? "font-semibold text-white"
                : "font-light text-initialNavTextColor font-sora"
            }`}
            onClick={() => {
              setGmsFont(true);
              setDashFont(false);
              setUniswapFont(false);
            }}
          >
            <Link href="/GMX">GMX</Link>
          </li>
          <li
            className={`mx-[10px] sm:mx-[20px] md:mx-[50px] text-[18px]  ${
              uniswapFont === true
                ? "font-semibold text-white"
                : "font-light text-initialNavTextColor font-sora"
            }`}
            onClick={() => {
              setUniswapFont(true);
              setDashFont(false);
              setGmsFont(false);
            }}
          >
            <Link href="/Uniswap">Uniswap</Link>
          </li>
        </ul>
        <div className="flex w-[60%] justify-end md:flex-nowrap flex-wrap">
          <Dropdown1 />
          <NavModal />
        </div>
      </div>
      <hr className="border-borderColor borderWidth-[0.05px]"></hr>
    </>
  );
};

export default Nav;
