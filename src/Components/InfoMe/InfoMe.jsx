import React from "react";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import Me from "./img/me.jpeg";

import "./InfoMe.css";

const InfoMe = () => {
  return (
    <div className="grid">
      <div className="container-text">
        <h2>My Name is Juan Pablo Dávalos</h2>
        <h4>Full Stack Developer</h4>
        <p>
          Since 2021 I realize that programming it is something that I really
          enjoy practicing and learning more every day. But in 2022 I started to
          studying programming in Henry's bootcamp. Learning news and
          challenging technologies. <br />
          Today I prefer to work as a FrontEnd Developer.
        </p>
        <button>Download My CV</button>
        <div className="containerIcons">
          <a href="https://github.com/DavaJuan" target="_blanck">
            <TbBrandGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-pablo-davalos-b69807232/"
            target="_blanck"
          >
            <TbBrandLinkedin />
          </a>
        </div>
      </div>
      <div className="containerImg">
        <img src={Me} alt="Me" />
      </div>
    </div>
  );
};

export default InfoMe;
