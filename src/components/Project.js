import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/projects.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import getLanguage from '../data/GetLanguage';

const Project = ({ data }) => {
  const { name } = useParams();
  console.log('name', name);
  const [proj, setProj] = useState([{ type: 'p', content: 'loading...' }]);

  useEffect(() => {
    if (data && data.length > 0) {
      setProj(
        data.find((d) => d.find((p) => p.type === 'name' && p.content === name))
      );
    }
  }, [data, name]);

  const getContent = (object) => {
    const language = localStorage.getItem('language');
    if (language === 'fi') {
      return object.fi || object.content;
    } else {
      return object.content;
    }
  };

  const switchhHtmlElements = (object, index) => {
    switch (object.type) {
      case 'header':
        return (
          <h1 className='project header' key={`project-header-${index}`}>
            {getContent(object)}
          </h1>
        );
      case 'intro':
        return (
          <p className='project intro' key={`project-intro-${index}`}>
            {getContent(object)}
          </p>
        );
      case 'h2':
        return (
          <h2 className='project subhead two' key={`project-subhead-${index}`}>
            {getContent(object)}
          </h2>
        );
      case 'h3':
        return (
          <h3
            className='project subhead three'
            key={`project-subhead-${index}`}
          >
            {getContent(object)}
          </h3>
        );
      case 'p':
        const split = getContent(object)
          .split('*')
          .map((s) =>
            s.includes('http') ? (
              <a
                href={s.substring(s.indexOf('[') + 1, s.indexOf(']'))}
                target='_blank'
                rel='noreferrer'
              >
                {s.substring(0, s.indexOf('['))}
                <OpenInNewIcon className='newTab' />
              </a>
            ) : (
              s
            )
          );

        return <p className='project para'>{split.map((s) => s)}</p>;
      case 'img':
      case 'mainimg':
        return (
          <figure
            className={`project piccont picncap ${object.type} ${object.style}`}
            key={`project-${object.type}-${index}`}
          >
            <img
              src={`https://res.cloudinary.com/dvvizrtil/image/upload/v1687773619/portfolio/${object.content}`}
              alt='project'
            />
            <figcaption className='caption'>{object.extra}</figcaption>
          </figure>
        );
      default:
        break;
    }
  };
  const backButton = () => {
    return (
      <>
        <Link to={-1} className='project back backLink'>
          <ArrowBackIcon className='project backArrow' />
          {getLanguage({ content: 'Back', fi: 'Takaisin' })}
        </Link>
      </>
    );
  };

  return (
    <>
      {backButton()}
      <article className='project actualContent'>
        {proj.map((d, i) => switchhHtmlElements(d, i))}
      </article>
      {backButton()}
    </>
  );
};

export default Project;
