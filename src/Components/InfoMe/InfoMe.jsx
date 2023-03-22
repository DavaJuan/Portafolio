import React from 'react'
import Me from './img/coding2.png.jpeg';
import './InfoMe.css';
import InfoContact from './SubComponents/InfoContact';

const InfoMe = () => {
  return (
    <div className='content-all'>
      <div className='container-infoMe'>
        <p>
            Since 2021 I discovered that programming was something that I really enjoyed practicing and learning more and more. <br/>
            But in 2022 I really started studying programming at the Henry bootcamp. <br/> Learning many new and challenging technologies for me. <br/>
            Among the technologies that I enjoy the most when using them are React, Redux and CSS.
        </p>
        <img src={Me} alt="me" />
      </div>
      <InfoContact />
    </div>
  )
}

export default InfoMe;