import React, { useContext } from 'react';
import "../styles/ProductItem.scss";
import addToCartImage from "@icons/bt_add_to_cart.svg";

import AppContext from '../context/AppContext';

export default function ProductItem({product}) {

    const {addToCart} = useContext(AppContext);

    const handleClick = (item) =>{
        addToCart(item);
    }
   
    return (
            <div className="product-card">
                <img src={product.image} alt={product.title} className="product" />
                <div className="product-info">
                    <div>
                        <p>${product.price}</p>
                        <p>{product.title}</p>
                    </div>
                    <figure onClick={()=> handleClick(product)}>
                        <img src={addToCartImage} alt="cart" />
                    </figure>
                </div>
            </div>
    )
}