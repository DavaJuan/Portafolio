import React from "react";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import CV from "../../assets/Dávalos_Juan_Pablo_CV.pdf";
import Me from "./img/me.jpeg";

import "./InfoMe.css";

const InfoMe = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="grid">
      <div className="container-text">
        <h2>{t("InfoMe.title1")}</h2>
        <h4>Full Stack Developer</h4>
        {/* aca estaba el porrafo */}
        <button>
          <a className="link" download="JuanPDavalosCV" href={CV}>
            {t("InfoMe.cv")}
          </a>
        </button>
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
      <div className="container-text-2">
        <p>
          {t("InfoMe.InfoP")}
          <br />
          {t("InfoMe.InfoP2")}
        </p>
      </div>
    </div>
  );
};

export default InfoMe;
