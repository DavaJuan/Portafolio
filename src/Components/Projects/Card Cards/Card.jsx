import React from "react";
import { RiPagesLine, RiGithubFill } from "react-icons/ri";
import "./Card.css";

import { useTranslation } from "react-i18next";

const Card = ({ title, image, body, link1, link2 }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="" width={"300px"} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="cardP">
          <p>{t("Projects.text")}</p>
        </div>
      </div>
      <div className="btn">
        <a href={link1} target="_blank">
          <RiPagesLine className="page-ico" />
        </a>
        <a href={link2} target="_blank">
          <RiGithubFill className="page-ico" />
        </a>
      </div>
    </div>
  );
};

export default Card;
