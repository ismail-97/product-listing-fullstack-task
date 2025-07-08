import { useState } from 'react'
import type { ButtonColor, ProductEntry } from '../types'
import ButtonSet from './ButtonSet';
import Rating from './Rating';

interface ProductCardProps {
    product: ProductEntry
}

const ProductCard = (props: ProductCardProps) => {
    const [currentColor, setCurrentColor] = useState<ButtonColor>("yellow");

    return (
        <div className="card mb-5 border-0 " style={{width: 200}}>
            <img src={props.product.images[currentColor]} className='card-img-top rounded-4' style={{height: 200}}></img>
            
            <div className='card-body px-0'>
          
              <h5 className='card-title' style={{ fontFamily: 'Montserrat Medium', fontSize: "15px" }}>{props.product.name}</h5>
              <div className='card-text mb-2' style={{ fontFamily: 'Montserrat Regular', fontSize: "15px" }}>${props.product.price} USD</div>
                
              <ButtonSet setCurrentColor={setCurrentColor} currentColor={currentColor}/>

              <div className='card-text text-capitalize mb-1' style={{ fontFamily: 'Avenir Book', fontSize: "12px" }}>{currentColor} gold</div>
                
              <Rating score={props.product.popularityScore} id={props.product.id} />
    
            </div>
        </div>
    )
}

export default ProductCard