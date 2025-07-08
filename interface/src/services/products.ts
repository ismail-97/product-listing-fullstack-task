import axios from 'axios';
import type { ProductEntry } from '../types';
const apiUrl = import.meta.env.VITE_API_URL;


export const getProducts = async (): Promise<ProductEntry[]> => {
    const response = await axios.get<ProductEntry[]>(`${apiUrl}api/products`);
    return response.data;
}