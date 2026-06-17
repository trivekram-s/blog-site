import React from "react";

function FeaturedPost({ post }) {
  return (
    <section className="featured-post">
      <h2>Featured Post</h2>
      <div className="featured-card">
        <img src={post.image} alt={post.title} />
        <h3>{post.title}</h3>
        <p className="date">{post.date}</p>
        <p>{post.summary}</p>
        <button>Read More</button>
      </div>
    </section>
  );
}

export default FeaturedPost;
