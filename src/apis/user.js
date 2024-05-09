import http from "@/utils/http";

// 登录-用户名密码
export function loginAPI(user){
    return http.post('/login',user);
}

// 获取用户可能喜欢的商品列表
export const getLikeListAPI = ({ limit = 4 }) => {
    return http.get('/goods/relevant',{params:{limit}});
}