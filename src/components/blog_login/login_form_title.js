import React from 'react';
import styled from 'styled-components';

const FormTitle = styled.div`
  margin-bottom: 40px;
  color: #ea6f5a;
  font-size: 20px;
  font-weight: bold;  
`;
const IntervalSpan = styled.span`
  margin-right: 20px;
`;

function LoginFormTitle() {
  return (
    <FormTitle>
      <IntervalSpan>登</IntervalSpan>
      <span>录</span>
    </FormTitle>
  );
}

export default LoginFormTitle;
