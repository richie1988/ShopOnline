import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './cart.css';
import { cartActions } from '../store/cartSlice';

const CartItem = ({
  name, quantity, total, price, id,
}) => {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      }),
    );
  };
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>
        $
        {price}
        /-
      </p>
      <p>
        x
        {quantity}
      </p>
      <article>
        Total $
        {total}
      </article>
      <button type="button" className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button type="button" className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartItem;
