import { Box, Button } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { styled } from '@mui/system';
import Image from 'next/image';

export const WalletConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const isReady = mounted && authenticationStatus !== 'loading';
        const hasConnected =
          isReady &&
          account != null &&
          chain != null &&
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <Box
            {...(!isReady && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!hasConnected) {
                return (
                  <CustomButton onClick={openConnectModal} type="button">
                    Connect Wallet
                  </CustomButton>
                );
              }
              if (chain.unsupported ?? false) {
                return (
                  <CustomButton onClick={openChainModal} type="button">
                    Wrong network
                  </CustomButton>
                );
              }
              return (
                <Box style={{ display: 'flex', gap: 12 }}>
                  {/* <CustomButton
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <Box
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4
                        }}
                      >
                        {chain.iconUrl != null && (
                          <Image alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} width={12} height={12} />
                        )}
                      </Box>
                    )}
                    {chain.name}
                  </CustomButton> */}
                  <CustomButton onClick={openAccountModal} type="button">
                    {account.displayName}
                    {/* {account.displayBalance != null ? ` (${account.displayBalance})` : ''} */}
                  </CustomButton>
                </Box>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '18px',
  color: '#FFFFFF',
  textTransform: 'none',
  padding: '10px 19px',
  background: "#2054A5 !important",
  fontSize: '18px'
}));
