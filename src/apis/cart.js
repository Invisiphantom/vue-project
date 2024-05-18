import http_ from "@/utils/express"
import { useUserStore } from "@/stores/userStore"

// 获取-购物车列表
// token
export function findNewCartListAPI() {
    return http_.get('/member/cart', {
        params: { token: useUserStore().userInfo.token }
    })
}

// 新增购物车
// token
export function insertCartAPI(goods) {
    goods.token = useUserStore().userInfo.token
    return http_.get('/member/cart/add', { params: goods }
    )
}

// 根据ids删除购物车
// token
export const delCartAPI = (skuId) => {
    return http_.get('/member/cart/delete', {
        params: {
            skuId: skuId,
            token: useUserStore().userInfo.token
        }
    })
}

// 合并购物车
// token
export function mergeCartAPI(data) {
    return http_.get('/member/cart/merge/' + useUserStore().userInfo.token, { params: data })
}

// 修改购物项
// token
export function updateCartAPI(skuId, data) {
    data.token = useUserStore().userInfo.token
    return http_.get(`/member/cart/put/${skuId}`, { params: data })
}