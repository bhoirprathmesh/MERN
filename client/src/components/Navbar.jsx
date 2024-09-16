import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

function Navbar() {

  const { isLoggedIn } = useAuth();

  return (
    <header>
        <div className='container'>
            <div className='logo-brand'>
                <NavLink to="/">[Website]</NavLink>
            </div>
        </div>
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
            <NavLink to="/service" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
            { isLoggedIn ? ( <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : '')}>Logout</NavLink>
              ) : ( 
                <>
                  <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>Register</NavLink>
                  <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
                </>
              )
            }
        </nav>
    </header>
  )
}

export default Navbar
