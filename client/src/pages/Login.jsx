import React from 'react'
import { useState } from "react";

function Login() {

  const [user, setUser] = useState({
    email: "",
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
          <div className="registration-form">
            <h1 className='main-heading mb-3'>Login Form</h1>
            <br />
            <form onSubmit={handleSubmit}>
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
              <button type='submit' className='btn btn-submit'>Login</button>
            </form>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Login
