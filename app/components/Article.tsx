import React from 'react';
import styles from './Article.module.scss';

interface ArticleProps {
  imageSrc: string;
  text: string;
}

const Article: React.FC<ArticleProps> = ({ imageSrc, text }) => {
  return (
    <div className={styles.articleModule}>
      <img src={imageSrc} alt="Article" className={styles.image} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Article;