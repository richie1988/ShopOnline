import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cart.css';
import { cartActions } from '../store/cartSlice';
import BasketIcon from '../imageData/cartIcon.png';

const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div className="cartIcon">
      <button type="button" onClick={showCart}>
        <img src={BasketIcon} alt="cartIcon" />
        :
        {quantity}
        {' '}
        Checkout
      </button>
    </div>
  );
};

export default Cart;