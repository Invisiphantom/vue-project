import http_ from "@/utils/express"
import http from "@/utils/http"

// 登录-用户名密码
// id account password
// mobile email token
// nickname avatar gender birthday
export function loginAPI(user) {
    return http_.post('/login', user)
}

// 获取用户可能喜欢的商品列表
export const getLikeListAPI = ({ limit = 4 }) => {
    return http.get('/goods/relevant', { params: { limit } })
}