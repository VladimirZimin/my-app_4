import React from "react";

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
