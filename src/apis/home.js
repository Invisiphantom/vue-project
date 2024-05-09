import http from "@/utils/http"

// 获取轮播图数据
export function getBannerAPI(){
    return http.get('/home/banner')
}

// 获取人气推荐
export const getHotAPI = () => {
    return http.get('/home/hot')
}

// 获取新鲜好物
export const getNewAPI = () => {
    return http.get('/home/new')
}

// 获取产品列表
export const getGoodsAPI = () => {
    return http.get('/home/goods')
}