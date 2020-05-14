import React from 'react';
import styled from 'styled-components';
import { RememberCheckBox } from './input_style';

const RememberSpan = styled.span`
  float: left;
  margin: 11px 0 0 0;
  cursor: pointer;
`;

function RememberInput(props) {
  return (
    <div>
      <RememberCheckBox
        checked={props.checked}
        onChange={props.handleChange}
      />
      <RememberSpan onClick={props.handleChange}>记住密码</RememberSpan>
    </div>
  );
}

export default RememberInput;
