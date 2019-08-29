<template>
  <div class="shouceng">
    <div class="title">
        <fanhui class="fans"></fanhui>
        <p>我的收藏</p>
    </div>
    <div class="conter">
        <div v-for="(item,index) in shoucang" :key="index" class="box">
            <div class="pic"><img :src="item.pic"></div>
            <div class="font">
                <p>{{item.name}}</p>
                <!-- <p>收藏时间：<span>{{addTime}}</span></p> -->
                <!-- <router-link :to="'/lovedetail/'+item.id"> -->
                    <button>查看详情</button>
                <!-- </router-link> -->
                <span class="replace" @click="replace(index)">取消收藏</span>
            </div>
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
  created(){
    //   console.log(this.$store.state.shoucenglist)
  },
  methods:{
      replace(index){
          this.$store.commit("removesc",index)
      }
  },
  computed:{
        shoucang(){
            // console.log($store.state.shoucenglist)
            return this.$store.state.shoucenglist
        }
    },

};
</script>
<style scoped lang="less">
.shouceng{
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    position: relative;
    .title{
        position:fixed;
        top:0;
        width:100%;
        p{
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            font-weight: bold;
            border-bottom: 0.01rem solid gainsboro;
            background: #ffffff;
        }
    }
    .conter{
        margin-top:1rem;
    }
    .myshoucang{
        width: 100%;
        height: 1rem;
        font-weight: bold;
        line-height: 1rem;
        text-align: center;
        border-bottom: 0.01rem solid gainsboro;
        background: white;
    }
    .box{
        width: 100%;
        height: 2rem;
        background: white;
        border-bottom: 0.01rem solid gainsboro;
        .pic{
            width: 1.8rem;
            height:1.8rem;
            float: left;
            img{
                width:90%;
                height:100%;
                border-radius: 0.1rem;
                margin-top: 0.18rem;
                margin-left: 0.18rem;
                
            }
        }
        .font{
            position: relative;
            margin-left: 2.2rem;
            p:nth-of-type(1){
                font-weight: bold;
                padding-top: 0.2rem;
                font-size: 0.3rem
            }
            p:nth-of-type(2){
                font-size: 0.25rem;
                margin-top: -0.1rem;
                color: gray;
            }
            .replace{
                position: absolute;
                bottom: 0rem;
                left: 4rem;
                color: gray;
                border: 0.01rem solid gray;
                border-radius: 0.1rem;
                background: white;
                font-size: 0.2rem;
                padding: 0.02rem 0.05rem;
                outline: none;
            }
        }
        button{
            color: gray;
            border: 0.01rem solid gray;
            border-radius: 0.1rem;
            background: white;
            font-size: 0.2rem;
            padding: 0.02rem 0.05rem;
            margin-left: 3rem;
            outline: none;
        }
    }
}

</style>
