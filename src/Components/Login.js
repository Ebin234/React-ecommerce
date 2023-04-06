import React, { useState } from 'react';
import { auth } from '../utils/firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/')
      setError(false)
    }
  })

  return (
    <div className='signup'>
      <h1>LOG IN</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogIn()
      }}>
        {error && <h4>Incorrect Email or Password</h4>}
        <input
          type="email"
          placeholder='Email Address'
          name='email'
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, [e.target.name]: e.target.value })
          }
        />
        <input
          type="password"
          placeholder='Password'
          name='password'
          value={formValues.password}
          onChange={(e) =>
            setFormValues({ ...formValues, [e.target.name]: e.target.value })
          }
        />
        <button>Log In</button>
      </form>
      <Link to={"/signup"}>Sign up ?</Link>
    </div>

  )
}

export default Login;
