import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ButtonScroll.css";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`scroll-up-button ${isVisible ? "visible" : ""}`}
      onClick={handleClick}
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollUpButton;
