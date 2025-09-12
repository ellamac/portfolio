import MarkdownContent from '../data/MarkdownContent.js';

const About = () => {
  return (
    <section className='about'>
      <MarkdownContent path='portfolio/texts/about.md' />
    </section>
  );
};

export default About;
