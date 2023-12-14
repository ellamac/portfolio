import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbars.css';
import logo from '../images/logo.jpg';
import LanguageIcon from '@mui/icons-material/Language';
import getLanguage from '../data/GetLanguage';
const NavbarTop = ({ language, changeLanguage }) => {
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
            {getLanguage({ content: 'Home', fi: 'Etusivu' })}
          </NavLink>
        </li>
        <li className='navitem link'>
          <NavLink exact='true' to='/CV'>
            {getLanguage({ content: 'Résumé', fi: 'CV' })}
          </NavLink>
        </li>
        <li className='navitem link'>
          <NavLink to='/projects'>
            {' '}
            {getLanguage({ content: 'Projects', fi: 'Projektit' })}
          </NavLink>
        </li>
        <li className='navitem link'>
          <NavLink to='/contact'>
            {' '}
            {getLanguage({ content: 'Contact', fi: 'Ota yhteyttä' })}
          </NavLink>
        </li>
        <li className='navitem button'>
          <button onClick={changeLanguage} type='button' aria-haspopup='menu'>
            <LanguageIcon />
            <span>{language}</span>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default NavbarTop;
