import axios from 'axios';
import {getLocalStorage, removeLocalStorage} from '@utils/helpers';
import {getBaseHost} from '@configs/baseURL';
const queryString = require('query-string');


const axiosInstance = axios.create({
    baseURL: getBaseHost(),
    maxContentLength: 10000,
    maxBodyLength: 10000,
    headers: {
      'content-type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

// Add a request interceptor
axiosInstance.interceptors.request.use(async (config) => {
  const customHeaders = {};

  // Add token to headers if it exists
  const accessToken = getLocalStorage('access_token');
  if (accessToken) {
    const tokenType = getLocalStorage('token_type');
    customHeaders.Authorization = `${tokenType} ${accessToken}`;
  }

  return{
    ...config,
    headers:{
      ...customHeaders,
      ...config.headers,
    }
  }
});
  
  // Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },

    function (error) {
      if (!error.response) {
        return Promise.reject(error);
      }
      const {
          response: { status },
      } = error;
      if (status === 401) {
          removeLocalStorage('access_token')
          removeLocalStorage('token_type')
          removeLocalStorage('user')
          if(typeof window !== 'undefined'){
            window.location.replace('/login');
          }
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

export default axiosInstance;
