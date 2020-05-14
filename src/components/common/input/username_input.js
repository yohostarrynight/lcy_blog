import React from 'react';
import ControllerInput from './controller_input';

function UserNameInput(props) {
  return (
    <ControllerInput
      variant="outlined"
      label="请输入账号"
      name="username"
      defaultValue={props.value}
      rules={{
        required: '用户名为必填选项'
      }}
    />
  );
}

export default UserNameInput;
