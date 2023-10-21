import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbars.css';
import logo from '../images/logo.jpg';
const NavbarTop = (props) => {
  return (
    <header>
      <ul className='navbar top'>
        <li className='navitem logo'>
          <NavLink exact='true' to='/'>
            EM
          </NavLink>
        </li>
        <li className='navitem link'>
          <NavLink exact='true' to='/'>
            Home
          </NavLink>
        </li>
        <li className='navitem link'>
          <NavLink exact='true' to='/CV'>
            CV
          </NavLink>
        </li>
        <li className='navitem link'>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li className='navitem link'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavbarTop;
