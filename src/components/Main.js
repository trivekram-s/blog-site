import React from "react";
import FeaturedPost from "./FeaturedPost";
import PostList from "./PostList";

function Main({ featuredPost, posts }) {
  return (
    <main className="main">
      <FeaturedPost post={featuredPost} />
      <PostList posts={posts} />
    </main>
  );
}

export default Main;
