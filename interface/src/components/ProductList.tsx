// import React from 'react'
// import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import type { ProductEntry } from '../types';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../services/products';


const ProductList = () => {
  const [products, setProducts] = useState<ProductEntry[]>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  if (products.length === 0)
    return (  
      <div>Loading ... </div>
    );
  return (
    <div>
      <div
        className="mb-5 text-center"
        style={{ fontFamily: 'Avenir Book', fontSize: "45px" }}>
        Product List
      </div>

      <div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          navigation
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          scrollbar={{ draggable: true }}
          className='px-5'
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            970: {
              slidesPerView: 3,
            },
            1250: {
              slidesPerView: 4,
            },

          }}
          
        >
          {products.map(product => (
            <SwiperSlide key={product.id} className='d-flex justify-content-center' >
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}



export default ProductList;