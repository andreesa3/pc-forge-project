// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


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
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            autoComplete="off"
            className="form-input-auth"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required
          />

          <input
            type="password"
            name="password"
            className="form-input-auth"
            placeholder="Password"
            value={password}
            minLength={8}
            onChange={(e) => setPassword(e.target.value)} required
          />

          <button type="submit">Login</button>
        </form>
        <Link to="/register">Signup</Link>
      </div>
    </section>
  );
};

export default Login;
