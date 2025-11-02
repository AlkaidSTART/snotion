import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 创建Pinia实例并配置插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 创建Vue应用实例并挂载插件
const app = createApp(App)

// 注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 挂载路由和Pinia
app.use(router)
app.use(pinia) // 添加这行，挂载Pinia到Vue应用

// 挂载应用
app.mount('#app')
