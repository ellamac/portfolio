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

  const content_to_link = (text_to_split) =>
    getContent(text_to_split)
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

  const content_to_list = (text_to_split) =>
    getContent(text_to_split).split('*-*').slice(1);

  const switchHtmlElements = (object, index) => {
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
          <h2 className='cv subhead' key={`cv-subhead2-${index}`}>
            {getContent(object)}
          </h2>
        );
      case 'h3':
        return (
          <h3 className='cv subhead' key={`cv-subhead3-${index}`}>
            {getContent(object)}
          </h3>
        );
      case 'h4':
        return (
          <h4 className='cv subhead' key={`cv-subhead4-${index}`}>
            {getContent(object)}
          </h4>
        );
      case 'p':
        return (
          <p className='cv para' key={`cv-p-${index}`}>
            {content_to_link(object).map((s) => s)}
          </p>
        );
      case 'list-ul':
        return (
          <ul className='cv ul' key={`cv-ul-${index}`}>
            {content_to_list(object).map((s, i) => (
              <li className='cv li' key={`cv-li-${index}-${i}`}>
                {s}
              </li>
            ))}
          </ul>
        );

      case 'list-ol':
        return (
          <ol className='cv ol' key={`cv-ul-${index}`}>
            {content_to_list(object).map((s, i) => (
              <li className='cv li' key={`cv-li-${index}-${i}`}>
                {content_to_link(s).map((s) => s)}
              </li>
            ))}
          </ol>
        );
      default:
        break;
    }
  };

  return (
    <article className='cv'>
      {data && data.length > 0 ? (
        data[0].map((d, i) => switchHtmlElements(d, i))
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
};
export default Cv;
