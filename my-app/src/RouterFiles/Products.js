import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
  const navLinkStyles=({isActive}) =>{
    debugger;
    return {
        fontWeight : isActive ? 'bold' : 'normal',
        color : isActive ? 'blue' : 'gray',
        textDecoration : isActive ? 'none' : 'none'
    }
}
  return (
    <div>
      <div>
        <input type='search' placeholder='Search Placeholder' />
      </div>
      <div>
        <nav style={{padding:5,margin:5}}>
          <NavLink  className='active' style={navLinkStyles} to='new'>NEW</NavLink>
          <NavLink  style={navLinkStyles} to='Featured'>Featured</NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default Products