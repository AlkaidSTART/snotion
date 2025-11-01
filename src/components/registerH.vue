<script setup>
import { reactive, toRefs, ref } from 'vue'
const isRegister = ref(true)
const formData = reactive({
  username: '',
  password: '',
  email: '',
  repassword: ''
})
</script>

<template>
  <el-row class="container">
    <el-col
      :span="12"
      class="bg"
    ></el-col>
    <el-col
      :span="6"
      :offset="3"
      class="form"
    >
      <el-form v-if="isRegister">
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item
          label=""
          prop="username"
        >
          <el-input
            v-model="formData.username"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item
          label=""
          prop="email"
        >
          <el-input
            v-model="formData.email"
            placeholder="请输入邮箱"
          />
        </el-form-item>
        <el-form-item
          label=""
          prop="password"
        >
          <el-input
            v-model="formData.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox class="over">记住我</el-checkbox>
            <el-link
              type="primary"
              :underline="false"
            >
              忘记密码？
            </el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            class="button"
            type="primary"
            auto-insert-space
          >
            <div class="box">登录</div>
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link
            type="info"
            class="al"
            @click="isRegister = !isRegister"
          >
            注册 →
          </el-link>
        </el-form-item>
      </el-form>
      <!-- 注册 -->
      <el-form v-else>
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form>
          <el-form-item
            label=""
            prop="username"
          >
            <el-input
              v-model="formData.username"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item
            label=""
            prop="email"
          >
            <el-input
              v-model="formData.email"
              placeholder="请输入邮箱"
            />
          </el-form-item>
          <el-form-item
            label=""
            prop="password"
          >
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item
            label=""
            prop="repassword"
          >
            <el-input
              v-model="formData.repassword"
              placeholder="请确认密码"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              class="button"
              type="primary"
              auto-insert-space
            >
              <div class="box">注册</div>
            </el-button>
          </el-form-item>
          <el-form-item class="flex">
            <el-link
              type="info"
              class="al"
              @click="isRegister = !isRegister"
            >
              ← 返回
            </el-link>
          </el-form-item>
        </el-form>
      </el-form>
    </el-col>
  </el-row>
</template>
<style scoped lang="scss">
.container {
  height: 100vh;
  background-color: #fff;
}
.bg {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
}
h1 {
  width: 100%;
  margin: auto 0 auto 0;
  overflow: hidden;
}
.flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.over {
  overflow: hidden;
  :deep(.el-checkbox__label) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.button {
  width: 100%;
  height: 40px; /* 添加固定高度 */
  overflow: hidden; /* 添加溢出隐藏 */
}
.al {
  text-decoration: none;
}
.box {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
