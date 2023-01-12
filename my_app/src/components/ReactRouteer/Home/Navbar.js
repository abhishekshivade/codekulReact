import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
    padding:"5px"
  }
  return (
    <div className='flex flex-row justify-between p-4 z-50 fixed w-full font-semibold text-lg px-6 bg-white shadow'>
      <ul><li>logo</li></ul>
      <ul className='flex flex-row justify-around w-1/4'>
        <li>
          <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" style={({isActive}) => (isActive ? activeStyle : undefined)}>About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contactUs" style={({isActive}) => (isActive ? activeStyle : undefined)}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/gallary" style={({isActive}) => (isActive ? activeStyle : undefined)}>Gallary</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar