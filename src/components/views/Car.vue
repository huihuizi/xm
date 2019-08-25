<template>
    <div class="carts">
        <div class="car">
            <header style="border-bottom:0.01rem solid grey">
                <p>购 物 车</p>
            </header>
        </div>
        <div class="carimg">
            <img src="../../assets/image/cart.jpg" />
        </div>
        <p class="love">猜你喜欢</p>
        <div class="cont">
            <div v-for="(item,index) in arr" :key="index" class="item">
                <!-- <router-link :to="'/lovedetail/'+item.id"> -->
                <div>
                    <img :src="item.pic" />
                    <p class="p1" style="color:black">{{item.name}}</p>
                    <p class="p2">
                    <span>￥{{item.minPrice}}</span>
                    <i>已售 {{item.kanjiaPrice}}</i>
                    </p>
                </div>
                <!-- </router-link> -->
          </div>
        </div>
        <div class="xiadan">
            <!-- 全选 -->
            <div class="xia">
              <input type="checkbox" v-model="fleg">
              <span>全选</span>
            </div>
            <div class="dan">
              <span>合计 ：<i>￥{{allprice}}</i></span>
              <router-link to="/order" tag="button" v-if="replace">
                <span style="color:white;padding-left:0.5rem" >立即下单</span> 
              </router-link>
              <button  v-if="!replace" class="color">删除</button>
            </div>
        </div>
        
        <footersd></footersd>
    </div>
</template>
<script>
import request from "../../request/request"
import Footersd from "@/components/public/Footers";
export default {
    name:"Car",
    data(){
        return{
            arr:[],
            replace:true,
            fleg:true,
            allprice:0,
        }
    },
    created(){
        request({
            url:"shop/goods/list"
        }).then( res => {
            console.log(res.data.data)
            this.arr = res.data.data
            this.arr = this.arr.filter(item => {
                return item.categoryId === 15119;
            });
        })
    },
    components:{
        Footersd
  }
}
</script>
<style lang="less" scoped>
.carts{
    .car{
        header {
            width: 100%;
            height: 1rem;
            p {
                text-align: center;
                line-height: 1rem;
                font-size: 0.3rem;
                font-weight: bold;
            }
        }
    }
    .love{
        font-size: 0.3rem;
        font-weight: bold;
        height: 1rem;
        line-height: 1.4rem;
        text-align: center;
    }
    .carimg{
        width: 100%;
        height: 4rem;
        text-align: center;
        background: #F5F5F5;
        img{
            width: 3rem;
            margin-top: 0.5rem;
        }
    }
    .cont{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        padding:7px;
        justify-content: space-between;
        box-sizing: border-box;
        .item{
            // width: 100%;
            width:49%;
            // border:1px solid #ccc;
            // box-shadow: 0 0 8px #ccc;
            // padding:2px;
            margin:4px 0;
            display:flex;
            flex-direction:column;
            justify-content: space-between;
            min-height: 293px;
            box-sizing: border-box;
            div{
                float: left;
                box-sizing: border-box;
                // margin-left: 0.25rem;
                // width: 46%;
                margin-top: 0.2rem;
                img{
                    width: 100%;
                    border-top-left-radius: 0.1rem;
                    border-top-right-radius: 0.1rem;
                }
                .p1{
                    font-size: 0.26rem;
                    font-weight: bold;
                    margin-top: 0.2rem;
                }
                .p2{
                    span{
                        font-size: 0.35rem;
                        color: red;
                    }
                    i{
                        font-size: 0.25rem;
                        color: grey;
                        margin-left: 1.5rem;
                    }
                }
            }
        }
    }
  .xiadan {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        bottom: 1rem;
        left: 0;
        border: 0.01rem solid gainsboro;
        background: white;
        .xia{
            float: left;
            margin-left: 0.5rem;
        }
        .dan{
            float: right;
            span{
                margin-right: 0.5rem;
                color: red;
                font-weight: bold;
                font-size: 0.3rem;
            }
            button{
                width: 2.5rem;
                height: 100%;
                background: red;
                color: white;
                border: none;
                font-weight: bold;
            }
        }
    }
    .receive {
        position: absolute;
        top: 0.3rem;
        left: 0.5rem;
        color: red;
        font-weight: bold;
    }
    
}
</style>