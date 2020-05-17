import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import axios from '../../../axios_config/axios_config';

const Article = styled.div`
  display: flex;
`;
const Title = styled.div`
  text-align: center;
  font-size: 32px;
  padding: 30px 0;
  border-bottom: 1px solid #e8e8e8;
 `;
const ArticleMarkdown = styled.div`
  width: 80%;
  pre {
    background-color: #f5f5f5;
    font-size: 14px;
    border-radius: 0;
    overflow-x: auto;
    display: block;
    padding: 20px;
  }
  code {
    padding: 3px 0;
  }
  img {
    max-width: 80%;
    height: auto;
    display: block;
    margin: auto;
  }
`;
const ArticleNav = styled.div`
  position: fixed;
  left: 85%;
  width: 20%;
`;
function ContainerArticle() {
  const { id } = useParams();
  const [data, setData] = useState({
    title: '',
    context: ''
  });
  const handleGetDetailData = async () => {
    const result = await axios.get('/getdetailarticle', {
      params: {
        id
      }
    });
    const { title, context } = result.data.data.res;
    setData({ ...data, title, context });
  };
  useEffect(() => {
    handleGetDetailData();
  }, []);
  return (
    <Article>
      <ArticleMarkdown>
        <Title>{data.title}</Title>
        <ReactMarkdown source={data.context} />
      </ArticleMarkdown>
      <ArticleNav>
        <MarkNav
          source={data.context}
          updateHashAuto
          declarative
        />
      </ArticleNav>
    </Article>
  );
}

export default ContainerArticle;
