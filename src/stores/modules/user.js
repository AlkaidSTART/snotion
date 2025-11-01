import { defineStore } from 'pinia'
import { userGetInfoService } from '@/api/user'
import { ref } from 'vue'

//用户模块
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    //用户信息
    const user = ref({})
    //设置token
    const setToken = (newToken) => {
      token.value = newToken
    }
    //删除token
    const removeToken = () => {
      token.value = ''
    }
    //获取用户信息
    const getUser = async () => {
      const res = await userGetInfoService()
      if (res.code === 200) {
        user.value = res.data.data
      }
    }
    const setUser = (obj) => {
      user.value = obj
    }
    return { token, user, setToken, removeToken, getUser, setUser }
  },
  {
    persist: true
  }
)
