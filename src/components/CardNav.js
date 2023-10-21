import React from 'react';
import '../styles/cards.css';
import Card from './Card.js';
import { createCardObjects } from '../helpers/CardHelpers';

const CardNav = ({ data, type, back }) => {
  return (
    <>
      {data && data.length > 0 ? (
        <nav className='cardnav container'>
          {createCardObjects(data).map((i, key) => (
            <Card content={i} key={key} type={type} back={back} />
          ))}
        </nav>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CardNav;
