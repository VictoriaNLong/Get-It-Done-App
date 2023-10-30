import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import TopBar from '../components/TopBar';
import './pages.css'


const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
   
          const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          };
          try {
            await axios.post("/auth/register", user);
            navigate("/login");
          } catch (err) {
            console.log(err);
          }
        
      };

    return (
      <div className='top-bar'>
        <TopBar/>
        <div className='form-container'>
            <div className='form-wrapper'>
                <h2 className='title'>REGISTER</h2>
                <form className='reg-form' onSubmit={handleClick}>
                    <input
                        className='input-name'
                        type="text"
                        ref={username}
                        placeholder='USERNAME'
                        required
                    />
                    <input
                        className='input-email'
                        type="email"
                        ref={email}
                        placeholder='EMAIL'
                        required
                    />
                    <input
                        className='input-password'
                        type="password"
                        ref={password}
                        placeholder='******'
                        required
                    />
                    <button className='signup-button' type='submit'>SIGN UP</button>
                </form>

                <p className='signup-login'>Already have an account?<Link to="/login"> Login</Link></p>

            </div>
        </div>
        </div>
    )
}

export default Register
