import { useParams, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import getLanguage from '../data/GetLanguage';
import '../styles/projects.css';
import '../styles/index.css';
import MarkdownContent from '../data/MarkdownContent';

function MarkdownPage() {
  const { filename } = useParams();

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
      <article class='markdownpage'>
        <MarkdownContent path={`/portfolio/posts/${filename}.md`} />
      </article>
      {backButton()}
    </>
  );
}

export default MarkdownPage;
