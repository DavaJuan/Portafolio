import React from 'react';
import Card from './Card';
import Pokemania from '../img/Pokemania.png';
import EmojiPicker from '../img/EmojiPicker.png';
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
        title='Emoji Picker'
        image={EmojiPicker}
        body='This small project consists of the use of the UseRef Hook. In this project you can filter emojis with keywords like: love, hand, face, etc. Using only React, JavaScript and pure Css.'
        link1='https://emoji-picker-gamma.vercel.app/'
        link2='https://github.com/DavaJuan/Emoji-Picker'
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