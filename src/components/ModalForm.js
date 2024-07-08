
import { useState } from "react";
import React from 'react'

function ModalForm() {

   
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [location, setLocation] = useState("")
    

    const handleNameChange = e => {
      setName(e.target.value)
    }
    const handleEmailChange = e => {
      setEmail(e.target.value)
    }
    const handlePhoneChange = e => {
      setPhone(e.target.value)
    }
    const handleMessageChange = e => {
      setMessage(e.target.value)
    }
    const handleLocationChange = e => {
      setLocation(e.target.value)
    }


    const handleSubmit = async e => {
      e.preventDefault()
      const data = new FormData();
      data.append("name",name);
      data.append("email",email);
      data.append("phone",phone);
      data.append("message",message);
      data.append("location",location);
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
              <input placeholder="Name" type="text" value={name} onChange={handleNameChange}/>
              <input placeholder="Email" type="email" value={email} onChange={handleEmailChange} />
              <input placeholder="Phone Number" type="tel" value={phone} onChange={handlePhoneChange}/>
              <input placeholder="Location/Area" type="text" value={location} onChange={handleLocationChange}/>
              <input placeholder="Message" type="text" value={message} onChange={handleMessageChange}/>
              <input type="submit" />
            </form>
          </div>
        </div>
        </>
      )
}

export default ModalForm    
