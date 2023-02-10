import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='wrapper'>
      <header>
        <nav className='navbar'>
          <div className='brand'>
            <h2><a href='#'>JuanPDavalos.</a></h2>
          </div>
          <ul className='menu'>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#AboutMe">About Me</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#projectsTittle">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;