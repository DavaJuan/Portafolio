import React from "react";
import Home from "./Components/Home/Home";
import "./App.css";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Footer2 from "./Components/Footer2/Footer2";
import Contact from "./Components/Contact/Contact";
import ButtonScroll from "./Components/ScrollUpButton/ButtonScroll";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <Footer2 />
      <ButtonScroll />
    </div>
  );
};

export default App;
