import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 15000
})

http.interceptors.request.use(config => {
  return config
}, error => Promise.reject(error))


http.interceptors.response.use(res => res.data, error => {    
  ElMessage({
      type: 'error',
      message: error.response.data.message
  })
  return Promise.reject(error)
})

export default http