import axios from 'axios';
import { getCookie } from '../utils/cookies';

axios.defaults.baseURL = 'http://47.101.219.129:3000';
axios.defaults.timeout = 100000;

axios.interceptors.request.use(config => {
  const token = getCookie('token');
  config.headers.common.Authorization = 'Bearer ' + token;
  return config;
});

axios.interceptors.response.use(response => {
  return response;
},
err => {
  if (err.response.status === 401) {
    window.location.href = '/';
  }
  return Promise.reject(err);
});

export default axios;
