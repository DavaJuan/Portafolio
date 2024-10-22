import React from "react";
import Home from "./Components/Home/Home";
import "./App.css";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Footer2 from "./Components/Footer2/Footer2";
import NavBar from "./Components/NavBar/NavBar";
import Education from "./Components/Education/Education";
import ContactForm from "./Components/ContactForm/ContactForm";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <Projects /> */}
      <Technologies />
      <Education />
      <ContactForm />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default App;
