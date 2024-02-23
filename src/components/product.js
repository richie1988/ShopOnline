import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cartActions } from '../store/cartSlice';

import './product.css';

const Product = ({
  name, id, imgURL, price,
}) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
    }));
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h3>{name}</h3>
      <p>
        $
        {' '}
        {price}
      </p>
      <button type="button" className="buyBtn" onClick={addToCart}>Buy</button>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;