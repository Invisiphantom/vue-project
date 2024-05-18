import { useUserStore } from "@/stores/userStore"
import { findNewCartListAPI, insertCartAPI, delCartAPI, updateCartAPI } from "@/apis/cart"

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])

  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  const updateLoginCartList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }

  const addCart = async (goods) => {
    if (isLogin.value) {
      await insertCartAPI(goods)
      updateLoginCartList()
    } else {
      const item = cartList.value.find(item => goods.skuId === item.skuId)
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }
  }

  const delCart = async (skuId) => {
    if (isLogin.value) {
      await delCartAPI(skuId)
      updateLoginCartList()
    } else {
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  }

  const updateCart = async (goods) => {
    const { skuId, count, selected } = goods
    if (isLogin.value) {
      await updateCartAPI(skuId, { count, selected })
    }
  }

  const clearCart = () => {
    cartList.value = []
  }

  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

  const isAll = computed(() => cartList.value.every((item) => item.selected))
  const checkAll = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))


  return {
    allCount, // 购物车商品总数
    allPrice, // 购物车商品总价
    cartList, // 购物车列表
    isAll, // 列表是否全选
    selectedCount, // 已选择的商品总数
    selectedPrice, // 已选择的商品总价
    addCart, // 购物车新增商品
    delCart, // 购物车删除商品
    updateCart, // 购物车修改商品
    clearCart, // 清空购物车
    checkAll, // 列表全选功能
    updateLoginCartList, // 获取登录后的购物车列表
  }
}, { persist: true })