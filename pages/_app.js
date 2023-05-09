import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "../components/Molecules/Layout";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { arbitrum } from "viem/chains";

export default function App({ Component, pageProps }) {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [arbitrum],
    [publicProvider()]
  );

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
  });
  return (
    <div id="root">
      <WagmiConfig config={config}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WagmiConfig>
    </div>
  );
}
