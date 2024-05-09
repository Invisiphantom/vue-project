import http from "@/utils/http"

// 根据一级分类id 获取二级分类列表
export function getTopCategoryAPI(id) {
  return http.get('/category', { params: { id } })
}

// 获取-轮播图数据
// 投放位置: 1为首页，2为分类商品页
export function getBannerAPI(distributionSite = '1') {
  return http.get('/home/banner', { params: { distributionSite } })
}


// 根据id获得二级分类对象信息
export function getCategoryFilterAPI(id){
  return http.get('/category/sub/filter',{params:{id}});
}

/**
* @description: 获取二级分类商品列表
* @data {
   categoryId: 1005000 ,
   page: 1,
   pageSize: 20,
   sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 }
* @return {*}
*/
export const getSubCategoryAPI = (data) => {
  return http.post('/category/goods/temporary',data);
}