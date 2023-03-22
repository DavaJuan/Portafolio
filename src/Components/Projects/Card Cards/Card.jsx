import React from 'react';
import Page from '../img/pageIcon.png';
import Git from '../img/gitIcon.png';
import './Card.css';

const Card = ({title,image,body,link1,link2}) => {
  return (
    <div className='card-container'>
      <div className="image-container">
        <img src={image} alt="" width={'300px'}/>
      </div>
      <div className="card-content">
        <div className="card-title">
         <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="btn">
          <a href={link1} target='_blank'>
            <img className='page-ico' src={Page} alt="page" />
          </a>
          <a href={link2} target='_blank'>
            <img className='page-ico' src={Git} alt="git" />
          </a>
        </div>
    </div>
  );
}

export default Card;