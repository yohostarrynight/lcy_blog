import React, { useEffect, useState } from 'react';
import axios from '../../axios_config/axios_config';

function ArticleList(props) {
  // eslint-disable-next-line no-unused-vars
  const [pageInfo, setPageInfo] = useState({
    page: 0,
    count: 0
  });
  const handleGetArticle = async () => {
    const result = await axios.get('/getarticleinfo', {
      params: {
        offset: pageInfo.page * 10,
        limit: 10,
        categories: props.id
      }
    });
    console.log(result);
  };
  useEffect(() => {
    handleGetArticle();
  }, [pageInfo.page, props.id]);
  return (
    <div>{props.id}</div>
  );
}

export default ArticleList;
