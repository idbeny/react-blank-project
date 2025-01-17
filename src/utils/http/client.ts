import axios from 'axios';
import { BASE_URL, Header, TIMEOUT } from './config';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 添加请求拦截器
httpClient.interceptors.request.use(
  (config) => {
    for (const key in Header) {
      if (Object.prototype.hasOwnProperty.call(Header, key)) {
        const value = Header[key];
        config.headers[key] = value;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function setHttpHeader(header: any) {
  for (const key in header) {
    if (Object.prototype.hasOwnProperty.call(header, key)) {
      const value = header[key];
      Header[key] = value;
    }
  }
}

export function resetHttpHeader() {
  for (const key in Header) {
    if (Object.prototype.hasOwnProperty.call(Header, key)) {
      delete Header[key];
    }
  }
}

export default httpClient;
