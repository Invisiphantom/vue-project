import http_ from "@/utils/express"

// 获取轮播图数据
// id imgUrl
export function getBannerAPI(){
    return http_.get('/home/banner')
}

// 获取人气推荐
// id picture title alt
export const getHotAPI = () => {
    return http_.get('/home/hot')
}

// 获取新鲜好物
// id picture name price
export const getNewAPI = () => {
    return http_.get('/home/new')
}

// 获取产品列表
// id name picture saleInfo goods
// goods: id picture name desc price
export const getGoodsAPI = () => {
    return http_.get('/home/goods')
}