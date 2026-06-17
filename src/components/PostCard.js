import React from "react";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p className="date">{post.date}</p>
      <p>{post.summary}</p>
      <button>Read More</button>
    </div>
  );
}

export default PostCard;
