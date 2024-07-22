
import { useState } from "react";
import React from 'react'

function ModalForm() {

    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [location, setLocation] = useState("")
    const [isValid, setIsValid] = useState(true);
    

    const handleNameChange = e => {
      setName(e.target.value)
    }
    const handleEmailChange = e => {
      setEmail(e.target.value)
    }
    const handlePhoneChange = e => {
      const { value } = e.target;
      setPhone(e.target.value)
      const indianPhoneNumberRegex = /^[6-9]\d{9}$/;
      setIsValid(indianPhoneNumberRegex.test(value));
    }
    const handleMessageChange = e => {
      setMessage(e.target.value)
    }
    const handleLocationChange = e => {
      setLocation(e.target.value)
    }


    const handleSubmit = async e => {
      e.preventDefault()
      if (isValid && phone) {
        console.log('Phone number is valid!');
      } else {
        alert('Phone number is invalid!');
        return
      }
      const data = new FormData();
      data.append("name",name);
      data.append("email",email);
      data.append("phone",phone);
      data.append("message",message);
      data.append("location",location);
      setButtonDisabled(true);
      try {
        await fetch("https://script.google.com/macros/s/AKfycbzwyxDebYoFdILHijQiW0q97db9o7ASKMHHOH0sqcnu0YtkmhIIGkV-ydI58qd5q-t3/exec", {
          mode: 'no-cors',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
          muteHttpExceptions: true,
        })
        .then((response) => {
          alert('Email sent successfully!', response);
          setButtonDisabled(false);
          console.log('Email sent successfully!', response);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          setLocation('');
        })
      } catch (err) {
        console.log(err)
      }
    }    

      return (
        <>
        <div className="modalapp-form">
          <div className='modal-container'>
            <form id="contact-form" className="modal-form" onSubmit={handleSubmit}>
              <input placeholder="Name" type="text" value={name} onChange={handleNameChange} required/>
              <input placeholder="Email" type="email" value={email} onChange={handleEmailChange}  required/>
              <input placeholder="Phone Number" type="tel" value={phone} onChange={handlePhoneChange} required/>
              {!isValid && <span style={{ color: 'red' }}>Invalid phone number</span>}
              <input placeholder="Location/Area" type="text" value={location} onChange={handleLocationChange} required/>
              <input placeholder="Message" type="text" value={message} onChange={handleMessageChange} required/>
              <input disabled={buttonDisabled} type="submit" />
            </form>
          </div>
        </div>
        </>
      )
}

export default ModalForm    
