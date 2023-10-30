import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { loginCall } from "../context/BackEndCalls";
import { AuthContext } from "../context/AuthContext";
import TopBar from "../components/TopBar";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="top-bar">
        <TopBar/>
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="title">LOGIN</h2>
        <form onSubmit={handleClick}>
          <input
            className="input-email"
            type="email"
            placeholder="EMAIL"
            ref={email}
            required
          />
          <input
            className="input-password"
            type="password"
            placeholder="******"
            ref={password}
            required
          />
          <button className="login-button" type="submit">{isFetching ? "LOGGING IN" : "LOG IN"}</button>
        </form>

        <p className="signup-login">
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;