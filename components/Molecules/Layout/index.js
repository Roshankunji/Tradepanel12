import BasicLayout from "./BasicLayout";
import MainLayout from "./MainLayout";
import HomepageLayout from "./HomepageLayout";
import LayoutMain from "./LayoutMain";
import { useRouter } from "next/router";
import { Basic } from "next/font/google";

export default function Layout({ children }) {
  const router = useRouter();
  switch (router.pathname) {
    case "/login":
      return <BasicLayout>{children}</BasicLayout>;
    case "/verify":
      return <BasicLayout>{children}</BasicLayout>;
    case "/register":
      return <BasicLayout>{children}</BasicLayout>;
    case "/forgotPassword":
      return <BasicLayout>{children}</BasicLayout>;
    case "/otp":
      return <BasicLayout>{children}</BasicLayout>;
    case "/referral":
      return <BasicLayout>{children}</BasicLayout>;
    case "/waitingList":
      return <BasicLayout>{children}</BasicLayout>;
    case "/getearlyaccess":
      return <BasicLayout>{children}</BasicLayout>;

    case "/Dashboard":
      return <HomepageLayout>{children}</HomepageLayout>;
    case "/GMX":
      return <HomepageLayout>{children}</HomepageLayout>;
    case "/Uniswap":
      return <HomepageLayout>{children}</HomepageLayout>;

    case "/":
      return <BasicLayout isFullWidth={true}>{children}</BasicLayout>;
    default:
      return <MainLayout>{children}</MainLayout>;
  }
}
