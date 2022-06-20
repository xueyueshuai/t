import axios from 'axios'
import router from '@/router'

import { Message } from 'element-ui'

const myAxiosInstance = axios.create({
  // timeout: 6000,
})

myAxiosInstance.interceptors.request.use(
  requestConfig => {
    requestConfig.baseURL = 'http://127.0.0.1:9202/api/v1_0_0.atest/test27'
    if (localStorage.getItem('token')) {
      requestConfig.headers.authorization_token = localStorage.getItem('token') || '';
    }

    // return requestConfig; 或 return Promise.resolve(requestConfig);
    return Promise.resolve(requestConfig);
  },
  err => {
    Message({
      type: 'error',
      message: '请求异常',
      duration: 4 * 1000
    })
    return Promise.reject(err);
  }
)

myAxiosInstance.interceptors.response.use(
  response => {
    console.log('response', response)

    const res = response.data
    if (res.code === 200) {
      // 成功响应
      // return res; 或 return Promise.resolve(res);
      return res
    }

    if (res.code === 201) {
      // 消息提示
      Message({
        type: 'error',
        message: res.msg || '系统错误',
        duration: 4 * 1000
      })
      return Promise.reject(res)
    }

    if (res.code === 202) {
      // 登录令牌失效
      // 清除登录信息 todo...
      // 去往登录页面 todo...
      console.log('清除登录信息 todo... , 去往登录页面 todo...');
      return Promise.reject(res)
    }

    return Promise.reject(res)
  },
  error => {
    Message({
      type: 'error',
      message: '响应异常',
      duration: 4 * 1000
    })
    return Promise.reject(error)
  }
)




export default myAxiosInstance
