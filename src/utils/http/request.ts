import { AxiosRequestConfig } from 'axios';
import httpClient from './client';

/**
 * 统一请求方法
 * @param url
 * @param options
 * @returns
 */
async function request(url: string, options: AxiosRequestConfig) {
  console.log('## request => send: ' + url, options);

  return httpClient({
    url,
    ...options,
  })
    .then((res) => {
      console.log('## request => response: ', res.data);
      return res;
    })
    .catch((e) => {
      console.log('## request => catch: ', e);
      throw e;
    })
    .finally(() => {
      console.log('## request => finally');
    });
}

const Request = {
  get: (url: string, options?: AxiosRequestConfig) =>
    request(url, { method: 'get', ...options }),

  post: (
    url: string,
    data?: AxiosRequestConfig['data'],
    options?: AxiosRequestConfig,
  ) => request(url, { method: 'post', data, ...options }),

  put: (
    url: string,
    data?: AxiosRequestConfig['data'],
    options?: AxiosRequestConfig,
  ) => request(url, { method: 'put', data, ...options }),

  patch: (
    url: string,
    data?: AxiosRequestConfig['data'],
    options?: AxiosRequestConfig,
  ) => request(url, { method: 'patch', data, ...options }),

  delete: (url: string, options?: AxiosRequestConfig) =>
    request(url, { method: 'delete', ...options }),
};

export default Request;
