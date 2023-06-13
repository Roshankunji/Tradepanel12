import { toast } from "react-toastify";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction, erc20ABI } from "wagmi";
import { useStore } from "../context/StoreContext";

export const useApproveToken = (tokenAddress, approveFor) => {
    const max_allow = '115792089237316195423570985008687907853269984665640564039457584007913129639934';
    const { setApproveLoad } = useStore();
    const { config } = usePrepareContractWrite({
        address: tokenAddress,
        abi: erc20ABI,
        functionName: 'approve',
        args: [approveFor, max_allow]
    });
    const { write, data } = useContractWrite({
        ...config,
        onSuccess() {
            toast.dismiss();
            toast.loading("Approving token...");
        },
        onError() {
            toast.dismiss();
            toast.error("Failed to approve token!");
            setApproveLoad(false);
        }
    });
    useWaitForTransaction({
        hash: data?.hash,
        onError() {
            toast.dismiss();
            toast.error("Failed to approve token!");
            setApproveLoad(false);
        },
        onSuccess() {
            toast.dismiss();
            toast.success("Successfully approved token!");
            setApproveLoad(false);
        }
    });
    
    return [ write ];
}