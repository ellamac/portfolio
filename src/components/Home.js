import React from 'react';
import Brief from './Brief';
import About from './About';
import Newest from './Newest';
import getLanguage from '../data/GetLanguage';

const Home = ({ projects }) => {
  return (
    <>
      <h1>
        {getLanguage({
          content: 'Welcome to my portfolio!',
          fi: 'Tervetuloa portfoliooni!',
        })}
      </h1>
      <Brief />
      <About />
      <Newest data={projects} type={'projects'} back={''} />
    </>
  );
};

export default Home;
