import React from 'react';
import GitHub from '../img/github.png';
import LikedIn from '../img/linkedin.png';
import './InfoContact.css';

const InfoContact = () => {
  return (
    <div className='info-contact-container'>
        <div className="button-cv">
          <a download='JuanPDávalosCV' href="./davalos.pdf">
            <button>Dowload my CV</button>
          </a>
        </div>
        <div className="images">
          <a href="https://github.com/DavaJuan" target="_blank">
            <img src={GitHub} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/juan-pablo-davalos-b69807232/" target="_blank">
            <img src={LikedIn} alt="likedin" />
          </a>
        </div>
    </div>
  );
}

export default InfoContact;