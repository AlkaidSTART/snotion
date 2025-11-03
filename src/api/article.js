import request from '@/utils/request'
export function getArticleListService(params) {
  return request.get('/my/article/list', { params })
}
export function getArticleDetailService(id) {
  return request.get('/my/article/detail', { params: { id } })
}
