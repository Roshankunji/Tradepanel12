import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "./Dashboard";
import LoginPage from "./login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LoginPage />
    </>
  );
}
