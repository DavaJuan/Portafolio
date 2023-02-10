import React from 'react'
import NavBar from './components/NavBar/NavBar';
import InfoMe from './components/InfoMe/InfoMe';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact.jsx';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <InfoMe />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
