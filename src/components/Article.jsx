import { Link } from "react-router-dom";
import { articles } from '../assets/articles.json';
import { useEffect, useState } from "react";

const articleNotFound = {
  id: -1,
  path: 'articles/-1',
  img: 'https://placekitten.com/g/200/300',
  title: 'Article Not Found'
}

const articleStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const Article = ({ id }) => {
  const [articleData, setArticleData] = useState(undefined);
  
  useEffect(() => {
    console.log(articles.find(article => article.id === 1));
    setArticleData(articles.find(article => article.id === id));
  });

  return (
    <Link to={articleData?.path}>
      <article style={articleStyles}>
        <img src={articleData?.img} alt={articleData?.title} />
        <span>{articleData?.title}</span>
      </article>
    </Link>
  );
}

export default Article;
