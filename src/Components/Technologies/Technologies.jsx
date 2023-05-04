import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { GrNode } from "react-icons/gr";
import { useTranslation } from "react-i18next";

import "./Technologies.css";
import Education from "./Education/Education";

const Technologies = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="tech-container">
      <h3 className="titleSkills">{t("Skills.title")}</h3>
      <p>{t("Skills.title2")}</p>
      <div className="skillsGrid">
        <div className="skillsFront">
          <h4>Front End</h4>
          <div className="front">
            <span>
              <SiHtml5 /> HTML
            </span>
            <span>
              <SiCss3 /> CSS
            </span>
            <span>
              <SiJavascript /> JavaScript
            </span>
            <span>
              <RiReactjsFill /> React
            </span>
            <span>
              <SiRedux /> Redux
            </span>
            <span>
              <RiReactjsFill /> React Native
            </span>
            <span>
              <SiTailwindcss /> Tailwind
            </span>
          </div>
        </div>
        <div className="skillsBack">
          <h4>Back End</h4>
          <div className="back">
            <span>
              <GrNode /> Node JS
            </span>
            <span>
              <SiExpress /> Express
            </span>
            <span>
              <SiPostgresql /> Postgresql
            </span>
          </div>
        </div>
      </div>
      <div></div>
      <Education />
    </div>
  );
};

export default Technologies;
