import request from '@/utils/request'
export function userRegestierService({
  username,
  password,
  repassword,
  email
}) {
  return request.post('/api/user/register', {
    username,
    password,
    repassword,
    email
  })
}
//登录接口
export function userLoginService({ username, password, email }) {
  return request.post('/api/user/login', { username, password, email })
}
//获取用户信息接口
export function userGetInfoService() {
  return request.post('/api/users/:id/detail')
}
