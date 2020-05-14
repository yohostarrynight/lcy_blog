import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

const LoginFabButton = styled(Fab)`
   &.MuiFab-root {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: #0084ff;
    color: white;
  }
  &.MuiFab-root:hover {
    background-color: #0077e6;
  }
`;

function LoginButton(props) {
  return (
    <LoginFabButton
      variant="extended"
      onClick={props.handleClick}
    >
      登录
    </LoginFabButton>
  );
}

export default LoginButton;
