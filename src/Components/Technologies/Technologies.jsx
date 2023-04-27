import React from 'react';
import { SiHtml5,SiCss3,SiJavascript,SiRedux,SiTailwindcss, SiExpress, SiPostgresql } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import { GrNode } from 'react-icons/gr';

import './Technologies.css';

const Technologies = () => {
  return (
    <div className='tech-container'>
       <h3>Skills</h3>
       <p>Technologies and Frameworks I worked with</p> 
       <div className='skillsGrid'>
        <div className='skillsFront'>
          <h4>Front End</h4>
          <div className='front'>
            <span>
              <SiHtml5 /> HTML
            </span>
            <span>
              <SiCss3 /> CSS
            </span>
            <span>
              <SiJavascript /> JavaScript
            </span>
            <span>
              <RiReactjsFill /> React
            </span>
            <span>
              <SiRedux /> Redux
            </span>
            <span>
              <RiReactjsFill /> React Native
            </span>
            <span>
              <SiTailwindcss /> Tailwind
            </span>
          </div>
        </div>
        <div className='skillsBack'>
          <h4>Back End</h4>
          <div className='back'>
            <span>
              <GrNode /> Node JS
            </span>
            <span>
               <SiExpress /> Express
            </span>
            <span>
              <SiPostgresql /> Postgresql
            </span>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Technologies;