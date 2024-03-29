import React from 'react';
import './Article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <article className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt='blog post' />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </article>
  );
};

export default Article;