import { useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../styles/cv.css';

const Cv = ({ data }) => {
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
          <h1 className='cv header' key={`cv-header-${index}`}>
            {getContent(object)}
          </h1>
        );
      case 'specs':
        return (
          <p className='cv specs' key={`cv-intro-${index}`}>
            {getContent(object)}
          </p>
        );
      case 'h2':
        return (
          <h2 className='cv subhead' key={`cv-subhead-${index}`}>
            {getContent(object)}
          </h2>
        );
      case 'h3':
        return (
          <h3 className='cv subhead' key={`cv-subhead-${index}`}>
            {getContent(object)}
          </h3>
        );
      case 'h4':
        return (
          <h4 className='cv subhead' key={`cv-subhead-${index}`}>
            {getContent(object)}
          </h4>
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
        console.log(split);
        return <p className='cv para'>{split.map((s) => s)}</p>;

      default:
        break;
    }
  };

  return (
    <article className='cv'>
      {data && data.length > 0 ? (
        data[0].map((d, i) => switchhHtmlElements(d, i))
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
};
export default Cv;
