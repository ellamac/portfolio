import '../styles/cv.css';
import MarkdownContent from '../data/MarkdownContent';

const Cv = () => {
  return (
    <article className='cv'>
      <MarkdownContent path='/portfolio/texts/cv.md' />
    </article>
  );
};
export default Cv;
