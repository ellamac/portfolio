import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import getLanguage from '../data/GetLanguage';

const Contact = (props) => {
  return (
    <section>
      <h1>
        {getLanguage({ content: 'Contact information', fi: 'Yhteystiedot' })}
      </h1>
      <h2>
        {getLanguage({
          content: 'I am looking for work!',
          fi: 'Olen avoin uusille tehtäville!',
        })}
      </h2>
      <p>
        {getLanguage({
          content: 'Please contact me via email or LinkedIn:',
          fi: 'Ota yhteyttä minuun sähköpostitse tai Linkkarissa:',
        })}
      </p>
      <p>
        email:{' '}
        <a href='mailto:ella@makela.co' target='_blank' rel='noreferrer'>
          ella@makela.co <OpenInNewIcon className='newTab' />
        </a>
      </p>
      <p>
        LinkedIn:{' '}
        <a
          href='https://www.linkedin.com/in/ellamakela/'
          target='_blank'
          rel='noreferrer'
        >
          linkedin.com/in/ellamakela <OpenInNewIcon className='newTab' />
        </a>
      </p>
      <p>
        GitHub:{' '}
        <a
          href='https://github.com/stars/ellamac/lists/portfolio'
          target='_blank'
          rel='noreferrer'
        >
          github.com/ellamac <OpenInNewIcon className='newTab' />
        </a>
      </p>
    </section>
  );
};

export default Contact;
