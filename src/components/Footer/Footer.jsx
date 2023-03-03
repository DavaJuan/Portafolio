import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-sub-cont'>
        <div className='logo-cont'>
          <h3>JPD</h3>
        </div>
        <div className='phone-cont'>
          <p>teléfono</p>
          <h4>+54 1153754846</h4>
        </div>
        <div className='email-cont'>
          <p>correo</p>
          <h4>davalosjuanpablo038@gmail.com</h4>
        </div>
        <div className='redes-cont'>
          <p>nuestras redes</p>
          <img src='' alt="" width='50px'/>
          <img src='' alt="" width='50px'/>
          <img src='' alt="" width='50px'/>
        </div>
      </div>
    </div>
  );
}

export default Footer;