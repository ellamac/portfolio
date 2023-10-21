import React from 'react';

import CardNav from './CardNav';
import { Link } from 'react-router-dom';

const Newest = ({ header, data, type, back }) => {
  return (
    <section className='newest container'>
      <h2>Newest projects</h2>
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
        All projects
      </Link>
    </section>
  );
};

export default Newest;
