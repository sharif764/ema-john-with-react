import React from 'react';
import useProducts from '../../hooks/Useproducts';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import useCart from '../useCart'
const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    console.log(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <Review key={product.key} handleRemove={handleRemove} product={product}></Review>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;