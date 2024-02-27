import React from 'react';
import Article from './components/Article/Article';
import Text from './components/Text/Text';
import { promises as fs } from 'fs';


export default async function HomePage() {
  const file = await fs.readFile(process.cwd() + '/app/articleModuleData.json', 'utf8');
  const articleModuleData = JSON.parse(file);


  return (
      <div className="p-10">
        <Article imageSrc={articleModuleData.imageSrc} text={articleModuleData.text}/>
        <Text />
      </div>
  );
};


