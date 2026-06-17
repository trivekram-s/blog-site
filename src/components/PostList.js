import React from "react";
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <section className="post-list">
      <h2>Recent Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostList;
