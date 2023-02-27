/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Me from './img/coding.jpeg';
import './InfoMe.css';
import InfoContact from './SubComponents/InfoContact';

const InfoMe = () => {
  return (
    <div className='info-body'>
      <div className='row'>
      <div className='left'>
        <div className='content'>
          <p>
            Since 2021 I discovered that programming was something that I really enjoyed practicing and learning more and more. <br/>
            But in 2022 I really started studying programming at the Henry bootcamp. <br/> Learning many new and challenging technologies for me. <br/>
            Among the technologies that I enjoy the most when using them are React, Redux and CSS.
          </p>
        </div>
      </div>
      <div className='right'>
        <img src={Me} alt="me"/>
      </div>
    </div>
      <InfoContact />
    </div>
  )
}

export default InfoMe;