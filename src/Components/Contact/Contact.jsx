import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsWhatsapp,BsInstagram,BsSend,BsArrowRight } from 'react-icons/bs';

import './Contact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ldaidad', 
      'template_0fjt6az',
       form.current,
      'vsv1o8h3GCgxnNB-l')
      .then((result) => {
          console.log(result.text);
          alert('Message sent!');
      }, (error) => {
          console.log(error.text);
      });
  };


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
          <div >
          <form className='inputs' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input 
              type="text" 
              name="user_name" 
              placeholder='Insert your name'
            />
            <label>Email</label>
            <input 
              type="email" 
              name="user_email" 
              placeholder='Insert your email'
            />
            <label>Message</label>
            <textarea name="message" cols="30" rows="10"/>
            <button className='buttonSend' type="submit" value="Send">Send <BsSend /></button>
          </form>
            {/* <label>Name</label>
            <input type="text" placeholder='Insert your name'/>
            <label>Email</label>
            <input type="text" placeholder='Insert your email'/>
            <label>Massage</label>
            <textarea name="message" cols="30" rows="10" placeholder='Write your mesage'></textarea> */}
          </div>
          {/* <button className='buttonSend'>Send</button> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;