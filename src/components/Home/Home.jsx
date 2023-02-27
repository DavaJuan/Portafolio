/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='home-tittle-welcome'>Welcome to <br/> my Portfolio.</h1>
      <a href="#contact">
        <button className='home-button'>Contact Me</button>
      </a>
    </div>
  );
}

export default Home;