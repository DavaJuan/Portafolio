import React from "react";
import Card from "./Card";
import Pokemania from "../img/Pokemania.png";
import EmojiPicker from "../img/EmojiPicker.png";
import Tablas from "../img/tablas.png";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container">
      <Card
        title="Emoji Picker"
        image={EmojiPicker}
        link1="https://emoji-picker-gamma.vercel.app/"
        link2="https://github.com/DavaJuan/Emoji-Picker"
      />
      <Card
        title="Learn tables %"
        image={Tablas}
        link1="https://tablas-mult-app.vercel.app/"
        link2="https://github.com/DavaJuan/TablasMult-App"
      />
      <Card
        title="Pokemania"
        image={Pokemania}
        link1="#"
        link2="https://github.com/DavaJuan/PI-Pokemon"
      />
    </div>
  );
};

export default Cards;
