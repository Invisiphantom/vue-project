import http from "@/utils/http"

// 获取-购物车列表
export function findNewCartListAPI() {
    return http.get('/member/cart')
}

// 根据sku对象进行新增购物车
export function insertCartAPI(sku) {
    return http.post('/member/cart', sku)
}

// 根据ids删除购物车
export const delCartAPI = (ids) => {
    return http.delete('/member/cart', { data: { ids } })
}

// 合并购物车
export function mergeCartAPI(data) {
    return http.post('/member/cart/merge', data)
}

// 修改购物项
export function updateCartAPI(skuId, data) {
    return http.put(`/member/cart/${skuId}`, data)
}