import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY;
const goldPriceURL = "https://gold.g.apised.com/v1/latest?metals=XAU&base_currency=USD&currencies=USD&weight_unit=gram";
const headers = {
    'x-api-key': apiKey,
    'Content-Type': 'application/json',
};

export interface GoldPriceResponse {
  status: string;
  data: {
    timestamp: number;
    base_currency: string;
    metals: string;
    weight_unit: string;
    weight_name: string;
    metal_prices: {
      XAU: GoldMetalPrice;
    };
    currency_rates: {
      [currencyCode: string]: number; // e.g., { USD: 1 }
    };
  };
}

export interface GoldMetalPrice {
  open: number;
  high: number;
  low: number;
  prev: number;
  change: number;
  change_percentage: number;
  price: number;
  ask: number;
  bid: number;

  price_24k: number;
  price_22k: number;
  price_21k: number;
  price_20k: number;
  price_18k: number;
  price_16k: number;
  price_14k: number;
  price_10k: number;
}

export const getPureGoldPrice = async (): Promise<number | undefined> => {
    try {

    const res = await axios.get<GoldPriceResponse>(goldPriceURL, { headers });
    const price = res.data?.data?.metal_prices?.XAU?.price_24k;

    return Number(price.toFixed(2));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return undefined;
  }
};
