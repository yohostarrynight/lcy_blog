import React, { useState, useEffect, useRef } from 'react';
import md5 from 'md5';
import { useForm, FormContext } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import axios from '../../axios_config/axios_config';
import { LoginTextField } from './input_style';
import UserNameInput from '../common/input/username_input';
import PasswordInput from '../common/input/password_input';
import RememberInput from './remember_input';
import LoginButton from './login_button';
import SnackbarMessage from '../common/message/snackbar';

function LoginFormInput() {
  const methods = useForm();
  const { handleSubmit, setValue, getValues } = methods;
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['username', 'password', 'remember', 'token']);
  const [checked, setChecked] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const [errMessage, setErrMessage] = useState({
    message: ''
  });
  const setCookies = cookie => {
    Object.keys(cookie).forEach(cookieDetail => {
      setCookie(cookieDetail, cookie[cookieDetail], { path: '/' });
    });
  };
  const handleLogin = async (data) => {
    const { username, password } = data;
    const result = await axios.post('/login', {
      username,
      password: md5(password)
    });
    if (result.data.code === 0) {
      setLoginStatus(true);
      setCookies({
        token: result.data.data.token
      });
      history.push('/background');
    } else {
      setLoginStatus(false);
      setErrMessage({ ...errMessage, message: result.data.message });
    }
  };
  const handleChangeRemember = () => {
    setChecked(!checked);
  };
  const handleRemember = () => {
    cookies.remember === 'true' && (function setFormData() {
      setChecked(true);
      setValue([
        { username: cookies.username },
        { password: cookies.password }
      ]);
    }());
  };
  useEffect(() => {
    handleRemember();
  }, []);
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else if (loginStatus === true) {
      if (checked === true) {
        const { username, password } = getValues();
        setCookies({
          username,
          password,
          remember: checked
        });
      } else {
        setCookies({
          username: null,
          password: null,
          remember: checked
        });
      }
    } else if (loginStatus === false) {
      setCookies({
        username: null,
        password: null,
        remember: false,
        token: null
      });
    }
  }, [loginStatus]);
  return (
    <div>
      <FormContext {...methods}>
        <LoginTextField>
          <UserNameInput value="" />
          <PasswordInput value="" />
          <RememberInput
            checked={checked}
            handleChange={handleChangeRemember}
          />
        </LoginTextField>
      </FormContext>
      <LoginButton handleClick={handleSubmit(handleLogin)} />
      <SnackbarMessage message={errMessage} />
    </div>
  );
}

export default LoginFormInput;
