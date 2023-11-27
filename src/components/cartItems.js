import React from "react";
import CartItem from "./cartItem";
import "./cart.css";
import {useSelector} from 'react-redux'
const CartItems = () => {
    const cartItems = useSelector(state => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item)=>(
            <li key={item.id}>
            {" "}
            <CartItem 
            quantity={item.quantity}
            name={item.name}
             id={item.id} 
             price={item.price} 
             total={item.totalPrice}/>
            {" "}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;