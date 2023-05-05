import React from "react";
import Cards from "./Card Cards/Cards";
import "./Projects.css";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="proyects-body">
      <h3 className="proyects-title">{t("Projects.title")}</h3>
      <div className="container-proyects">
        <Cards />
      </div>
    </div>
  );
};

export default Projects;
