import React from 'react';
import styled from 'styled-components';
import { NormalButton } from '../../../common/button/button';

const FileInput = styled.input`
  display: none;
`;

function UploadImage(props) {
  return (
    <div>
      <FileInput
        type="file"
        accept="image/*"
        onChange={props.handleChange}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <NormalButton
          variant="contained"
          component="span"
        >
          上传图片
        </NormalButton>
      </label>
    </div>
  );
}

export default UploadImage;
