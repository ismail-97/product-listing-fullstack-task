import express from 'express';
import { getProducts } from '../services/productService';

const router = express.Router();

router.get('/', async (req, res) => {
    const { minPrice, maxPrice, popularityScore } = req.query;
    const min = parseFloat(minPrice as string) || 0;
    const max = parseFloat(maxPrice as string) || Infinity;
    const popularity = parseFloat(popularityScore as string) || 0;

    const products = await getProducts();

    const filteredProducts = products.filter(p =>
        p.price >= min && p.price <= max && p.popularityScore >= popularity
    );

    res.json(filteredProducts);
});

export default router;