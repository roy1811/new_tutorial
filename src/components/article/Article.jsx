import React from 'react'
import './article.css';
const Article = ({imageurl, date, title}) => {
  return (
    <div className='gpt3__blog-container_article'>
        <div>
          <img src={imageurl} alt="blog_image" />
        </div>
        <div className='gpt3__blog-container_article-content'>
          <div>
            <p>{date}</p>
            <h1>{title}</h1>
          </div>
          <p>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article