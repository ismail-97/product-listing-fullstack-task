import dotenv from 'dotenv';
import cors from 'cors';
import express from "express";
import productRouter from './routes/products';
import { errorHandler } from './middlewares/errorMiddleware';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api/products', productRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});