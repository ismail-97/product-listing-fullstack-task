import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const goldPriceURL = "https://api.gold-api.com/price/XAU";
const headers = {
    'Content-Type': 'application/json',
};

export interface GoldPriceResponse {
  name: string;         
  price: number;       
  symbol: string;       
  updatedAt: string;   
  updatedAtReadable: string;
}

export const getPureGoldPrice = async (): Promise<number | undefined> => {
    try {

    const res = await axios.get<GoldPriceResponse>(goldPriceURL, { headers });
    const price = res?.data?.price;
    const price_per_gram = price / 31.1035;

    return Number(price_per_gram.toFixed(2));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return undefined;
  }
};
