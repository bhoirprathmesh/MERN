import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <header>
        <div className='container'>
            <div className='logo-brand'>
                <NavLink to="/">Website</NavLink>
            </div>
        </div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">signup</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
