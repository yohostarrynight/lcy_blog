import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import axios from '../../axios_config/axios_config';
import ArticleShow from './article_show';

const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  border-bottom: 1px solid #ebedf0; 
`;
const ListPagination = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebedf0; 
`;

function ArticleList(props) {
  const [dataList, setDataList] = useState([]);
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
    const { res, count } = result.data.data;
    setDataList(res);
    setPageInfo({ ...pageInfo, count });
  };
  const handleChangePage = (_event, newPage) => {
    setPageInfo({ ...pageInfo, page: newPage - 1 });
  };
  useEffect(() => {
    handleGetArticle();
  }, [pageInfo.page, props.id]);
  return (
    <div>
      <Article>
        {
          dataList.map(data => {
            return (
              <ArticleShow key={data._id} data={data} />
            );
          })
        }
      </Article>
      {
        pageInfo.count > 1 ? (
          <ListPagination>
            <Pagination
              count={pageInfo.count}
              page={pageInfo.page + 1}
              onChange={handleChangePage}
            />
          </ListPagination>
        ) : null
      }
    </div>
  );
}

export default ArticleList;
