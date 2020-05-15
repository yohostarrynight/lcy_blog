import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleList from '../../common/article_list';

function ContainerCategories() {
  const { id } = useParams();
  return (
    <div>
      <ArticleList id={id} />
    </div>
  );
}

export default ContainerCategories;
