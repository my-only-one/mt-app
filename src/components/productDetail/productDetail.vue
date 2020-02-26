<template>
  <transition name="food-detail">
    <div class="food" v-show="showDetail">
      <div class="food-wrapper">
        <div class="food-content">
          <div class="img-wrapper">
            <img class="food-img" :src="detailFoodVal.picture"/>
            <span class="close-bt icon-close" @click="closeBtn"></span>
            <img class="share-bt" src="./img/share.png" />
            <img class="more-bt" src="./img/more.png" />
          </div>
          <div class="content-wrapper">
            <h3 class="name">{{detailFoodVal.name}}</h3>
            <p class="saled">{{detailFoodVal.month_saled_content}}</p>
            <img v-show="detailFoodVal.product_label_picture" :src="detailFoodVal.product_label_picture" class="product">
            <p class="price">
              <span class="text">￥{{detailFoodVal.min_price}}</span>
              <span class="unit">/{{detailFoodVal.unit}}</span>
            </p>
            <div class="cartcontrol-wrapper">
              <app-cart-control :food="detailFoodVal"></app-cart-control>
            </div>
            <div class="buy" @click="addProduct" v-show="!detailFoodVal.count || detailFoodVal.count == 0">选规格</div>

          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
import Vue from 'vue'
import cartControl from '../cartControl/cartControl'
export default {
  name: 'productDetail',
  props: {
    detailFoodVal: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      showDetail: false
    }
  },
  created () {
    console.log(this.detailFoodVal)
  },
  methods: {
    showView () {
      this.showDetail = true
    },
    closeBtn () {
      this.showDetail = false
    },
    // 选规格
    addProduct () {
      Vue.set(this.detailFoodVal, 'count', 1)
    }
  },
  components: {
    'app-cart-control': cartControl
  }
}
</script>

<style scoped>
  @import url(../../common/css/icon.css);
  .food{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 51px;
    background: white;
    width: 100%;
    z-index: 90;
  }

  .food-detail-enter-active, .food-detail-leave-active {
    transition:  1.0s
  }
  .food-detail-enter, .food-detail-leave-to {
    transform: translateX(100%);
  }

  .food .food-wrapper .food-content{

  }

  .food .food-wrapper .food-content .img-wrapper{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
  }

  .food .food-wrapper .food-content .img-wrapper .food-img{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .food .food-wrapper .food-content .img-wrapper .close-bt{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 10px;
    top: 10px;
    text-align: center;
    font-size: 30px;
    color: white;
    background: #7f7f7f;
    border-radius: 50%;
  }
  .food .food-wrapper .food-content .img-wrapper .share-bt,
  .food .food-wrapper .food-content .img-wrapper .more-bt
  {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
  }
  .food .food-wrapper .food-content .img-wrapper .share-bt{
    right: 50px;
  }
  .food .food-wrapper .food-content .img-wrapper .more-bt{
    right: 10px;
  }

  .food .food-wrapper .food-content .content-wrapper{
    padding: 0 0 16px 16px;
    position: relative;
  }
  .food .food-wrapper .food-content .content-wrapper .name{
    font-size: 15px;
    color: #333333;
    line-height: 30px;
    font-weight: bold;
  }
  .food .food-wrapper .food-content .content-wrapper .saled{
    font-size: 11px;
    color: #9d9d9d;
    margin-bottom: 6px;
  }
  .food .food-wrapper .food-content .content-wrapper .product{
    height: 15px;
    margin-bottom: 16px;
  }
  .food .food-wrapper .food-content .content-wrapper .price{
    font-size: 0;
  }
  .food .food-wrapper .food-content .content-wrapper .price .text{
    font-size: 17px;
    color: #FB4E44;
  }
  .food .food-wrapper .food-content .content-wrapper .price .unit{
    font-size: 11px;
    color: #9D9D9D;
  }
  .food .food-wrapper .food-content .cartcontrol-wrapper{
    position: absolute;
    right: 12px;
    bottom: 10px;
    padding: 2px;
  }
  .food .food-wrapper .food-content .buy{
    width: 64px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    background: #FFD161;
    border-radius: 30px;
    position: absolute;
    right: 12px;
    bottom: 10px;
  }

  .food .food-wrapper .rating-wrapper{
    padding-left: 16px;
  }
  .food .food-wrapper .rating-wrapper .rating-title{
    padding: 16px 16px 16px 0;
  }
  .food .food-wrapper .rating-wrapper .rating-title .like-ratio{
    float: left;
    font-size: 0;
  }
  .food .food-wrapper .rating-wrapper .rating-title .like-ratio .title{
    font-size: 13px;
  }
  .food .food-wrapper .rating-wrapper .rating-title .like-ratio .ratio{
    font-size: 11px;
  }
  .food .food-wrapper .rating-wrapper .rating-title .like-ratio .ratio i{
    color: #FB4E44;
    font-size: 11px;
  }

  .food .food-wrapper .rating-wrapper .rating-title .snd-title{
    float: right;
    font-size: 0;
  }
  .food .food-wrapper .rating-wrapper .rating-title .snd-title .text,
  .food .food-wrapper .rating-wrapper .rating-title .snd-title .icon
  {
    font-size: 13px;
    color: #9D9D9D;
    display: inline-block;
  }
  .food .food-wrapper .rating-wrapper .rating-title .snd-title .icon{
    margin-left: 12px;
  }


  .food .food-wrapper .rating-wrapper .comment-item{
    padding: 15px 14px 17px 0;
    border-bottom: 1px solid #F4F4F4;
    width: 100%;
    box-sizing: border-box;
    display: flex;
  }
  .food .food-wrapper .rating-wrapper .comment-item .comment-header{
    flex: 0 0 41px;
    margin-right: 10px;
  }
  .food .food-wrapper .rating-wrapper .comment-item .comment-header img{
    width: 41px;
    height: 41px;
    border-radius: 50%;
  }

  .food .food-wrapper .rating-wrapper .comment-item .comment-main{
    flex: 1;
    margin-top: 6px;
  }
  .food .food-wrapper .rating-wrapper .comment-item .comment-main .user{
    width: 50%;
    float: left;
    font-size: 12px;
    color: #333333;
  }
  .food .food-wrapper .rating-wrapper .comment-item .comment-main .time{
    width: 50%;
    float: right;
    text-align: right;
    font-size: 10px;
    color: #666666;
  }
  .food .food-wrapper .rating-wrapper .comment-item .comment-main .content{
    margin-top: 17px;
    font-size: 13px;
    line-height: 19px;
  }
</style>
