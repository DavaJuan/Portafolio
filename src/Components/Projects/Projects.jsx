import React from "react";
import Cards from "./Card Cards/Cards";
import "./Projects.css";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="projects-content-all">
      <h3 className="projects-title">{t("Projects.title")}</h3>
      <div className="container-projects">
        <Cards />
      </div>
    </div>
  );
};

export default Projects;
