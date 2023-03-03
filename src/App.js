import React from 'react'
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer';
import './App.css';
import Footer2 from './components/Footer2/Footer2';

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
