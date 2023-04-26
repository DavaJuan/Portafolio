import React from 'react'
import InfoMe from '../InfoMe/InfoMe';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div>
        <div className='home-container'>
          <h1 className='home-tittle-welcome'>Welcome to <br/> my Portfolio.</h1>
          <a href="#contact">
            <button className='home-button'>Contact Me</button>
          </a>
        </div>
        <InfoMe />
      </div>
    </div>
  );
}

export default Home;