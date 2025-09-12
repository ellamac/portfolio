import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownContent = ({ path }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
};
export default MarkdownContent;
