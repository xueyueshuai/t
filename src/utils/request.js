import axios from 'axios'
import router from '@/router'

import { Message } from 'element-ui'

const service = axios.create({
  // timeout: 6000,
})

service.interceptors.request.use(
  requestConfig => {
    requestConfig.baseURL = 'http://xxx.com'
    if (localStorage.getItem('token')) {
      requestConfig.headers.authorization_token = localStorage.getItem('token') || '';
    }

    // return requestConfig; 或 return Promise.resolve(requestConfig);
    return Promise.resolve(requestConfig);
  },
  err => {
    Message({
      type: 'error',
      message: '请求超时!',
      duration: 4 * 1000
    })
    return Promise.reject(err);
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      // 成功响应
      return Promise.resolve(res)
    } else if (res.code === 201) {
      // 消息提示
      Message({
        type: 'error',
        message: res.msg || '系统错误',
        duration: 4 * 1000
      })
      return Promise.reject(res)
    } else if (res.code === 202) {
      // 登录令牌失效
      // 清除登录信息 todo...
      // 去往登录页面 todo...
      return Promise.reject(res)
    } else {
      return Promise.reject(res)
    }
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

export default service
