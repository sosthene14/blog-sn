import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { link } = useParams();
  const apiKey = "k7Lp6mq0wd3qCMkw1MxEB94HF9R26IjXalLaJWvKXZo";
  const apiEndpoint = "https://api.newscatcherapi.com/v2/search?countries=fr&";
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(apiEndpoint, { headers: { "x-api-key": apiKey } })
      .then((response) => response.json())
      .then((data) => setArticle(data.articles[0]));
  }, [apiEndpoint, apiKey]);

  if (!article) {
    return <div>Loading...</div>;
  }
  link = article.link;
  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.media} alt="Article" />
      <p>{article.summary}</p>
      {/* display the rest of the article data */}
    </div>
  );
}

export default ArticleDetail;
