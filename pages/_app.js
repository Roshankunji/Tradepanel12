import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "../components/Molecules/Layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // useEffect(() => {
  //   if (router && router.pathname === "/") {
  //     router.push("/Dashboard");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router && router.pathname]);
  return (
    <div id="root">
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </div>
  );
}
