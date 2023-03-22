import React from 'react';
import Card from './Card';
import Pokemania from '../img/Pokemania.png';
import WeatherApp from '../img/WeatherApp.png';
import Burnfitness from '../img/Burnfitness.png';
import './Cards.css';

const Cards = () => {
  return (
    <div className='container'>
      <Card 
        title='Pokemania'
        image={Pokemania}
        body='This project consists of a user interaction which can: Search for Pokemons, filter by types, create your own Pokemon,etc.This project was created using JavaScript, React, Redux, Pure CSS, Express, Node JS, Sequelize and Postgressql.
        Not Responsive yet.'
        link1='#'
        link2='https://github.com/DavaJuan/PI-Pokemon'
      />

      <Card 
        title='Weather App'
        image={WeatherApp}
        body='
        This small project consists of the use of a weather API which allows you to check the weather of any city in the world. The creation of this project was only as a small practice using AXIOS.
        Not responsive yet.'
        link1=''
        link2=''
        />

        <Card 
        title='BurnFitness'
        image={Burnfitness}
        body='This is a web page designed for a gym, web page completely customizable for the needs of the client.With many sections and specifications of each service provided by the gym. Responsive.'
        link1='https://gym-page-swart.vercel.app/'
        link2='https://github.com/DavaJuan/Gym-Page'
        />
    </div>
  );
}

export default Cards;