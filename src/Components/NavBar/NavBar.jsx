import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./NavBar.css";

const NavBar = () => {
  const [color, setColor] = useState(false);

  const [t, i18n] = useTranslation("global");

  const handleColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", handleColor);

  return (
    <nav className={color ? "navContainer navBackground" : "navContainer"}>
      <div className="nav">
        <span>
          <a href="#home">JPD</a>
        </span>
        <div className="buttons">
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
