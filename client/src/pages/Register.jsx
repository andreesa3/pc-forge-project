import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Button from '../components/home-components/Button';
import { toast } from "react-toastify";
import emailIcon from '../assets/icons/login-register/email.svg';
import passwordIcon from '../assets/icons/login-register/password.svg';
import googleIcon from '../assets/icons/login-register/google.svg';
import appleIcon from '../assets/icons/login-register/apple.svg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error(
        `La password non corrisponde alla conferma password`,
        {
          position: "bottom-left",
        }
      );
    } else {
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
    }
  };



  return (
    <section>
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="user-form">
          <h1>Crea un account</h1>
          <div className="flex-column">
            <label>Nome</label>
            <div className="inputForm">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="21" viewBox="0 0 72 72" version="1.1"><path d="M 30.379 8.437 C 19.744 13.065, 18.790 31.220, 28.906 36.451 C 35.494 39.858, 44.418 37.643, 48.040 31.701 C 55.800 18.975, 43.473 2.738, 30.379 8.437 M 26.500 46.911 C 14.781 50.165, 8.667 55.362, 10.607 60.418 C 11.538 62.844, 60.752 62.810, 61.683 60.383 C 64.889 52.028, 41.006 42.884, 26.500 46.911" stroke="none" fill-rule="evenodd"/></svg>
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
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          <div className="flex-column">
            <label>Password</label>
            <div className="inputForm">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
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

          <div className="flex-column">
            <label>Conferma Password</label>
            <div className="inputForm">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
              </svg>

              <input
                type="password"
                name="confirmPassword"
                className="form-input-auth"
                placeholder="Conferma password"
                value={confirmPassword}
                minLength={8}
                onChange={(e) => setConfirmPassword(e.target.value)} required
              />
            </div>
          </div>

          <button  className="btn form-submit">Registra</button>

          <p className="p">Hai già un account? <Link to='/login' className="span">Login</Link></p>
        </form>
      </div>
    </section>
  )
}


export default Register;