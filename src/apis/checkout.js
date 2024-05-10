import http from '@/utils/http'
import http_ from "@/utils/express"

// 获取详情接口
export const getCheckInfoAPI = () => {
    return http_.get('/member/order/pre')
}

// 添加收货地址
export const addCheckAddressAPI = (userAddress) => {
    return http_.post('/member/order/pre', userAddress)
}


// 创建订单
export const createOrderAPI = (data) => {
    return http_.post('/member/order', data)
}