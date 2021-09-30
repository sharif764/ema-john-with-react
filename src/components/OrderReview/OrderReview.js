import React from 'react';
import useProducts from '../../hooks/Useproducts';
import Cart from '../Cart/Cart';
import useCart from '../useCart'
const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products)
    console.log(products);
    return (
        <div>
            <h2>{products.length}</h2>
            <h3>Cart Length : {cart.length}</h3>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default OrderReview;