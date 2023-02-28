/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Pokmania from './img/Pokemania.png';
import WeatherApp from './img/WeatherApp.png';
import './Projects.css';

const Projects = () => {
  return (
    <div className='container-proyects'> 
      <div className="container-cards">
        <div className='proyect-card'>
          <h3>Pokemani</h3>
          <img src={Pokmania} alt="" width={'300px'}/>
          <p>This proyect was created durin my henry</p>
          <button><a href="#">Go to know it!</a></button>
        </div>

        <div className='proyect-card'>
          <h3>Wheater App</h3>
          <img src={WeatherApp} alt="" width={'300px'}/>
          <p>This proyect was created durin my henry</p>
          <button><a href="#">Go to know it!</a></button>
        </div>
      </div>
    </div>
  );
}

export default Projects;