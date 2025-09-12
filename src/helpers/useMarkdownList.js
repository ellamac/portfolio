import { useEffect, useState } from 'react';

export function useMarkdownList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function load() {
      console.log('Fetching posts.json...');
      const res = await fetch('/portfolio/posts/posts.json');
      const files = await res.json();
      console.log('Files found:', files);

      const promises = files.map(async (file) => {
        const text = await fetch(`/portfolio/posts/${file}`).then((r) =>
          r.text()
        );
        const lines = text.split('\n').filter(Boolean);
        const mainimgLine = lines[0] || ''; // 1st line
        const imgMatch = mainimgLine.match(/!\[.*?\]\((.*?)\)/);
        const mainimg = imgMatch ? imgMatch[1] : 'placeholder.jpg';
        return {
          name: file.replace('.md', ''),
          header: lines[1].replace(/^#\s*/, ''),
          intro: lines[2].replace(/\*/g, '') || '',
          mainimg: mainimg,
        };
      });

      const results = await Promise.all(promises);
      console.log('Parsed projects:', results);
      setList(results);
    }
    load();
  }, []);

  return list;
}
