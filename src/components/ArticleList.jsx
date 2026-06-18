import ArticleCard from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <main>
      {articles.map(({ id, title, date, preview }) => (
        <ArticleCard
          key={id}
          heading={title}
          publishedOn={date}
          summary={preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;
