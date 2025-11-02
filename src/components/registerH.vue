<script setup>
import { reactive, toRefs, ref, watch } from 'vue'
import { userRegistierService, userLoginService } from '@/api/user'
import { ElMessage } from 'element-plus'
import { User, Lock, Edit } from '@element-plus/icons-vue'
import { cellForced } from 'element-plus/es/components/table/src/config.mjs'
const form = ref()
const isRegister = ref(true)

const formData = reactive({
  username: '',
  password: '',
  re_password: ''
})
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 1, max: 10, message: '用户名必须是1-10位字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    }
  ],
  repassword: [
    { required: true, message: '请确认密码', trigger: ['blur', 'change'] },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        if (value !== formData.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}
async function register() {
  try {
    // 1. 表单验证
    await form.value.validate()
    // 2. 接口请求
    await userRegistierService(formData)
    // 3. 成功提示
    ElMessage.success('注册成功')
    isRegister.value = false
  } catch (error) {
    // 捕获所有可能的错误（验证失败、网络错误、服务器错误等）
    console.log('注册失败：', error)
    // 可根据错误类型显示对应提示
    if (error.response) {
      ElMessage.error(error.response.data.message || '注册失败，请重试')
    } else if (error.code === 'ERR_NETWORK') {
      ElMessage.error('网络连接失败')
    } else {
      ElMessage.error('操作失败')
    }
  }
}

async function login() {
  try {
    await form.value.validate()
    await userLoginService(formData)
    ElMessage.success('登录成功')
  } catch (error) {
    console.log('登录失败：', error)
    if (error.response) {
      console.log('后端详细错误：', error.response.data)
      ElMessage.error(error.response.data.message || '注册失败')
    } else if (error.code === 'ERR_NETWORK') {
      ElMessage.error('网络连接失败')
    } else {
      ElMessage.error('操作失败')
    }
  }
}
watch(isRegister, (newValue) => {
  Object.assign(formData, {
    username: '',
    password: '',
    repassword: ''
  })
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
      <el-form
        v-if="isRegister"
        ref="form"
        :model="formData"
        :rules="rules"
        size="large"
        autocomplete="off"
      >
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
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item
          label=""
          prop="password"
        >
          <el-input
            v-model="formData.password"
            placeholder="请输入密码"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox class="over">记住我</el-checkbox>
            <el-link
              type="primary"
              underline="never"
              size="large"
              autocomplete="off"
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
            @click="login"
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
      <el-form
        v-else
        ref="form"
        :model="formData"
        :rules="rules"
        size="large"
        autocomplete="off"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item
          label=""
          prop="username"
        >
          <el-input
            v-model="formData.username"
            placeholder="请输入用户名"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item
          label=""
          prop="password"
        >
          <el-input
            v-model="formData.password"
            placeholder="请输入密码"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item
          label=""
          prop="re_password"
        >
          <el-input
            v-model="formData.repassword"
            placeholder="请确认密码"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="button"
            type="primary"
            auto-insert-space
            @click="register"
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
    </el-col>
  </el-row>
</template>
<style scoped lang="scss">
:global(.el-message) {
  position: fixed !important;
  top: 45% !important;
  left: 55% !important;
  transform: translateX(-50%) !important;
  z-index: 9999 !important;
}
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
  /* 确保错误提示不被裁剪 */
  //   overflow: visible;
}
// .custom-form-item {
//   :deep(.el-form-item) {
//     height: 30px;
//   }
// }
h1 {
  width: 100%;
  /* 移除overflow: hidden，允许标题正常显示 */
}
.flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.over {
  /* 移除overflow: hidden，确保复选框标签正常显示 */
  :deep(.el-checkbox__label) {
    white-space: nowrap;
  }
}
.button {
  width: 100%;
  height: 40px; /* 保持固定高度 */
  /* 移除overflow: hidden，允许按钮内容正常显示 */
}
.al {
  text-decoration: none;
}
:deep(.el-form-item__error) {
  white-space: nowrap;
  overflow: visible;
  position: absolute; // 改为绝对定位
  top: 100%; // 显示在输入框下方
  left: 0;
  z-index: 10;
  margin-top: 2px; // 添加一点间距
}
/* 确保表单项不会产生滚动 */
:deep(.el-form-item) {
  overflow: visible;
}

/* 确保输入框不会产生滚动 */
:deep(.el-input) {
  overflow: visible;
}
</style>
