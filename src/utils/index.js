import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { authorization: localStorage.getItem('user') },
});

export { axios };
