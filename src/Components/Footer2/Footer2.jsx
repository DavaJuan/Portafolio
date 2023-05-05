import React from "react";
import "./Footer2.css";
import { useTranslation } from "react-i18next";

const Footer2 = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="sub-footer">
      <h4>© {t("Footer.text")}</h4>
    </div>
  );
};

export default Footer2;
