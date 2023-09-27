import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../Styles/Contact.css'

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!name || !message) {
            setErrorMessage('Please provide your name and message');
        }

        setName('');
        setMessage('');
        setEmail('');
    };

    return (
      <div className = "formArea">
        <p>Please reach out to me for further information</p>
        <form id="contactForm">
          <input
          id = "email"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          />
          <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          />
        </form>
        <textarea
          value={message}
          form="contactForm"
          name="message"
          rows="3"
          cols="55"
          onChange={handleInputChange}
          placeholder="message"
        />
        <br />
        <br />
        <button form="contactForm" type="button" onClick={handleFormSubmit}>Submit</button>
      
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    );
}