import axios from 'axios';
import type { ProductEntry } from '../types';

export const getProducts = async (): Promise<ProductEntry[]> => {
    const response = await axios.get<ProductEntry[]>("/api/products");
    return response.data;
}