import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
  
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });

      // console.log(response);
      const res_data = await response.json();
      console.log("Response from server", res_data.extraDetails);
      
      if(response.ok){
        //stored the token in the localstoreage
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token", res_data.token);  -->we cant you it because we need to use each and every time for that we to create the functions
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
        toast.success("Registration Successful !");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }

    }catch (error) {
      console.log("register", error);
    }
    
  };

  return (
    <section>
      <main>
        <div className='section-registration'>
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
      </main>
    </section>
  )
}

export default Register
