import React from 'react'
import { useState } from "react";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function Contact() {

  const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
  };

  const [contact, setContact] = useState(defaultContactFormData);
  const [ userData, setUSerData ] = useState(true);

  const { user, API } = useAuth();

  if(userData && user){
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    })

    setUSerData(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message send successfully !");
      }
    } catch (error) {
      toast.alert("Message not send");
      console.log(error);
    }
  };

  return (
    <section>
      <main>
        <div className='section-registration'>
          <div className="registration-form">
            <h1 className='main-heading mb-3'>Contact Form</h1>
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
                    value={contact.username}
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
                    value={contact.email}
                    onChange={handleInput}
                  />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  placeholder="Enter your message"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <br />
              <button type='submit' className='btn btn-submit'>Submit</button>
            </form>
          </div>
        </div>
      </main>

      <hr />

      <section className="section-map mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292644485!2d72.71637190093988!3d19.082502005909245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1726897680921!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  )
}

export default Contact
