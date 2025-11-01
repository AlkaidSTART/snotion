import { createMemoryHistory, createRouter } from 'vue-router'
import notion from '@/components/notionH.vue'
import register from '@/components/notionH.vue'
const routes = [
  { path: '/', component: notion },
  { path: '/about', component: notion }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
router.beforeEach(async (to, from) => {})
export default router
