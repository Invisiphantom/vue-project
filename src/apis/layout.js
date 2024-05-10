import http_ from "@/utils/express"

// 获取全部分类(包含推荐商品)
// id name children[0,1] goods
// goods: picture name desc price
export function getCategoryAPI() {
    return http_.get('home/category/head')
}