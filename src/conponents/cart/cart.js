import React from 'react';
import './cart.css';

const Cart = (props) => {
    const { title, img, subject, price, time} = props.services;

    return (
        <div className="col-lg-4 col-sm-12 col-md-6 cart-box">
            <div className="cart">
                <div className="cart-img">
                    <img className="img-thumbnail" src={img} alt="" />
                </div>
                <h1>{title}</h1>
                <h4>{subject}</h4>
                <h1>Time : {time} Days</h1>
                <h5>Cost : {price}$</h5>
                <button type="button" className="btn btn-primary cart-button">Add To Cart</button>
            </div>
        </div>
    );
};

export default Cart;