import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './auth';

function Navbar() {
    const navLinkStyles=({isActive}) =>{
        debugger;
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            color : isActive ? 'blue' : 'gray',
            textDecoration : isActive ? 'none' : 'none'
        }
    }
    const auth=useAuth();
  return (
    <div>
        {/* <nav style={{padding:5,margin:5}}>
            <Link style={{padding:5,margin:5}} to='/' >Home</Link>
            <Link style={{padding:5,margin:5}} to='/about'>About</Link>
        </nav> */}

        <nav style={{padding:5,margin:5}}>
            <NavLink  style={navLinkStyles} to='/' >Home</NavLink>
            <NavLink  style={navLinkStyles} to='Userdetails' >Userdetails</NavLink>
            <NavLink style={navLinkStyles} to='about'>About</NavLink>
            <NavLink style={navLinkStyles} to='product'>Product</NavLink>
            <NavLink style={navLinkStyles} to='Profiles'>Profiles</NavLink>
            {
            !auth.user && (
                <NavLink style={navLinkStyles} to='Login'>Login</NavLink>
            )
        }
        </nav>
        
    </div>
  )
}

export default Navbar