import React from "react";
import { useTranslation } from "react-i18next";

import "./Education.css";

const Education = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="education-container-all">
      <h3 className="title-education">{t("Education.title")}</h3>
      <div className="containerGrid">
        <div className="education-card">
          <h4 className="title-edutacion-subtitle">{t("Education.prog")}</h4>
          <div>
            <p>{t("Education.sb1")}</p>
            <p>Soy Henry -</p>
            <p>Bootcamp</p>
          </div>
        </div>
        <div className="education-card">
          <h4 className="title-edutacion-subtitle">{t("Education.idioma")}</h4>
          <p>{t("Education.sb2")}</p>
          <p>{t("Education.inst")} -</p>
          <p>{t("Education.lvl")}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
