import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const Title = styled(TextField)`
  &.MuiFormControl-root {
    margin: 10px 0px;
  }
  .MuiOutlinedInput-root {
    width: 324px;
  }
  .MuiOutlinedInput-input {
    padding: 14px 14px;
  }
  .MuiInputLabel-outlined {
    transform: translate(14px, 14px) scale(1);
  }
`;
function DataTitle(props) {
  return (
    <Title
      variant="outlined"
      label="请输入标题名"
      type="text"
      value={props.value}
      onChange={props.handleChange}
    />
  );
}

export default DataTitle;
