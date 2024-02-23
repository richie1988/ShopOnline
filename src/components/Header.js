import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './cart';
import { logout } from '../store/authSlice';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  // eslint-disable-next-line max-len
  const total = useSelector((state) => state.cart.itemsList.reduce((acc, item) => acc + item.totalPrice, 0));

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: 'monospace', fontSize: '30px' }}
            >
              EXTREME TECH SHOP
            </h2>
          </li>
          <li>
            <Cart />
            <div className="total-price">
              <h3>
                Total: $
                {total}
              </h3>
              <button type="button" className="orderBtn">Place Order</button>
            </div>
          </li>
          <li>
            <button type="button" onClick={logoutHandler} className="logout-btn">
              LOGOUT
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;