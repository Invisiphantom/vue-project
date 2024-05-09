// utils/http.js
// https://apifox.com/apidoc/shared-c05cb8d7-e591-4d9c-aff8-11065a0ec1de
import axios from 'axios'
import { useUserStore } from "@/stores/userStore"

const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 15000
})

http.interceptors.request.use(config => {
  const userStore = useUserStore();
  const token = userStore.userInfo.token;
  if(token){
      config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => Promise.reject(error))


http.interceptors.response.use(res => res.data, error => {    
  ElMessage({
      type: 'error',
      message: error.response.data.message
  })
  //401token失效处理
  const userStore = useUserStore();
  if(error.response.status === 401){
      userStore.clearUserInfo()
      router.push('/login')
  }

  return Promise.reject(error)
})

export default http