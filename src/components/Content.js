import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cv from './Cv';
import CardNav from './CardNav';
import Projects from './Projects';
import Contact from './Contact';
import Project from './Project';
const Content = ({ data }) => {
  return (
    <main className='content'>
      <Routes>
        <Route exact path='/' element={<Home projects={data[0]} />} />
        <Route exact path='/CV' element={<Cv data={data[1]} />} />
        <Route path='/projects' element={<Projects data={data[0]} />}>
          <Route
            index
            element={
              <>
                <h1>Projects</h1>
                <CardNav
                  header={'Projects'}
                  data={data[0]}
                  type={'projects'}
                  back={'projects'}
                />
              </>
            }
          />
          <Route
            key={`project-route-project`}
            exact
            path=':name'
            element={<Project data={data[0]} />}
          />

          <Route
            path='*'
            element={<p>Invalid path or this page doesn't exist anymore</p>}
          />
        </Route>

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Content;
