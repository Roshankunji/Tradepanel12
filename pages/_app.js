import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "../components/Molecules/Layout";

export default function App({ Component, pageProps }) {
  return (
    <div id="root">
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </div>
  );
}
