import React from 'react';

const Review = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            {/* <div>
                {img}
            </div> */}
            <div>
                <h2 className="product-name">{name}</h2>
                <h2>Price : {price}</h2>
                <p>Quantity : {quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default Review;