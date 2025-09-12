import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cv from './Cv';
import CardNav from './CardNav';
import Projects from './Projects';
import Contact from './Contact';
import Project from './Project';
import { useMarkdownList } from '../helpers/useMarkdownList';

const Content = () => {
  const projects = useMarkdownList();
  return (
    <main className='content'>
      <Routes>
        <Route exact path='/' element={<Home projects={projects} />} />
        <Route exact path='/CV' element={<Cv />} />
        {/* 🔄 Projects now markdown-based */}
        <Route path='/projects' element={<Projects />}>
          <Route
            index
            element={
              <>
                <h1>Projects</h1>
                <CardNav
                  header={'Projects'}
                  data={projects} // 👈 markdown-driven
                  type={'projects'}
                  back={'projects'}
                />
              </>
            }
          />

          {/* Each markdown file maps to /projects/:filename */}
          <Route
            key={`project-route-project`}
            exact
            path=':filename'
            element={<Project />}
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
