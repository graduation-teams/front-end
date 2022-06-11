import axios from 'axios';
import {getLocalStorage, removeLocalStorage} from '@utils/helpers';
import {getBaseHost} from '@configs/baseURL';

const axiosInstance = axios.create({
    baseURL: getBaseHost(),
    maxContentLength: 10000,
    maxBodyLength: 10000,
    headers: {
      Authorization: {
        toString: () => {
          return `Bearer ${getLocalStorage("token")??''}`;
        },
      },
    },
    
});

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      if (config.headers.Authorization.toString().length < 50) {
        delete config.headers.Authorization;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  axios.interceptors.response.use(
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
          removeLocalStorage('token')
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
