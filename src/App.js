import React from 'react'
import NavBar from './components/NavBar/NavBar';
import InfoMe from './components/InfoMe/InfoMe';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/technologies' component={Technologies} />
        <Route exact path='/contacto' component={Contact}/>
        <Route exact path='/proyects' component={Projects} />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>   
  );
}

export default App;
