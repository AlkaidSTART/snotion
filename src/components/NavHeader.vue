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
    <div class="login">Log in</div>
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

<script setup>
import { ref } from 'vue'

const notionImgRef = ref(null)
const exploreImgRef = ref(null)
const childRef = ref(null)
const showChild = ref(false)
const currentDropdown = ref('')
const freeBtn = ref(null)
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
</script>
<style scoped>
* {
  overflow-y: hidden;
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
  position: fixed;
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
  width: 11rem;
  height: 2.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  border-radius: 1rem;
  border: 1px solid #000;
  margin-left: 1rem;
  background-color: #000;
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
