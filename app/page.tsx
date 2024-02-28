import React from 'react';
import Article from './components/Article/Article';
import Text from './elements/Text/Text';
import { promises as fs } from 'fs';


export default async function HomePage() {
  const file = await fs.readFile(process.cwd() + '/app/pageData.json', 'utf8');
  const pageData = JSON.parse(file);
  const articleData = pageData[0];
  const textData = pageData[1];
  const galleryData = pageData[2];



  return (
      <div className="p-10">
        {/* <Article data={articleData} /> */}
        {/* <Text data={textData} /> */}
        {/* <Gallery data={galleryData} /> */}
        <Article />
      </div>
  );
};


