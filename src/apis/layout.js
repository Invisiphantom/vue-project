import http from "@/utils/http";

// 获取全部分类(包含推荐商品)
export function getCategoryAPI(){
    return http.get('home/category/head');
}