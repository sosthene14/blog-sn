import React, { useState } from "react";
const DataInformation = ({ post }) => {
  return (
    <section className="home-page-section">
      <div className="render-articles" key={post.title}>
        <div className="article">
          <h3>{post.title}</h3>
          <span className="small-deco"></span>
          <img src={post.coverImage} className="range" alt="Article" />
          <article className="main-article">
            <p className="article-description">
              {post.bief}
              <br />
            </p>
            <span id="author-names"></span>
            <span id="author-publication-date">
              {new Date(post.dateAdded).toLocaleString()}
            </span>
            <div>
              <span id="author-publication-date">Réactions : {post.totalReactions}</span>
            </div>
            <div>
            <span id="author-publication-date">Réponses : {post.replyCount}</span>
            </div>
            <a  href={`https://blog.rutikwankhade.dev/${post.slug}`}>
              <button className="btn">Read more</button>
            </a>
            <br />
          </article>
        </div>
      </div>
    </section>
  );
};

export default DataInformation;
