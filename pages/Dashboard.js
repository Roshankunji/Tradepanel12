import Image from "next/image";
// import { Inter } from "next/font/google";
import BaseCard from "../components/Molecules/Cards/BaseCard";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./abi.json";

// const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const [name, setName] = useState();
  let walletConnected;
  if (typeof window !== "undefined") {
    walletConnected = localStorage.getItem("walletConnected");
  }
  useEffect(() => {
    (async () => {
      if (walletConnected == true) {
        const addr = "0x824bef9c581f03ffd699b9bfdb9c714ac25f51b1";
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(addr, abi, provider);
        const name = await contract.getBalances();
        console.log("name is", name);
        setName(name);
      } else {
      }
    })();
  }, [walletConnected]);

  return (
    <div className="flex flex-wrap min-h-screen bg-backgroundColor  py-10 justify-between ">
      <BaseCard
        name="User Vault"
        className="w-[100%] sm:w-[45%] md:w-[30%] bg-gradient-custom-90.76deg"
      />
      <BaseCard
        name="Trader Wallet"
        className="w-[100%] sm:w-[45%] md:w-[30%] "
      />
      <BaseCard
        name="Funds Rollover"
        className="w-[100%] sm:w-[45%] md:w-[30%]"
      />
    </div>
  );
}
