import { isValidAddress } from "../utils/isValidAddress";
import { erc20ABI } from "wagmi";
import { arbitrumFork } from "../constants/chains";
import { createPublicClient, http } from 'viem'

let walletClient;
let publicClient;
let address;

const client = createPublicClient({
    chain: arbitrumFork,
    transport: http()
})

export const initializeWeb3 = async (publicClient_, walletClient_, address_) => {
    publicClient = publicClient_;
    walletClient = walletClient_;
    address = address_;
    console.log("publicClient: ", publicClient);
    console.log("walletClient: ", walletClient);
    console.log("address: ", address);
    return true;
};

export const getTokenDetail = async (tokenAddress) => {
    if(isValidAddress(tokenAddress)) {
        console.log("tokenAddress: ", tokenAddress)
        const tokenName = await client.readContract({ address: tokenAddress, abi: erc20ABI, functionName: 'name'})
        const tokenSymbol = await client.readContract({ address: tokenAddress, abi: erc20ABI, functionName: 'symbol' })
        console.log("tokenName: ", tokenName)
        console.log("tokenSymbol: ", tokenSymbol)
        return { tokenName, tokenSymbol }
    }
}

export const getTokenBalance = async (tokenAddress) => {
    if(isValidAddress(tokenAddress)) {
        const tokenBalance = await client.readContract({ address: tokenAddress, abi: erc20ABI, functionName: 'balanceOf', args: [address] });
        console.log('tokenBalance: ', tokenBalance);
        const decimalsData = await client.readContract({ address: tokenAddress, abi: erc20ABI, functionName: 'decimals'});
        const decimals = decimalsData !== undefined ? Number(decimalsData) : 18;
        const balance = tokenBalance !== undefined ? Number(tokenBalance) : 0;
        const adjustedBalance = balance / 10 ** decimals;
        const formattedBalance = Math.floor(adjustedBalance * 100) / 100;
        console.log("formattedBalance: ", formattedBalance)
        return formattedBalance;
    }
}