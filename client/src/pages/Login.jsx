// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Button from '../components/home-components/Button'

import emailIcon from '../assets/icons/login-register/email.svg';
import passwordIcon from '../assets/icons/login-register/password.svg';
import googleIcon from '../assets/icons/login-register/google.svg';
import appleIcon from '../assets/icons/login-register/apple.svg';


const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3050/login', { email, password })
      .then(result => {
        if (result.data === "Success") {
          setTimeout(() => {
            setIsLoggedIn(true);
            navigate('/');
          }, 1500);
        } else {
          setError(result.data);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <section>
      <div className='wrapper'>

        <form onSubmit={handleLogin} className="user-form">
          <h1>Accedi</h1>
          <div className="flex-column">
            <label>Email</label>
            <div className="inputForm">
              <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
                <g data-name="Layer 3" id="Layer_3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z">
                  </path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                autoComplete="off"
                className="form-input-auth"
                placeholder="Indirizzo email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
          </div>

          <div className="flex-column">
            <label>Password</label>
            <div className="inputForm">
              <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0">
                </path>
              </svg>

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
              <label>Ricordami</label>
            </div>
            <span className="span">Password dimenticata?</span>
          </div>

          <button className="btn form-submit">Accedi</button>

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
