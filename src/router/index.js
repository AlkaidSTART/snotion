import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import notion from '@/components/notionH.vue'
import register from '@/components/registerH.vue'
const routes = [
  { path: '/login', component: register },
  { path: '/', component: notion }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(async (to, from) => {})
export default router
