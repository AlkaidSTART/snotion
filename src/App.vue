<template>
  <div class="app">
    <!-- 根据路由显示不同内容 -->
    <router-view v-if="$route.path === '/login'" />
    <div
      v-else
      class="layout"
    >
      <NavHeader>
        <template #Notion>
          <Notion />
        </template>
        <template #Explore>
          <Explore />
        </template>
      </NavHeader>
      <MainPage />
      <InformationFooter />
    </div>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import MainPage from './components/MainPage.vue'
import InformationFooter from './components/InformationFooter.vue'
import Notion from './components/notionH.vue'
import Explore from './components/exploreH.vue'

export default {
  components: {
    NavHeader,
    MainPage,
    InformationFooter,
    Notion,
    Explore
  }
}
</script>
