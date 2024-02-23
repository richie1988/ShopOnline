import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import './cart.css';
import { cartActions } from '../store/cartSlice';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(cartActions.setShowCart(false));
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button type="button" className="close-btn" onClick={handleClose}>
          X
        </button>
      </div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              quantity={item.quantity}
              name={item.name}
              id={item.id}
              price={item.price}
              total={item.totalPrice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;