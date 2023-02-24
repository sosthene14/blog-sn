import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function DataInformation({ data }) {
  const [sortBy, setSortBy] = useState("");
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  const sortedData = [...data].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "author") {
      return a.author.localeCompare(b.author);
    } else if (sortBy === "publishedAt") {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    } else {
      return 0;
    }
  });

  return (
    <section className="home-page-section">
      <div className="btn-sorting-div">
        <button className="sort-button" onClick={() => setSortBy("title")}>
          Trier par titre
        </button>
        <button
          className="sort-button"
          onClick={() => setSortBy("publishedAt")}
        >
          Trier par date de publication
        </button>
      </div>
      <div className="render-articles">
        {sortedData.map((article) => (
          <div className="article" key={article.title}>
            <h3>{article.title}</h3>
            <span className="small-deco"></span>
            <img src={article.urlToImage} className="range" alt="Article" />
            <article className="main-article">
              <p className="article-description">
                {article.description}
              
                <br />
              </p>
              <span id="author-names">{article.author}</span>
              <span id="author-publication-date">
                {new Date(article.publishedAt).toLocaleString()}
              </span>
              <a href={article.url}>
                <button className="btn">
                  Read more
                </button>
              </a>
              <br/>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DataInformation;
