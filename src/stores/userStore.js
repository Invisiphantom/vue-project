import { loginAPI } from '@/apis/user'
import { useCartStore } from "@/stores/cartStore"
import { mergeCartAPI } from "@/apis/cart"

export const useUserStore = defineStore('user', () => {

  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  const cartStore = useCartStore()

  // 2. 定义获取接口数据的action函数
  const getUserInfo = async (user) => {
    const res = await loginAPI(user)
    userInfo.value = res.result
    // 将未登录状态下的购物车列表合并到登录状态下
    // await mergeCartAPI(cartStore.cartList.map(item => {
    //   return {
    //     goodsId: item.goodsId,
    //     name: item.name,
    //     picture: item.picture,
    //     price: item.price,
    //     count: item.count,
    //     skuId: item.skuId,
    //     attrsText: item.attrsText,
    //     selected: item.selected,
    //     specs: item.specs,
    //     postFee: item.postFee,
    //   }
    // }))
    // 更新购物车列表
    cartStore.updateLoginCartList()
  }

  // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo,
  }
}, { persist: true })