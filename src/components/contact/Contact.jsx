import React from 'react'
import contact from './contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import{useRef ,useState} from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  const formRef =useRef()
  const [done , setDone]=useState(false)
  const handleSubmit =(e)=>{
    e.preventDefault()

    emailjs.sendForm('service_97du7ob', 'template_6vx8g3u', formRef.current, '5wF2L3CDnTcDPlPod')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="c">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Let's discuss your project</h1>
        <div className="c-info">
          <div className="c-info-item">
            <img src={Phone} alt="" className="c-icon" />
            +1 1234 556 75
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={Email} alt="" />
            contact@ltes.dev
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={Address} alt="" />
            245 King Street, Touterie Victoria 8520 Australia
          </div>
        </div>
      </div>
      <div className="c-right">
        <p className="c-desc">
          <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' name="user-name"/>
          <input type="text" placeholder='Subject' name="user-subject"/>
          <input type="text" placeholder='Email' name="user-email"/>
          <textarea rows='5' placeholder='Message' name='message'></textarea>
          <button>Submit</button>
          {done && "Thank you"}
        </form>
      </div>
    </div>
  </div>
)}

export default Contact