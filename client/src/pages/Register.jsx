import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            className="form-input-auth"
            placeholder="First Name"

            value={name}
            onChange={(e) => setName(e.target.value)} required />

          <input
            type="email"
            name="email"
            autoComplete="off"
            className="form-input-auth"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required />

          <input
            type="password"
            name="password"
            className="form-input-auth"
            placeholder="Password"
            value={password}
            minLength={8}
            onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit">Registra</button>
        </form>
      </div>
    </section>
  )
}

export default Register;