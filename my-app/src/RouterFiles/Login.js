import React, { useState } from 'react'
import { useAuth } from './auth';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [user,setuser]=  useState('');
    const  auth=useAuth();
    const navgate=useNavigate();
    const location=useLocation();
    const redirectPath= location.state?.path || '/'

    const handleLogin = ()=>{
        auth.login(user)
        navgate(redirectPath,{replace:true})
    }
  return (
    <div>
        <label>
            Username:{' '}
            <input type='text' onChange={(e)=> setuser(e.target.value)}></input>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login