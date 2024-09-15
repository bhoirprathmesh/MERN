import React from 'react'
import './Register.css';
import { useState } from "react";

function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
  
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <section>
      <main>
        <div className='section-registration'>
          <div className='container'>
            <div className="registration-form">
              <h1 className='main-heading mb-3'>Registration Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      id='username'
                      required
                      autoComplete='off'
                      value={user.username}
                      onChange={handleInput}
                    />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      id='email'
                      required
                      autoComplete='off'
                      value={user.email}
                      onChange={handleInput}
                    />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id='phone'
                      required
                      autoComplete='off'
                      value={user.phone}
                      onChange={handleInput}
                    />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id='password'
                      required
                      autoComplete='off'
                      value={user.password}
                      onChange={handleInput}
                    />
                </div>
                <br />
                <button type='submit' className='btn btn-submit'>Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Register
