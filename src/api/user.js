import request from '@/utils/request'
export function userRegistierService({ username, password, repassword }) {
  return request.post('/api/reg', {
    username,
    password,
    repassword
  })
}
//登录接口
export function userLoginService({ username, password }) {
  return request.post('/api/login', { username, password })
}
//获取用户信息接口
export function userGetInfoService() {
  return request.post('/my/userinfo')
}
