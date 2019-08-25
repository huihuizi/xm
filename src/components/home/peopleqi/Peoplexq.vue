<template>
  <div class="peoplexq">
    <div class="content">
        <fanhui class="fan1"></fanhui>
        <ul>
            <li>
            <van-swipe :autoplay="3000" indicator-color="white" class="slide">
                <van-swipe-item v-for="(item,key) in arr.pics" :key="key">
                <img :src="item.pic"/>
                </van-swipe-item>
            </van-swipe>
            </li>
            <p class="name">{{arr.basicInfo.name}}</p>
            <p class="ww">全场模板使用优惠券立减88元</p>
            <p class="ee">
            <span>￥{{arr.basicInfo.kanjiaPrice}}</span>
            <del>￥{{arr.basicInfo.originalPrice}}</del>
            <i>已售{{arr.basicInfo.minScore}}</i>
            </p>
            <div v-html="arr.content" class="imgss" id="imgss"></div>
        </ul>
    </div>
    <div class="bottoms">
      <!-- 客服 -->
      <div class="kefu">
        <img src="../../../assets/image/kefu.jpg" alt />
      </div>
      <!-- 购物车 -->
      <div class="gouwu">
        <router-link to="/cart">
        <img src="../../../assets/image/g.jpg" alt />
        </router-link>
      </div>
      <!-- <span class="bian">{{allcount}}</span> -->
      <!-- 收藏 -->
      <div class="shou">
        <img src="../../../assets/image/shou.jpg" alt />
      </div>
      <div class="goumai">
        <p>立即购买</p>
      </div>
      <div class="che">
        <p>加入购物车</p>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/request/request"
import Fanhui from "@/components/public/fanhui"
export default {
  name: "peoplexq",
  components:{
    Fanhui  
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
            // this.name = this.arr.basicInfo.name
            // console.log(this.arr.basicInfo.name)
        })
    },
};
</script>
<style scoped lang="less">
.li {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-weight: bold;
  border-bottom: 0.01rem solid gainsboro;
}
.peoplexq{
    .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .fan1{
        position: relative;
        position: absolute;
        z-index: 10;
        top: 0.2rem;
        left: 0.2rem;
    }
    ul{
        width: 100%;
        margin-top: -0.2rem;
        li{
            margin-left: -0.5rem;
            text-align: center;
            margin-top: -0.3rem;
            img{
                width: 100%;
            }
        }
    }
    .name {
        margin-top: 0.2rem;
        font-weight: bold;
        font-size: 0.4rem;
        margin-left: 0.2rem;
    }
    .ww {
        font-size: 0.3rem;
        color: gray;
        margin-left: 0.2rem;
    }
    .ee {
        margin-left: 0.1rem;
        span{
            color: red;
            font-size: 0.5rem;
        }
        del{
            color: gray;
            font-size: .4rem;
            margin-left: 0.2rem;
        }
        i{
            margin-left: 2.2rem;
        }
    }
  }
}
.peoplexq .img-lazyload {
  width: 100% !important;
  height: 100% !important;
}

.content {
  width: 100%;
  flex: 1;
  overflow: auto;
}

.content .img-lazyload {
  width: 100% !important;
  height: 100% !important;
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
