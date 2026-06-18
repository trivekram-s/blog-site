import SiteHeader from "./components/Header";
import BlogDetails from "./components/About";
import PostsView from "./components/ArticleList";
import blogData from "./blog";

const App = () => {
  const { name, image, about, posts } = blogData;

  return (
    <div>
      <SiteHeader name={name} />
      <BlogDetails image={image} about={about} />
      <PostsView posts={posts} />
    </div>
  );
};

export default App;
