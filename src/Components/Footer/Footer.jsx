import React from "react";
import "./Footer.css";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="footer-container">
      <div className="footer-sub-cont">
        <div className="logo-cont">
          <h3>JPD</h3>
        </div>
        <div className="phone-cont">
          <p>{t("Footer.phone")}</p>
          <h4>+54 1153754846</h4>
        </div>
        <div className="email-cont">
          <p>email</p>
          <h4>davalosjuanpablo038@gmail.com</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
