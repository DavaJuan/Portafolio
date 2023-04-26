import React from 'react'
import { TbBrandGithub,TbBrandLinkedin } from 'react-icons/tb';
import Me from './img/Me.jpeg';

import './InfoMe.css';

const InfoMe = () => {
  return (
    <div className='grid'>
      <div className='container-text'>
        <h2>My Name is Juan Pablo Dávalos</h2>
        <h4>Full Stack Developer</h4>
        <p>
        Since 2021 I discovered that programming was something that I really enjoyed practicing and learning more and more.
        But in 2022 I really started studying programming at the Henry's bootcamp.
        Learning many new and challenging technologies for me.
        Among the technologies that I enjoy the most when using them are React, Redux and CSS.
        </p>
        <button>Donwload My CV</button>
        <div className='containerIcons'>
          <a href="https://github.com/DavaJuan" target='_blanck'>
            <TbBrandGithub />
          </a>
          <a href="https://www.linkedin.com/in/juan-pablo-davalos-b69807232/" target='_blanck'>
            <TbBrandLinkedin />
          </a>
        </div>
      </div>
      <div className='containerImg'>
        <img src={Me} alt="Me"/>
      </div>
    </div>
  )
}

export default InfoMe;