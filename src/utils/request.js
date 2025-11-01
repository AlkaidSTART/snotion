import axios from 'axios'
import { useUserStore } from '@/stores/index.js'
import { ElMessage } from 'element-plus'
const baseURL = ' https://network-demo.hub.feashow.cn'

const instance = axios.create({
  baseURL,
  timeout: 5000
})
//响应拦截器，用于后端响应前处理数据
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data)
  },
  (err) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (err.response.data.code === 401) {
      ElMessage.error('登录过期，请重新登录')
      useUserStore().removeToken()
      useUserStore().removeUser()
      window.location.href = '/login'
    }
  }
)
export default instance
export { baseURL }
