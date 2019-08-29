<template>
  <div class="carxq">
    <div class="content">
        <fanhui class="fan1"></fanhui>
        <div class="title">
            <van-swipe :autoplay="3000" indicator-color="white" class="slide">
                <van-swipe-item v-for="(item,key) in arr.pics" :key="key">
                <!-- <img :src="item.pic"/> -->
                <img :src="item.pic">
                </van-swipe-item>
            </van-swipe>
            <p>{{arr.basicInfo.name}}</p>
            <p>全场模板使用优惠券立减88元</p>
         </div>
        <!-- 拼团 -->
        <div class="qian">
            <div>拼团价￥<span>{{arr .basicInfo.minPrice}}</span></div>
            <div>
            <p>2人开团</p>
            <p><del>￥{{arr .basicInfo.originalPrice}}</del></p>
            </div>
            <div>已团{{arr .basicInfo.numberSells}}件</div>
        </div>
        <!-- 选择规格 -->
        <div class="shop">
            <p>
                选择规格 : 选择版本 选择服务
                <span>></span>
            </p>
        </div>
        <div v-html="arr.content" class="content"></div>
    </div>
    <!-- </div> -->
    <xqfooter :arrs="arr"></xqfooter>
  </div>
</template>
<script>
import request from "@/request/request"
import Fanhui from "@/components/public/fanhui"
import Xqfooter from "@/components/public/Xqfooter"
export default {
  name: "peoplexq",
  components:{
    Fanhui,
    Xqfooter
  },
  data(){
      return{
          id:"",
          arr:{
              basicInfo:{}
          },
      }
  },
  created() {
        this.id=this.$route.params.id
        // console.log(this.id)
         request({
            url:"shop/goods/detail?id="+this.id
        }).then( res => {
            // console.log(res.data.data)
            this.arr = res.data.data
            // console.log(this.arr.basicInfo.name)
        })
    },
};
</script>
<style scoped lang="less">
.van-swipe {
    height: 7rem !important;
}
.carxq{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    .fan1{
        position:fixed;
        z-index: 10;
        top: 0.2rem;
        left: 0.2rem;
    }
    .title{
        img{
            width:100%;
        }
        p:nth-of-type(1) {
            font-size: 0.4rem;
            font-weight: bold;
            margin-top: 0.1rem;
            margin-left: 0.3rem;
        }
        p:nth-of-type(2) {
            font-size: 0.3rem;
            font-weight: bold;
            color: gray;
            margin-left: 0.3rem;
        }
    }
    .qian {
        width: 100%;
        height: 1rem;
        background: red;
        color: white;
        display: flex;
        div:nth-of-type(1) {
            font-size: 0.3rem;
            line-height: 1rem;
            margin-left: 0.3rem;
        }
        div:nth-of-type(1) span {
            font-size: 0.4rem;
        }
        div:nth-of-type(2) {
            margin-left: 0.3rem;
        }
        div:nth-of-type(2) p:nth-of-type(1) {
            margin-top: 0.15rem;
        }
        div:nth-of-type(2) p:nth-of-type(2) {
            margin-top: -0.2rem;
        }
        div:nth-of-type(3) {
            line-height: 1rem;
            margin-left: 2.7rem;
        }
    }
    .shop{
        width: 100%;
        height: 1.5rem;
        border-top: 0.2rem solid gainsboro;
        border-bottom: 0.2rem solid gainsboro;
        p {
            font-size: 0.3rem;
            line-height: 1.2rem;
            margin-left: 0.2rem;
            span {
                padding-left: 2.8rem;
            }
        }
    }
    .content {
        width: 100%;
        flex: 1;
        overflow: auto;
        img{
            width:100%;
        }
     }
    }
}
.bottoms{
    width: 100%;
    height: 1rem;
    border-top: 0.01rem solid gainsboro;
    text-align: center;
    display: flex;
    position:fixed;
    bottom:0;
    background:white;
    div{
        height: 100%;
        line-height: 1rem;
        border-right: 0.01rem solid gainsboro;
    }
    .kefu{
        width: 13%;
        img{
            width: 50%;
        }
    }
    .gouwu{
        width: 13%;
        img{
            width:50%;
        }
    }
    .shou{
        width: 13%;
        img{
            width:50%;
        }
    }
    .goumai{
        width: 30%;
        border: none;
        font-size: 0.3rem;
    }
    .che{
        width: 30%;
        background: red;
        color: white;
        font-weight: bold;
        border: none;
    }
}
</style>
