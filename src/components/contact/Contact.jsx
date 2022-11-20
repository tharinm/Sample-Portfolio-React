import React from 'react'
import contact from './contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"

const Contact = () => {
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
      </div>
    </div>
  </div>
)}

export default Contact