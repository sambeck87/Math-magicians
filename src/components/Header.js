import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const home = '/';
  return (
    <div id="head_contain">
      <h1 id="title">Math Magicians</h1>
      <nav id="links_container">
        <ul id="links">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={home}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
