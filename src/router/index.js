import { createRouter, createWebHistory } from 'vue-router'
import notion from '@/components/notionH.vue'
import register from '@/components/registerH.vue'
import { useUserStore } from '@/stores/index.js'
const routes = [
  { path: '/login', component: register },
  { path: '/', component: notion }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//登录访问拦截  默认直接放行
// router.beforeEach((to) => {
//   // 如果没有token，且访问的的是非登录页，拦截到登录，其他情况正常放行
//   const userStore = useUserStore()
//   if (!userStore.token && to.path !== '/login') {
//     return '/login'
//   }
// })
export default router
