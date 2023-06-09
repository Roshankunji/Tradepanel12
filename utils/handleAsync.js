/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { toast } from "react-toastify";

export const handleAsync = (func, setLoad, successMsg) => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
    const promise = new Promise(async function (resolve, reject) {
      try {
        setLoad(true);
        await func();
        resolve('');
      } catch (err) {
        reject(err);
      }
    });
    promise
      .then((result) => {
        toast.success(successMsg);
        setLoad(false);
      })
      .catch((err) => {
        const revertData = err.reason;
        toast.error(`Transaction failed: ${revertData ?? err}`);
        setLoad(false);
      });
  };