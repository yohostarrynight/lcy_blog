import React from 'react';
import styled from 'styled-components';

const ValidateErr = styled.div`
  color: red;
`;

function InputErrMessage(props) {
  return (
    <ValidateErr className="errMessage">{props.message}</ValidateErr>
  );
}

export default InputErrMessage;
