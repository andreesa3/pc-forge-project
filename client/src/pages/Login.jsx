// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Button from '../components/home-components/Button'

import emailIcon from '../assets/icons/login-register/email.svg';
import passwordIcon from '../assets/icons/login-register/password.svg';
import googleIcon from '../assets/icons/login-register/google.svg';
import appleIcon from '../assets/icons/login-register/apple.svg';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3050/login', { email, password })
      .then(result => {
        console.log(result)
        if (result.data === "Success") {
          navigate('/');
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <section>
      <div className='wrapper'>

        <form onSubmit={handleLogin} className="user-form">
          <h1>Accedi</h1>
          <div className="flex-column">
            <label>Email</label>
            <div className="inputForm">
              <img src={emailIcon} alt="email-icon" />
              <input
                type="email"
                name="email"
                autoComplete="off"
                className="form-input-auth"
                placeholder="Indirizzo email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          <div className="flex-column">
            <label>Password</label>
            <div className="inputForm">
              <img src={passwordIcon} alt="password Icon" />
              <input
                type="password"
                name="password"
                className="form-input-auth"
                placeholder="Inserisci password"
                value={password}
                minLength={8}
                onChange={(e) => setPassword(e.target.value)} required
              />
            </div>
          </div>

          <div className="flex-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '.25rem', marginTop: '.5rem' }}>
              <input type="radio" />
              <label>Ridordami</label>
            </div>
            <span className="span">Password dimenticata?</span>
          </div>

          <button className="btn form-submit">Registra</button>

          <p className="p">Non hai un account? <Link to='/register' className="span">Registrati</Link></p>
          <p className="p line">O accedi</p>

          <div className="flex-row">
            <button className="btn google">
              <img src={googleIcon} alt="google icon" />
              Google
            </button>
            <button className="btn apple">
              <img src={appleIcon} alt="apple-icon" />
              Apple
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
