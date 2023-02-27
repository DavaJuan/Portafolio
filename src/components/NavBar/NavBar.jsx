import React, {useRef} from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {

  const navRef = useRef();

  const showNavBar = () =>{
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
      <header className='nav-container'>
        <h3><NavLink activeClassName='active2' className='title-home' exact to='/'>JPD</NavLink></h3>
          <nav ref={navRef}>
            <NavLink activeClassName='active' exact to='/'>Home</NavLink>
            <NavLink activeClassName='active' exact to='/technologies'>Technologies</NavLink>
            <NavLink activeClassName='active' exact to='/ubicacion'>Projects</NavLink>
            <NavLink activeClassName='active' exact to='/contacto'>Contact</NavLink>
            <button className='nav-btn nav-close-btn' onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <FaBars />
          </button>    
      </header>
  );
}

export default NavBar;