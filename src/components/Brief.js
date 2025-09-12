import MarkdownContent from '../data/MarkdownContent';

const Brief = () => {
  return (
    <section className='brief'>
      <figure className='pic'>
        <img
          src='https://res.cloudinary.com/dvvizrtil/image/upload/v1687773619/portfolio/ella2.jpg'
          alt='My headshot'
        />
      </figure>

      <main className='info'>
        <MarkdownContent path='portfolio/texts/brief.md' />
      </main>
    </section>
  );
};

export default Brief;
