import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice'; // Import login action, not authActions

import './Auth.css';

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(handleSubmit)); // Dispatch the login action
  };

  return (
    <div className="container">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">
          EMAIL
          <input type="text" name="id" id="id" />
        </label>
        <label htmlFor="password">
          PASSWORD
          <input type="password" name="password" id="password" />
        </label>
        <button className="login-btn" type="submit">
          ENTER
        </button>
      </form>
    </div>
  );
};

export default Auth;
