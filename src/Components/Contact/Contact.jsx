import React from 'react';
import { BsWhatsapp,BsInstagram,BsSend,BsArrowRight } from 'react-icons/bs';

import './Contact.css';

const Contact = () => {
  return (
    <div className='contAll'>
      <h3>Contact Me</h3>
      <div className='contactGrid'>
        <div className='contacts'>
          <h4>Talk to Me</h4>
          <div className='contact'>
            <BsInstagram className='ContInco'/>
            <p className='pName'>Instagram</p>
            <p>@jpd_web_developer.23</p>
            <p>Check my Instagram <BsArrowRight /></p>
          </div>
          <div className='contact'>
            <BsWhatsapp className='ContInco'/>
            <p className='pName'>WhatsApp</p>
            <p>+54 1153754846</p>
            <p>Write me <BsArrowRight /></p>
          </div>
        </div>
        <div className='form'>
          <h4>Send me an e-mail</h4>
          <div className='inputs'>
            <label>Name</label>
            <input type="text" placeholder='Insert your name'/>
            <label>Email</label>
            <input type="text" placeholder='Insert your email'/>
            <label>Massage</label>
            <textarea name="message" cols="30" rows="10" placeholder='Write your mesage'></textarea>
          </div>
          <button className='buttonSend'>Send <BsSend /></button>
        </div>
      </div>
    </div>
  );
}

export default Contact;