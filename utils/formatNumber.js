import { formatEther, formatUnits } from "viem";

export const formatEtherValue = (tokenBalance) => {
    const balance = Number(formatEther(tokenBalance));
    const formattedBalance = Math.floor(balance * 100) / 100;
    return formattedBalance;
}

export const formatUnitValue = (tokenBalance, unit) => {
    const balance = parseFloat(formatUnits(tokenBalance, unit));
    const formattedBalance = Math.floor(balance * 100) / 100;
    return formattedBalance;
}