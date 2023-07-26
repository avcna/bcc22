import React from "react";
import { useParams } from "react-router-dom";
import { article } from "../data/article/article";

const ArticleDetail = () => {
  let { id } = useParams();
  const handleFilter = article.filter((data) => {
    return data.id == id;
  });

  return <div>{handleFilter[0].id}</div>;
};

export default ArticleDetail;
