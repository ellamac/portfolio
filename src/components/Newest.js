import React from 'react';

import CardNav from './CardNav';
import { Link } from 'react-router-dom';
import getLanguage from '../data/GetLanguage';

const Newest = ({ header, data, type, back }) => {
  return (
    <section className='newest container'>
      <h2>
        {getLanguage({ content: 'Newest projects', fi: 'Uusimmat projektit' })}
      </h2>
      {data && data.length > 0 ? (
        <CardNav
          header={header}
          data={data.slice(0, 2)}
          type={type}
          back={back}
        />
      ) : (
        <p>Loading...</p>
      )}{' '}
      <Link className='newest all' to='/projects'>
        {getLanguage({ content: 'All projects', fi: 'kaikki projektit' })}
      </Link>
    </section>
  );
};

export default Newest;
