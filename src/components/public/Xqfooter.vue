<template>
  <div class="xqfooter">
    <div class="bottoms">
      <!-- 客服 -->
      <div class="kefu">
        <img src="../../assets/image/kefu.jpg" alt />
      </div>
      <!-- 购物车 -->
      <div class="gouwu">
          <router-link to="/cart">
          <img src="../../assets/image/g.jpg" alt />
          </router-link>
      </div>
      <!-- <span class="bian">{{allcount}}</span> -->
      <!-- 收藏 -->
      <div class="shou" @click="shouceng">
          <img src="../../assets/image/shou.jpg" alt />
      </div>
      <div class="goumai">
          <p>立即购买</p>
      </div>
      <div class="che" @click="zhezhao">
          <p>加入购物车</p>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="zhezhaoc" v-show='flag'>
      <div class="gai" v-show='flag' @click="close"></div>
      <div class="bom" v-show="flag">
        <span class="close" v-show="flag" @click="close">x</span>
        <div class="clothes">
          <img :src="arr.basicInfo.pic" />
          <p>{{arr.basicInfo.name}}</p>
          <p>￥{{arr.basicInfo.minPrice}}</p>
        </div>
        <!-- 选择版本 -->
        <div class="chorse">
          <p class="banben">选择版本</p>
          <div v-for='(val,key) in banben' :key='key' class="chorsed">
              <p :class="{active: active == key}" @click="qiehuan(val.name,key)">{{val.name}}</p>
          </div>
        </div>
        <!-- 购买数量 -->
        <div class="goumai">
           <div class="count">
            <p>购买数量</p>
            <p>
              <button @click="jian()">-</button>
              <span>{{count}}</span>
              <button @click="add()">+</button>
            </p>
          </div>
        </div>
        <!-- 加入购物车 -->
        <div class="addshop">
            <button @click="shop">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/request/request"
import Fanhui from "@/components/public/fanhui"
// import { Toast } from 'vant';
// 弹出框
import { Toast } from 'vant';
export default {
  name: "peoplexq",
  components:{
    Fanhui  
  },
  props:["arrs"],
  data(){
      return{
          id:"",
          arr:{
              // properties:[{
              //   childsCurGoods:[]
              // }]
          },
          flag:false,
          banben:[],
          active:'',
          count:1,
          guige:""
      }
  },
  created(){
      this.arr = this.$props.arrs
  },
  mounted(){
      //  
  },
  methods:{
    zhezhao(){
      // console.log(this.arr)
      this.flag=!this.flag
      // this.arr = this.$props.arrs
      this.banben = this.$props.arrs.properties[0].childsCurGoods
      // console.log()
    },
    // 关闭遮罩层
    close(){
      this.flag = !this.flag
    },
    // 规格的切换
    qiehuan(val,index){
      this.active = index   //索引
      this.guige = val    //规格名称
      // console.log(this.active,this.guige)
    },
    // 数量的加
    add(){
      this.count++
    },
    // 数量的减
    jian(){
      // this.count--
      if(this.count>1){
        this.count--
      }else{
        this.count=1
      }
    },
    // 收藏
    shouceng(){
        // console.log(this.$props.arrs)
        // console.log(this.arr)
        this.arr = this.$props.arrs
        Toast.success('收藏成功');
      // console.log(1)
      let obj= {
        id:this.arr.basicInfo.id,
        name:this.arr.basicInfo.name,
        pic:this.arr.basicInfo.pic,
      }
      // console.log(obj)
      this.$store.commit("shouceng",obj)
    },
    // 购物车
    shop(){
      if(this.guige){
        this.arr = this.$props.arrs
        let obj={
          flag:true,
          id:this.arr.basicInfo.id,         //所选商品的id
          name:this.arr.basicInfo.name,     //所选商品的name
          pic:this.arr.basicInfo.pic,       //所选商品的图片
          price:this.arr.basicInfo.minPrice,  //所选商品的价格
          guige:this.guige,                   //所选商品的规格
          num:this.count                      //所选商品的数量

        }
        this.$store.commit("gouwuc",obj);
        Toast.fail('添加成功！');
        this.$router.push('/car');
      }else{
        Toast.fail('请选择规格');
      }
      
      // console.log(obj)
      
    }
  }
};
</script>
<style scoped lang="less">
.xqfooter{
  z-index: 3;
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
}
.zhezhaoc{
  position: fixed !important;
  top:0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index:3 !important;
  .gai{
    width: 100%;
    height: 50%;
    background: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index:3 !important;
  }
  .bom{
    width: 100%;
    height: 50%;
    background: white;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index:3 !important;
    .close{
      display: block;
      text-align: center;
      line-height: 0.5rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      border: 0.01rem solid gainsboro;
      color: gray;
      position: absolute;
      top: 0.2rem;
      right: 0.3rem;
    }
    .clothes{
      margin-left: 0.2rem;
      width: 100%;
      height: 2rem;
      border-bottom: 0.01rem solid gainsboro;
       z-index:3;
      img{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 0.1rem;
        margin-top: 0.2rem;
        line-height: 2rem;
      }
      p:nth-of-type(1) {
        position: absolute;
        top: 0.4rem;
        left: 2rem;
        font-weight: bold;
      }
      p:nth-of-type(2) {
        position: absolute;
        top: 1rem;
        left: 2rem;
        color: red;
        font-size: 0.3rem;
        font-weight: bold;
      }
    }
    // 选择版本
    .chorse {
      width: 100%;
      .banben {
        width: 100%;
        height: 0.6rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        margin-left: 0.3rem;
      }
      .chorsed {
        width: 100%;
        p {
          float: left;
          width: 40%;
          height: 0.3rem;
          line-height: 0.3rem;
          margin-left: 0.5rem;
          text-align: center;
          border: 0.01rem solid gainsboro;
          padding: 0.1rem;
        }
      }
    }
    // 购买数量
    .goumai{
      .count{
        clear: both;
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        p:nth-of-type(1) {
          margin-left: 0.5rem;
          line-height: 1rem;
        }
        p:nth-of-type(2) {
          height: 0.5rem;
          margin-top: 0.3rem;
          margin-right: 0.5rem;
          border: 0.01rem solid gainsboro;
           button {
            width: 0.6rem;
            height: 0.5rem;
            border: none;
          }
          span {
            padding: 0 0.2rem;
          }
        }
       
      }
      
    }
    // 加入购物车
    .addshop{
      width: 100%;
      height: 0.8rem;
      position: absolute;
      bottom: 0;
      button {
        width: 100%;
        height: 100%;
        border: none;
        line-height: 0.8rem;
        background: red;
        color: white;
        font-weight: bold;
      }
    }
  }
}
.active{
    border-color:red !important;
    color:red; 
  }
</style>
