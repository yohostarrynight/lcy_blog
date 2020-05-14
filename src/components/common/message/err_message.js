import React from 'react';
import styled from 'styled-components';

const Err = styled.div`
  color: red;
`;

function ErrMessage(props) {
  return (
    <Err>{props.message}</Err>
  );
}

export default ErrMessage;
