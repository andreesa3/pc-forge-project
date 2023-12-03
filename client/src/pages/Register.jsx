import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Button from '../components/home-components/Button';

import emailIcon from '../assets/icons/login-register/email.svg';
import passwordIcon from '../assets/icons/login-register/password.svg';
import googleIcon from '../assets/icons/login-register/google.svg';
import appleIcon from '../assets/icons/login-register/apple.svg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3050/register', { first_name: name, email, password })
      .then(result => {
        console.log(result)
        if (result.status === 201) {
          navigate('/login');
        } else {
          console.error('User not created!');
        }
      })
      .catch(err => console.error(err.response.data));  // Logga il messaggio di errore dal server
  };



  return (
    <section>
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="user-form">
          <h1>Crea un account</h1>
          <div className="flex-column">
            <label>Nome</label>
            <div className="inputForm">
              <img src={emailIcon} alt="text-icon" />
              <input
                type="text"
                name="name"
                className="form-input-auth"
                value={name}
                placeholder="Inserisci nome"
                onChange={(e) => setName(e.target.value)} required
              />
            </div>
          </div>

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

          <button className="btn form-submit">Registra</button>

          <p className="p">Hai già un account? <Link to='/login' className="span">Login</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Register;