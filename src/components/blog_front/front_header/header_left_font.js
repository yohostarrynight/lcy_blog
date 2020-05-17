import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Blog = styled.div`
  color: #555;
  font-size: 20px;
  line-height: 24px;
  margin-left: 90px;
  cursor: pointer;
`;

function HeaderLeftFont() {
  const history = useHistory();
  const handlePushLogin = () => {
    history.push('/login');
  };
  return (
    <Blog onClick={handlePushLogin}>LCYBLOG</Blog>
  );
}

export default HeaderLeftFont;
