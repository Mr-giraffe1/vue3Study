import axios from 'axios';
import { ResponseCode } from '@/common/utils/enum';

export const request = (axios as any).create({
    baseURL: import.meta.env.VITE_API_AXIOS,
    timeout: 5000
});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
