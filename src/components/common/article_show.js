import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { categoryFilter } from '../../utils/filter';

const Article = styled.div`
  display: block;
  margin: 10px 17px 0 17px;
  width: 46%;
  padding-bottom: 10px;
  &:hover {
    background: #effbff;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,.1);
    color: rgb(18, 97, 182); 
  }
`;
const Img = styled.img`
  width: 100%;
  height: 185px;
  background-size: cover;
`;

function ArticleShow(props) {
  const history = useHistory();
  const { _id, imgurl, title, category } = props.data;
  const handlePushArticle = id => () => {
    history.push('/index/article/' + id);
  };
  return (
    <Article onClick={handlePushArticle(_id)}>
      <Img src={imgurl} alt="" />
      <p>{categoryFilter(category)}</p>
      <h3>{title}</h3>
    </Article>
  );
}

export default ArticleShow;
