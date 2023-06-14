import { isValidAddress } from "../utils/isValidAddress";
import { erc20ABI } from "wagmi";
import { arbitrumFork } from "../constants/chains";
import { createPublicClient, http } from 'viem'

let walletClient;
let publicClient;
let userAddress;

const client = createPublicClient({
    chain: arbitrumFork,
    transport: http()
})

export const initializeWeb3 = async (publicClient_, walletClient_, address_) => {
    publicClient = publicClient_;
    walletClient = walletClient_;
    userAddress = address_;
    return true;
};

export const getTokenDetail = async (tokenAddress) => {
    if(isValidAddress(tokenAddress)) {
        const tokenName = await client.readContract({ address: tokenAddress, abi: erc20ABI, functionName: 'name'})
        const tokenSymbol = await client.readContract({ address: tokenAddress, abi: erc20ABI, functionName: 'symbol' })
        return { tokenName, tokenSymbol }
    }
}

export const getTokenBalance = async (tokenAddress) => {
    if(isValidAddress(tokenAddress)) {
        const trader = await publicClient.readContract({ 
            abi: TraderWalletABI, 
            address: contractAddress.traderWalletAddress, 
            functionName: "traderAddress" 
        });
        const tokenBalance = await client.readContract({ address: tokenAddress, abi: erc20ABI, functionName: 'balanceOf', args: [trader] });
        const decimalsData = await client.readContract({ address: tokenAddress, abi: erc20ABI, functionName: 'decimals'});
        const decimals = decimalsData !== undefined ? Number(decimalsData) : 18;
        const balance = tokenBalance !== undefined ? Number(tokenBalance) : 0;
        const adjustedBalance = balance / 10 ** decimals;
        const formattedBalance = Math.floor(adjustedBalance * 100) / 100;
        return formattedBalance;
    }
}

export const isApproved = async (tokenAddress, approveFor) => {
    const _allownace = await client.readContract({ address: tokenAddress, abi: erc20ABI, functionName: 'allowance', args: [userAddress, approveFor] });
    const allowance = _allownace.toString();
    const isAllow = allowance > '100000000000'
    return isAllow;
}