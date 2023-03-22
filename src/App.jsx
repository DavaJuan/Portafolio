import React from 'react';
import Home from './Components/Home/Home';
import './App.css';
import Technologies from './Components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer2/Footer2';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Home />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;