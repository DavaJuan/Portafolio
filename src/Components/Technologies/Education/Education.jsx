import React from 'react'
import { TbSchool } from 'react-icons/tb';
import { BsCodeSlash } from 'react-icons/bs';
import { RiEnglishInput } from 'react-icons/ri';

import './Education.css';

const Education = () => {
  return (
    <div>
      <h3 className='titleEducation'>Education <TbSchool /></h3>
      <div className='containerGrid'>
        <div className='prgramming'>
          <h4>Programming</h4>
          <div>
            <p>Full Stack Developer</p>
            <p>Soy Henry -</p>
            <p>Bootcamp <BsCodeSlash /></p>
          </div>
        </div>
        <div className='language'>
          <h4>Language</h4>
          <p>English</p>
          <p>Institute E.way -</p>
          <p>Level B2 <RiEnglishInput /></p>
        </div>
      </div>
    </div>
  )
}

export default Education