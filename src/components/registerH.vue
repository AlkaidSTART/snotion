<script setup>
import { reactive, toRefs, ref, watch } from 'vue'
import { userRegestierService, userLoginService } from '@/api/user'
import { ElMessage } from 'element-plus'
import { User, Lock, Edit } from '@element-plus/icons-vue'
import { cellForced } from 'element-plus/es/components/table/src/config.mjs'
const form = ref()
const isRegister = ref(true)
const formData = reactive({
  username: '',
  password: '',
  email: '',
  re_password: ''
})
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 10, message: '用户名必须是5-10位字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    {
      pattern: /^\w+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/,
      message: '请输入正确的邮箱格式',
      trigger: 'blur'
    }
  ],
  re_password: [
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
  await form.value.validate()
  await userRegestierService(formData)
  console.log(1)
  ElMessage.success('注册成功')
  isRegister.value = false
}
async function login() {
  await form.value.validate()
  await userLoginService(formData)
  ElMessage.success('登录成功')
  isRegister.value = true
}

watch(isRegister, (newValue) => {
  Object.assign(formData, {
    username: '',
    password: '',
    email: '',
    re_password: ''
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
          prop="email"
        >
          <el-input
            v-model="formData.email"
            placeholder="请输入邮箱"
            :prefix-icon="Edit"
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
          prop="email"
        >
          <el-input
            v-model="formData.email"
            placeholder="请输入邮箱"
            :prefix-icon="Edit"
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
            v-model="formData.re_password"
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
// .box {
//   /* 移除overflow和text-overflow，允许文本正常显示 */
// }

/* 确保表单错误提示正常显示 */
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
