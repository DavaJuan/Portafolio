import React from "react";
import { TbSchool } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { RiEnglishInput } from "react-icons/ri";
import { useTranslation } from "react-i18next";

import "./Education.css";

const Education = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <h3 className="titleEducation">
        {t("Education.title")} <TbSchool />
      </h3>
      <div className="containerGrid">
        <div className="programming">
          <h4>{t("Education.prog")}</h4>
          <div>
            <p>{t("Education.sb1")}</p>
            <p>Soy Henry -</p>
            <p>
              Bootcamp <BsCodeSlash />
            </p>
          </div>
        </div>
        <div className="language">
          <h4>{t("Education.idioma")}</h4>
          <p>{t("Education.sb2")}</p>
          <p>{t("Education.inst")} -</p>
          <p>
            {t("Education.lvl")} <RiEnglishInput />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
