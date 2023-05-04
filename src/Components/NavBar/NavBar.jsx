import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [color, setColor] = useState(false);

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
          <button>EN</button>
          <button>ES</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
