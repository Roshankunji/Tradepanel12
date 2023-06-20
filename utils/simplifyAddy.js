export const simplifyAddress = (address) => {
    if(address === "Loading...") return address;
    return address.slice(0, 4) + "..." + address.slice(-4);
}