import React from 'react'
import Cards from './Card Cards/Cards';
import './Projects.css';


const Projects = () => {
  return (
    <div className='proyects-body'>
      <h3 className='proyects-title'>My Projects</h3>
      <div className='container-proyects'> 
        <Cards />
      </div>
    </div>
  );
}

export default Projects;