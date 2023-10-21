import React from 'react';
import Brief from './Brief';
import About from './About';
import Newest from './Newest';

const Home = ({ projects }) => {
  return (
    <>
      <h1>Welcome to my portfolio!</h1>
      <Brief />
      <About />
      <Newest data={projects} type={'projects'} back={''} />
    </>
  );
};

export default Home;
