/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Me from './img/coding.jpeg';
import GitHub from './img/github.png';
import LikedIn from './img/linkedin.png';
import './InfoMe.css';

const InfoMe = () => {
  return (
    <main id='AboutMe'  className='infoMe-container'>
      <div className='container-text'>
        <h2 className='tittle-name'>My Name is Juan Pablo Dávalos</h2>
        <h3 className='tittle-frontEnd'>FullStack Developer</h3>
        <p className='text-container'>Since 2021 I discovered that programming was something that I really enjoyed practicing and learning more and more. <br/>
         But in 2022 I really started studying programming at the Henry bootcamp. Learning many new and challenging technologies for me.<br/>
         Among the technologies that I enjoy the most when using them are React, Redux and CSS.
         </p>
         <button className='button-cv'>Download my CV</button>
         <div className='icon-container'>
          <a href="https://github.com/DavaJuan" target="_blank">
            <img className='image-icon' src={GitHub} alt="img not found" />
           </a>
          <a href="https://www.linkedin.com/in/juan-pablo-davalos-b69807232/" target="_blank">
            <img className='image-icon' src={LikedIn} alt="img not found" />
          </a>
         </div>
      </div>
      <div className='container-img'>
        <img className='image-image' src={Me} alt="Image not found" />
      </div>
    </main>
  )
}

export default InfoMe;