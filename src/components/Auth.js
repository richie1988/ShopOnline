import React from "react";
import{useDispatch} from 'react-redux';
import { login } from "../store/authSlice"; // Import login action, not authActions

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(handleSubmit)); // Dispatch the login action
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;