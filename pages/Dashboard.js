import Image from "next/image";
import { Inter } from "next/font/google";
import BaseCard from "../components/Molecules/Cards/BaseCard";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <div className="flex flex-wrap min-h-screen bg-backgroundColor  py-10 justify-between ">
      <BaseCard
        name="User Valut"
        className="w-[100%] sm:w-[45%] md:w-[30%] bg-gradient-custom-90.76deg"
      />
      <BaseCard
        name="Trader Wallet"
        className="w-[100%] sm:w-[45%] md:w-[30%]"
      />
      <BaseCard
        name="Funds Rollover"
        className="w-[100%] sm:w-[45%] md:w-[30%]"
      />
    </div>
  );
}
