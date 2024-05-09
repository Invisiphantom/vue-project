import http_ from "@/utils/express"
import http from "@/utils/http"

// 根据一级分类id 获取二级分类列表
// name {children}
// children: id name picture {goods}
export function getTopCategoryAPI(id) {
  return http_.get('/category', { params: { id } })
}

// 获取-轮播图数据
// 投放位置: 1为首页，2为分类商品页
// imgUrl
export function getBannerAPI(distributionSite = '1') {
  return http_.get('/home/banner', { params: { distributionSite } })
}


// 根据id获得二级分类对象信息
// parentID, parentName, name
export function getCategoryFilterAPI(id) {
  return http.get('/category/sub/filter', { params: { id } })
}

/*
req: {
  categoryId: 1005000 ,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
}
res: items(goods)
*/
// 获取二级分类商品列表
export const getSubCategoryAPI = (data) => {
  return http.post('/category/goods/temporary', data)
}