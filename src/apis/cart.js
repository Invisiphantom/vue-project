import http_ from "@/utils/express"

// 获取-购物车列表
// token
export function findNewCartListAPI() {
    return http_.get('/member/cart')
}

// 新增购物车
// token
export function insertCartAPI(goods) {
    return http_.post('/member/cart', goods)
}

// 根据ids删除购物车
// token
export const delCartAPI = (ids) => {
    return http_.delete('/member/cart', { data: { ids } })
}

// 合并购物车
// token
export function mergeCartAPI(data) {
    return http_.post('/member/cart/merge', data)
}

// 修改购物项
// token
export function updateCartAPI(skuId, data) {
    return http_.put(`/member/cart/${skuId}`, data)
}