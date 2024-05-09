import http_ from "@/utils/express"
import http from "@/utils/http"

// 根据id获得商品详情
// id name mainPictures price {categories}
// salesCount commentCount collectCount brand
// desc oldPrice price
// {skus} {specs}
// details:{properties, pictures}
export function getDetail(id) {
  return http_.get('/goods', { params: { id } })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return http.get('/goods/hot', {
    params: { id, type, limit }
  })
}