import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Logo = styled.div`
  width: 150px;
  padding: 56px 0 0 50px;
  color: #ea6f5a;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

function LoginLogo() {
  const history = useHistory();
  const handlePushLogin = () => {
    history.push('/');
  };
  return (
    <Logo onClick={handlePushLogin}>LCYBLOG</Logo>
  );
}

export default LoginLogo;
