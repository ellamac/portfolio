import MarkdownContent from '../data/MarkdownContent';

const Brief = () => {
  return (
    <section className='brief'>
      <figure className='pic'>
        <img src='/portfolio/public/imgs/ella2.jpg' alt='My headshot' />
      </figure>

      <main className='info'>
        <MarkdownContent path='/portfolio/texts/brief.md' />
      </main>
    </section>
  );
};

export default Brief;
