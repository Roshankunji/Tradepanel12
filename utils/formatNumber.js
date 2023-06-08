import { formatEther } from "viem";

export const formatEtherValue = (tokenBalance) => {
    const balance = Number(formatEther(tokenBalance));
    console.log("adjustedBalance: ", balance)
    const formattedBalance = Math.floor(balance * 100) / 100;
    return formattedBalance;
}