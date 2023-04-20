import { Inter } from "next/font/google";
import Login from "../components/Molecules/Login/Login";
const inter = Inter({ subsets: ["latin"] });

export default function LoginPage() {
  return (
    <div className="bg-backgroundColor w-[100%] h-[100%] flex justify-center items-center">
      <Login />
    </div>
  );
}
