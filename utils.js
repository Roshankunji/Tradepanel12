// import { ethers } from "ethers";
// import React, { useEffect } from "react";
// import { contractAddress, ABI } from "./contract.js";

// let provider;
// let contract;

// useEffect(async () => {
//   if (
//     typeof window.ethereum !== "undefined" ||
//     typeof window.web3 !== "undefined"
//   ) {
//     provider = new ethers.providers.Web3Provider(window.ethereum);
//     contract = new ethers.Contract(contractAddress, ABI, provider);

//     // other stuff using provider here
//   }
// }, []);
// // const provider = new ethers.BrowserProvider(window.ethereum);
// // const contract = new ethers.Contract(contractAddress, ABI, provider);
// export { provider, contract };
