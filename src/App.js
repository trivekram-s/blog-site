import React from "react";
import blog from "./blog";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header title={blog.title} author={blog.author} />
      <Main
        featuredPost={blog.featuredPost}
        posts={blog.posts}
      />
      <Footer author={blog.author} />
    </div>
  );
}

export default App;
