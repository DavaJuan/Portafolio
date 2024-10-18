import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiPython,
  SiMongodb,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { GrNode } from "react-icons/gr";
import { useTranslation } from "react-i18next";

import "./Technologies.css";

const Technologies = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="tech-container">
      <div className="skills-box-1">
        <h3 className="titleSkills">{t("Skills.title")}</h3>
        <p>{t("Skills.title2")}</p>
      </div>

      <div className="skills-box-2">
        <div className="skills-content">
          <h4 className="skills-front-back-end">Front End</h4>
          <div className="skills-box-card">
            <span>
              <SiHtml5 />
              <h4>HTML</h4>
            </span>
            <span>
              <SiCss3 />
              <h4>CSS</h4>
            </span>
            <span>
              <SiJavascript />
              <h4>JAVASCRIPT</h4>
            </span>
            <span>
              <RiReactjsLine />
              <h4>REACT</h4>
            </span>
          </div>
        </div>

        <div className="skills-titles">
          <h4 className="skills-front-back-end">Back End</h4>
          <div className="skills-box-card">
            <span>
              <GrNode />
              <h4>NODE JS</h4>
            </span>
            <span>
              <SiExpress />
              <h4>EXPRESS</h4>
            </span>
            <span>
              <FaJava />
              <h4>JAVA</h4>
            </span>
            <span>
              <SiPython />
              <h4>PYTHON</h4>
            </span>
            <span>
              <GrMysql />
              <h4>MY SQL</h4>
            </span>
            <span>
              <SiMongodb />
              <h4>MONGO DB</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
