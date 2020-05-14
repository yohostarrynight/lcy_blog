import React from 'react';
import styled from 'styled-components';
import ErrMessage from '../../../common/message/err_message';

const Message = styled.div`
  text-align: end;
  margin-right: 24px;
`;

function EditDialogErrMessage(props) {
  return (
    <Message>
      <ErrMessage message={props.message} />
    </Message>
  );
}

export default EditDialogErrMessage;
