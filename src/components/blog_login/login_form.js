import React from 'react';
import styled from 'styled-components';
import LoginFormTitle from './login_form_title';
import LoginFormInput from './login_form_input';

const Form = styled.div`
  width: 350px;
  margin: 50px auto 0 auto;
  padding: 50px 60px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  text-align: center;
`;

function LoginForm() {
  return (
    <Form>
      <LoginFormTitle />
      <LoginFormInput />
    </Form>
  );
}

export default LoginForm;
