import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { ElLoading } from 'element-plus'

let loading: any;
axios.defaults.baseURL = '/api'

// 加载动画的开始
const startLoading = () => {
    // ts的类型匹配
    interface Options {
        lock: boolean;
        text: string;
        background: string;
    };

    const options:Options = {
        lock: true,
        text: "加载中...",
        background: "rgba(0,0,0,0.7)",
    }
    loading = ElLoading.service(options);
}

// 加载动画的结束
const endLoading = () => {
    loading.close();
}




// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // 加载开始动画
    startLoading();
    return config;
})

// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
    // 结束loading
    endLoading();
    return response;
}, error => {
    endLoading();
    // 错误提醒
    return Promise.reject(error);
})

export default axios;