import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


function SignUp() {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      // console.log(err)
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) navigate('/')
  })

  return (
    <div className='signup'>
      <h1>SIGN UP</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSignIn()
      }}>
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
        <button>Sign Up</button>
      </form>
      <Link to={"/login"}>Login ?</Link>
    </div>
  )
}

export default SignUp;
