import BlogHeader from "./components/Header";
import BlogInfo from "./components/About";
import PostCollection from "./components/ArticleList";
import siteData from "./blog";

const App = () => {
  const { name, image, about, posts } = siteData;

  return (
    <section>
      <BlogHeader title={name} />
      <BlogInfo logo={image} description={about} />
      <PostCollection articles={posts} />
    </section>
  );
};

export default App;
