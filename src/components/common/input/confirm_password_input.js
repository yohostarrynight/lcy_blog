import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ControllerInput from './controller_input';

function ConfirmPasswordInput(props) {
  const { watch, clearError } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ControllerInput
      variant="outlined"
      label="请再次输入密码"
      name="confirmPassword"
      type={showPassword ? 'text' : 'password'}
      defaultValue={props.value}
      rules={{
        required: '再次输入密码为必填选项',
        validate: {
          message: value => (value === watch('password')
            ? clearError(['confirmPassword'])
            : '密码应一致')
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}

export default ConfirmPasswordInput;
