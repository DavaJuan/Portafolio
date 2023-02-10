/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Pokmania from './img/Pokemania.png';
import WeatherApp from './img/WeatherApp.png';
import './Projects.css';

const Projects = () => {
  return (
    <div id='projectsTittle' className='container-container'>
      <h2 className='projects-tittle'>My Proyects</h2>
      <div className='projects-container'>
        <div className='Pro-cards'>
          <div className='project-name'>POKEMANIA</div>
          <img className='project-img' src={Pokmania} alt="image not found" />
          <div>Pokedex with PokeApi</div>
          <button className='project-button'>Go to the Project!</button>
        </div>
        <div className='Pro-cards'>
          <div className='project-name'>WEATHER APP</div>
          <img className='project-img' src={WeatherApp} alt="image not found" />
          <div>Weather App with API weather</div>
          <button className='project-button'>Go to the Project!</button>
        </div>
        {/* <div className='Pro-cards'>
          <div className='project-name'>OTRO PROYECTO</div>
          <img className='project-img' src={Pokmania} alt="image not found" />
          <div>Otro proyecto</div>
          <button className='project-button'>Go to the Project!</button>
        </div>
        <div className='Pro-cards'>
          <div className='project-name'>OTRO PROYECTO</div>
          <img className='project-img' src={Pokmania} alt="image not found" />
          <div>Otro proyecto</div>
          <button className='project-button'>Go to the Project!</button>
        </div> */}
      </div>
      
    </div>
  );
}

export default Projects;