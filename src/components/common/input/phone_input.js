import React from 'react';
import ControllerInput from './controller_input';

function PhoneInput(props) {
  return (
    <ControllerInput
      variant="outlined"
      label="请输入手机号"
      name="phone"
      defaultValue={props.value}
      rules={{
        required: '手机号为必填选项',
        pattern: {
          value: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
          message: '请输入正确的手机格式'
        }
      }}
    />
  );
}

export default PhoneInput;
