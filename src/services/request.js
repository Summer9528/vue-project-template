import Axios from 'axios'
const service = Axios.create({
  headers: {}
})

// request interceptor
service.interceptors.request.use(config => {
  return config
})

// response interceptor
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.warn('err' + error)
    return Promise.reject(error)
  }
)

export default service
