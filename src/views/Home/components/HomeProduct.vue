<script setup>
import HomePanel from './HomePanel.vue'
import { getGoodsAPI } from '@/apis/home'

const goodsProduct = ref([])
const getGoods = async () => {
  const { result } = await getGoodsAPI()
  goodsProduct.value = result
}
onMounted( ()=> getGoods() )
</script>

<template>
  <div class="home-product">
    <HomePanel v-for="cate in goodsProduct" :title="cate.name"  :key="cate.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img v-img-lazy="cate.picture" />
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <RouterLink to="/" class="goods-item">
              <GoodsItem :good="good"></GoodsItem>
            </RouterLink>
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang='scss'>
.home-product {
  background: #fff;
  margin-top: 20px;

  hr {
    margin: 0;
    border: none;
    border-top: 4px solid #F5F5F5;
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      .cat-img {
        width: 240px;
        height: 240px;
        margin-top: 20px;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }


      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

  }
}
</style>