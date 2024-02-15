import React from 'react'
import { auth } from '../config/firebase'
import { provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const signupwithGoogle = async () => {
      const result = await signInWithPopup(auth ,provider); 
      navigate('/');
    }
  ;
  return (
    <div>
      
      <button className="btn" onClick={signupwithGoogle}>SignUp with Google</button>
    </div>
  )
}

export default Login
