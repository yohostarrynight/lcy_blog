import React from 'react';
import ControllerInput from './controller_input';

function EmailInput(props) {
  return (
    <ControllerInput
      variant="outlined"
      label="请输入邮箱号"
      name="email"
      defaultValue={props.value}
      rules={{
        required: '邮箱号为必填选项',
        pattern: {
          value: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
          message: '请输入正确邮箱格式'
        }
      }}
    />
  );
}

export default EmailInput;
