<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus' // 引入消息提示组件
import { useUserStore } from '@/stores/index.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()
const notionImgRef = ref(null)
const exploreImgRef = ref(null)
const childRef = ref(null)
const showChild = ref(false)
const currentDropdown = ref('')
const freeBtn = ref(null)
const popoverVisible = ref(false) // 控制弹出框显示隐藏

function showDropdown(type) {
  currentDropdown.value = type
  showChild.value = true
  setRotationStyle(type, true)
}

function hideDropdown() {
  showChild.value = false
  setRotationStyle(currentDropdown.value, false)
  currentDropdown.value = ''
}

function setRotationStyle(type, isRotated) {
  let element = null
  if (type === 'notion') {
    element = notionImgRef.value
    freeBtn.value.style.backgroundColor = isRotated ? '#abcdef' : '#000'
  } else if (type === 'explore') {
    element = exploreImgRef.value
    if (freeBtn.value) {
      freeBtn.value.style.backgroundColor = isRotated ? '#abcdef' : '#000'
    }
  }

  if (!element) return
  element.style.transform = isRotated ? 'rotate(180deg)' : 'rotate(0deg)'
  element.style.transition = 'transform 0.4s ease'
}

// 退出登录逻辑
// 退出登录逻辑
const handleLogout = () => {
  popoverVisible.value = false // 关闭弹出框
  userStore.removeToken()
  userStore.setUser({}) // 修改这行：使用setUser清空用户信息，而不是removeUser
  ElMessage.success('已成功退出登录')
  router.push('/login')
}
</script>
<template>
  <nav class="header">
    <div class="logo">
      <img
        src="../assets/img/notion.png"
        alt=""
      />
    </div>
    <div class="items">
      <div
        class="item"
        @mouseenter="showDropdown('notion')"
        style="cursor: pointer"
      >
        Notion
        <img
          ref="notionImgRef"
          src="../assets/img/向下箭头.png"
          alt=""
        />
      </div>
      <div class="item">Mail</div>
      <div class="item">Calendar</div>
      <div class="item">AI</div>
      <div class="item">Enterprise</div>
      <div class="item">Pricing</div>
      <div
        class="item"
        @mouseenter="showDropdown('explore')"
        style="cursor: pointer"
      >
        Explore
        <img
          ref="exploreImgRef"
          src="../assets/img/向下箭头.png"
          alt=""
        />
      </div>
      <div class="item">Request a demo</div>
    </div>
    <ElPopover
      placement="bottom"
      width="240"
      trigger="click"
      popper-class="popover"
      style="margin-left: 2rem"
      v-model:visible="popoverVisible"
    >
      <div class="confirm-content">
        <p>确定要退出登录吗？</p>
        <div class="button-group">
          <!-- 取消按钮 -->
          <el-button
            size="small"
            @click="popoverVisible = false"
            class="cancel-btn"
            style="width: 50px"
          >
            取消
          </el-button>
          <!-- 确认按钮（执行退出逻辑） -->
          <el-button
            size="small"
            type="danger"
            @click="handleLogout"
            class="confirm-btn"
          >
            确认退出
          </el-button>
        </div>
      </div>
      <template #reference>
        <el-button class="logout-btn">退出登录</el-button>
      </template>
    </ElPopover>

    <div class="free">
      <button ref="freeBtn">Get Notion free</button>
    </div>
  </nav>
  <div
    class="child"
    v-show="showChild"
    ref="childRef"
    @mouseleave="hideDropdown"
  >
    <slot
      name="Notion"
      v-if="currentDropdown === 'notion'"
    ></slot>
    <slot
      name="Explore"
      v-if="currentDropdown === 'explore'"
    ></slot>
  </div>
</template>

<style scoped>
.popover {
  margin-left: 20px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

/* 退出按钮样式 */
.logout-btn {
  background-color: #f5f5f5;
  color: #333;
  border: none;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background-color: #e8e8e8;
  color: #000;
  transform: translateY(-1px);
}

/* 弹出框内按钮样式 */
.button-group {
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.cancel-btn {
  background-color: #f5f5f5;
  color: #666;
  border: none;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.cancel-btn:hover {
  background-color: #e8e8e8;
  color: #333;
}

.confirm-btn {
  border-radius: 4px;
  transition: all 0.2s ease;
}

.confirm-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.3);
}

.confirm-content p {
  color: #333;
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
}

/* 原有样式保持不变 */
* {
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header {
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 1rem 1rem 0.5rem 2rem;
  align-items: center;
  z-index: 9999;
  margin-bottom: 10vw;
  background-color: #fff;
}

.logo {
  width: 2rem;
  height: 2rem;
  margin-right: 12rem;
}

.items {
  width: 40rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
}

.item > img {
  width: 1rem;
  height: 1rem;
  margin-left: 0.2rem;
  padding-top: 0.2rem;
}

.login {
  width: 4rem;
  height: 2rem;
  font-size: 1.2rem;
  margin-left: 5rem;
  font-weight: 700;
  color: #000;
}

.free > button {
  width: 9rem;
  height: 2.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  border-radius: 1rem;
  border: 2px solid #000;
  margin-left: 1rem;
  background-color: #000;
  padding: auto;
}

.child {
  height: auto;
  background-color: #fff;
  margin-left: 7vw;
  margin-right: 15vw;
  position: fixed;
  top: 5rem;
  z-index: 9998;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
