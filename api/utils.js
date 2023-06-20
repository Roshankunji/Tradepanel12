import axios from "axios";

const API_KEY = [
    "b01e09d7-8c44-4754-9641-2ed1034d4786",
    "95a5efdd-64b3-4c74-87e7-a0a43ab7fcdf",
    "934ee576-36a6-4091-8a51-cd7fba18992d",
    "654ecc40-eb91-4c23-9e39-44b0550aba0c"
]

function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

export const fetchUSDPrice = async (tokenData) => {
    const random = getRandomNumber();
    if(tokenData === undefined) {
        return 0;
    } else {
        const tokenName = tokenData.shortName;
        const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
        if(tokenName === undefined) {
            return 0;
        } else {
            const response = await axios.get(apiUrl, {
            headers: {
                "X-CMC_PRO_API_KEY": API_KEY[random]
            },
            params: {
                symbol: tokenName,
                convert: 'usd'
            }
            })
            console.log({ response });
            const price = response.data.data[tokenName]["quote"]["USD"]["price"];
            console.log("price: ", price);
            return price;
        }
    }
}