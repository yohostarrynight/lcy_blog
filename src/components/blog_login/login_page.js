import React from 'react';
import styled from 'styled-components';
import LoginLogo from './login_logo';
import LoginForm from './login_form';

const LoginBackground = styled.div`
  min-height: 1080px;
  background: #f1f1f1;
`;

function LoginPage() {
  return (
    <LoginBackground>
      <LoginLogo />
      <LoginForm />
    </LoginBackground>
  );
}

export default LoginPage;
