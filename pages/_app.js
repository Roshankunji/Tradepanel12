import { useRouter } from "next/router";
import "../styles/globals.css";
import '../styles/rainbowkit.css'
import Layout from "../components/Molecules/Layout";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  metaMaskWallet,
  ledgerWallet,
  walletConnectWallet,
  argentWallet,
  braveWallet,
  imTokenWallet,
  omniWallet,
  rainbowWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Provider } from "../provider";
import { arbitrumFork } from "../constants/chains";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [arbitrumFork],
  [publicProvider()]
);

const projectId = 'YOUR_PROJECT_ID';

const { wallets } = getDefaultWallets({
  appName: 'Kunji Finance',
  projectId,
  chains,
});

const KunjiAppInfo = {
  appName: 'Kunji Finance',
};

const KunjiTheme = {
  blurs: {
    modalOverlay: 'none'
  },
  colors: {
    accentColor: '#17191D',
    accentColorForeground: '#FFFFFF',
    actionButtonBorder: '#363A44',
    actionButtonBorderMobile: '#000000',
    actionButtonSecondaryBackground: '#000000',
    closeButton: '#FFFFFF',
    closeButtonBackground: '#23262F',
    connectButtonBackground: '#17191D',
    connectButtonBackgroundError: '#17191D',
    connectButtonInnerBackground: '#17191D',
    connectButtonText: '#FFFFFF',
    connectButtonTextError: '#FFFFFF',
    connectionIndicator: 'green',
    downloadBottomCardBackground: '#FFFFFF',
    downloadTopCardBackground: '#FFFFFF',
    error: '#FFFFFF',
    generalBorder: '#363A44',
    generalBorderDim: '#363A44',
    menuItemBackground: '#363A44',
    modalBackdrop: 'rgba(0,0,0,0.5)',
    modalBackground: '#17191D',
    modalBorder: '#363A44',
    modalText: '#FFFFFF',
    modalTextDim: '#FFFFFF',
    modalTextSecondary: '#FFFFFF',
    profileAction: '#23262F',
    profileActionHover: '#363A44',
    profileForeground: '#17191D',
    selectedOptionBorder: '#363A44',
    standby: '#000000'
  },
  fonts: {
    body: '...'
  },
  radii: {
    actionButton: '...',
    connectButton: '...',
    menuButton: '...',
    modal: '...',
    modalMobile: '...'
  },
  shadows: {
    connectButton: '...',
    dialog: '...',
    profileDetailsAction: '...',
    selectedOption: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    selectedWallet: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    walletLogo: '...'
  }
};

const connectors = connectorsForWallets([
  {
    groupName: 'Select your wallet',
    wallets: [
      metaMaskWallet({ chains, shimDisconnect: true }),
      trustWallet({ chains, shimDisconnect: true }),
      walletConnectWallet({ chains }),
      ledgerWallet({ chains }),
      braveWallet({ chains }),
      argentWallet({ chains }),
      imTokenWallet({ chains }),
      omniWallet({ chains }),
      rainbowWallet({ chains }),
      injectedWallet({ chains, shimDisconnect: true })
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const Disclaimer = ({ Text, Link }) => (
  <p>
    New to Kunji Finance?
    <Link href="https://docs.kunji.finance"> Click here to read Kunji Finance documentation.</Link>
  </p>
);

export default function App({ Component, pageProps }) {
  return (
    <div id="root">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider appInfo={{appName: KunjiAppInfo, disclaimer: Disclaimer}} chains={chains} theme={KunjiTheme}>
          <Provider>
            <Layout>
              <Component {...pageProps} />;
            </Layout>
          </Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}
