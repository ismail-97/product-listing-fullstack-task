import { PricedProductEntry } from "../types";
import {generatePricedProducts} from '../data/entries';

export const getProducts = async (): Promise<PricedProductEntry[]> => {
    const pricedProducts = await generatePricedProducts();
    return pricedProducts;
};