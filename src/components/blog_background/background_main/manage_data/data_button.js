import React from 'react';
import styled from 'styled-components';
import { NormalButton } from '../../../common/button/button';

const SubmitButton = styled(NormalButton)`
  &.MuiButton-root {
    margin: 10px 0 0 0;
    width: 200px;
  }
`;

function DataButton(props) {
  return (
    <SubmitButton onClick={props.handleClick}>提交</SubmitButton>
  );
}

export default DataButton;
