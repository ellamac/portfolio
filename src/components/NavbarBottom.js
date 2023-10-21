import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbars.css';

const NavbarBottom = (props) => {
  return (
    <footer>
      <ul className='navbar bottom'>
        <li className='navitem text'>Ella Mäkelä</li>
        <li className='navitem link'>
          <NavLink to='mailto:ella@makela.co' target='_blank'>
            ella@makela.co
          </NavLink>
        </li>
        <li className='navitem link'>
          <NavLink to='https://www.linkedin.com/in/ellamakela/' target='_blank'>
            linkedin.com/in/ellamakela
          </NavLink>
        </li>
        <li className='navitem link'>
          <NavLink
            to='https://github.com/stars/ellamac/lists/portfolio'
            target='_blank'
          >
            github.com/ellamac
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default NavbarBottom;
