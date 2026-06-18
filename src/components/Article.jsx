const Article = ({ heading, publishedOn, summary }) => {
  return (
    <article>
      <h3>{heading}</h3>
      <small>{publishedOn}</small>
      <p>{summary}</p>
    </article>
  );
};

export default Article;
