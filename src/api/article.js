import request from '@/utils/request'
export function getArticleListService(params) {
  return request.get('/my/article/list', { params })
}
