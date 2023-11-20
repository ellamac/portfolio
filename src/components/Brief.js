import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Brief = (props) => {
  useEffect(() => {
    //Runs on every render if ends with });
    //Runs only on the first render if ends with }, []);
    //Runs ion the first render and any time any dependency value changes if ends with }, [prop, state]);
  });
  return (
    <section className='brief'>
      <figure className='pic'>
        <img
          src='https://res.cloudinary.com/dvvizrtil/image/upload/v1687773619/portfolio/ella2.jpg'
          alt='My headshot'
        />
      </figure>

      <main className='info'>
        <h2>What you'll find on here</h2>
        <p>
          This porfolio is for others to check out my previous work and for me
          to follow my progress as I transition from a graduate student to a
          professional.
        </p>
      </main>
    </section>
  );
};

export default Brief;
