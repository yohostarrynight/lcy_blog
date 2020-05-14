import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, FormContext } from 'react-hook-form';
import md5 from 'md5';
import UserNameInput from '../../../common/input/username_input';
import PasswordInput from '../../../common/input/password_input';
import ConfirmPasswordInput from '../../../common/input/confirm_password_input';
import PhoneInput from '../../../common/input/phone_input';
import EmailInput from '../../../common/input/email_input';
import { NormalButton } from '../../../common/button/button';
import axios from '../../../../axios_config/axios_config';
import SnackbarMessage from '../../../common/message/snackbar';

const RegisterForm = styled.div`
  .MuiFormControl-root {
    margin: 0 0 35px 0;
  }
  .MuiInputBase-root {
    width: 350px;
  }
  .MuiOutlinedInput-input {
    padding: 16px 14px;
  }
  .MuiInputLabel-outlined {
    transform: translate(14px, 18px) scale(1);
  }
  .errMessage {
    position: relative;
    top: -8px;
    margin-top: -18px;
  }
`;
const RegisterButton = styled(NormalButton)`
  &.MuiButton-root {
    margin: 0 66px
  };
`;

function AddUser() {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const [errMessage, setErrMessage] = useState({
    message: ''
  });
  const handleReset = () => {
    reset({
      username: '',
      password: '',
      confirmPassword: '',
      phone: '',
      email: ''
    });
  };
  const handleRegister = async (data) => {
    const { username, password, phone, email } = data;
    const result = await axios.post('/register', {
      username,
      password: md5(password),
      phone,
      email
    });
    if (result.data.code === 0) {
      handleReset();
    } else {
      setErrMessage({ ...errMessage, message: result.data.message });
    }
  };
  return (
    <RegisterForm>
      <FormContext {...methods}>
        <UserNameInput value="" />
        <PasswordInput value="" />
        <ConfirmPasswordInput value="" />
        <PhoneInput value="" />
        <EmailInput value="" />
      </FormContext>
      <SnackbarMessage message={errMessage} />
      <RegisterButton onClick={handleSubmit(handleRegister)}>新增</RegisterButton>
      <NormalButton onClick={handleReset}>重置</NormalButton>
    </RegisterForm >
  );
}

export default AddUser;
