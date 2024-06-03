import axios from 'axios';

const api = axios.create({
  baseURL: 'http://78.110.160.52:7070',
  timeout: 100000, 
});

// Add a request interceptor to include the token in the headers
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
