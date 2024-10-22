import React from "react";
import InfoMe from "../InfoMe/InfoMe";
import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="home">
      <div>
        <div className="home-container">
          <h1 className="home-tittle-welcome">
            {t("home.title1")} <br /> {t("home.title2")}.
          </h1>
          <a href="#form-section">
            <button className="home-button">{t("home.button")}</button>
          </a>
        </div>
        <InfoMe />
      </div>
    </div>
  );
};

export default Home;
