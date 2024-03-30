import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom';

function Profiles() {
    const auth= useAuth();
    const  navigate=useNavigate()
    const handleLogout = () =>{
        auth.logout()
        navigate('/') 
    }
  return (
    <div><label>Profiles {auth.user}</label>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profiles