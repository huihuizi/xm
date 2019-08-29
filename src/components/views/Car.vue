<template>
    <div class="carts">
        <div class="car">
            <header style="border-bottom:0.01rem solid grey">
                <p>购 物 车</p>
            </header>
        </div>
        <div class="way">
            <!-- 购物车为空的时候 -->
            <div class="carimg" v-show="gwc.length == 0">
                <img src="../../assets/image/cart.jpg" />
            </div>
            <!-- 购物车有东西的时候 -->
            <div>
                <div v-for="(item,index) in gwc" :key="index" class="cartlist">
                <div class="gwcList">
                    <div class="wkk">
                    <!-- 单选 -->
                    <div>
                        <input type="checkbox"  v-model="item.flag"/>
                        <img :src="item.pic" alt />
                    </div>
                    <div>
                        <p v-html="item.name"></p>
                        <p>规格：{{item.guige}}</p>
                        <p>￥{{item.price}}</p>
                        <p>
                        <button  @click="jiannum(item)">-</button>
                        <span>{{item.num}}</span>
                        <button @click="addnum(item)">+</button>
                        </p>
                    </div>
                    <div class="btn" @click="remove(index)" v-if="!replace"><button>删除</button></div>
                    </div>
                </div>
                </div>
                <div class="receive" v-show="gwc.length!=0" v-if="replace" @click="bianji">编辑</div>
                <div class="receive" v-show="gwc.length!=0" v-if="!replace" @click="bianji">完成</div>
            </div>
            <div>
                <p class="love">猜你喜欢</p>
                <div class="cont">
                    <div v-for="(item,index) in arr" :key="index" class="item" @click="carxq(item.id)">
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
                <button  v-if="!replace" class="color" @click="quanremove">全部删除</button>
                </div>
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
        // 刚将商品添加到购物车，就计算价格
        this.money()
        // console.log(this.$store.state.data)
        // console.log(this.gwc)
        request({
            url:"shop/goods/list"
        }).then( res => {
            // console.log(res.data.data)
            this.arr = res.data.data
            this.arr = this.arr.filter(item => {
                return item.categoryId === 15119;
            });
        })
    },
    components:{
        Footersd
    },
    methods:{
        // 路由的跳转
        carxq(id){
            this.$router.push({name:'Carxq',params:{id:id}})
        },
        // 使数量++
        addnum(item){
            item.num++
            this.money()
        },
        // 使数量--
        jiannum(item){
            
            if(item.num>1){
                item.num--
            }else{
                item.num=1
            }
            this.money()
        },
        // 编辑
        bianji(){
            this.replace=!this.replace
        },
        // 钱数
        money(){
            this.allprice = 0
            // console.log(this.gwc)
            // 对购物车中的数据进行遍历
            let allprice=this.gwc.filter(item=>{
            //    console.log(item.flag)
                //如果购物车的数据中的flag = true  就进行计算，否则就返回
                    if(item.flag){
                        // console.log(item.num * item.price)
                        // this.allprice += item.price * item.num
                        this.allprice += Math.round(item.price * item.num)
                    }
                    return this.allprice
                })
        },
        // 逐个删除
        remove(index){
            this.$store.commit("removess",index)
            this.money()
        },
        // 全部删除
        quanremove(){
            this.allprice = 0
            this.$store.commit("quanremovess")
        },
        // 单选
        // danxuan(index){
        //     this.gwc.filter((item => {
        //         return item.flag = true
        //     }))
        // }
    },
    computed:{
        gwc(){
             return this.$store.state.data
        }
    }
}
</script>
<style lang="less" scoped>
.carts{
    .car{
       background: #ffffff;
       z-index: 5;
        header {
            width: 100%;
            height: 1rem;
            background: #ffffff;
            position:fixed;
            top:0;
            width:100%;
            z-index: 5;
            p {
                text-align: center;
                line-height: 1rem;
                font-size: 0.3rem;
                font-weight: bold;
            }
        }
    }
    .way{
        margin-top:1rem;
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
        // display:flex;
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
        position:fixed;
        top: 0.3rem;
        left: 0.5rem;
        color: red;
        font-weight: bold;
        z-index:6;
    }
    
}
// 购物车
.cartlist {
  width: 100%;
  height: 2.5rem;
  border-bottom: 0.01rem solid gainsboro;
  position: relative;
  .gwcList{
    width: 100%;
    transition: all 0.3s linear;
    .wkk{
        div:nth-of-type(1) {
            float: left;
            width: 40%;
            input {
                margin-left: 0.3rem;
            }
            img {
                width: 1.6rem;
                height: 1.6rem;
                margin-top: 0.2rem;
                border-radius: 0.1rem;
                margin-left: 0.3rem;
            }
        }
        div:nth-of-type(2) {
            float: left;
            width: 60%;
            p:nth-of-type(1) {
                font-size: 0.3rem;
                font-weight: bold;
                margin-top: 0.2rem;
            }
            p:nth-of-type(2) {
                margin-top: -0.1rem;
                font-size: 0.25rem;
                color: gray;
            }
            p:nth-of-type(3) {
                color: red;
                font-size: 0.3rem;
            }
            p:nth-of-type(4) {
                position: absolute;
                top: 1.2rem;
                right: 0.5rem;
                border: 0.01rem solid gainsboro;
                button {
                    border: 0.01rem solid gainsboro;
                    width: 0.4rem;
                    height: 0.5rem;
                    background: white;
                }
                span {
                    padding: 0 0.1rem;
                }


            }
        }
        .btn{
            float:right;
            button{
                margin-right:1rem;
                background:none;
                border:none;
                outline: none;
            }
        }

    }
    .receive{
        position: absolute;
        top: 0.3rem;
        left: 0.5rem;
        color: red;
        font-weight: bold;
    }
 }
 .gwcList .del {
  position: absolute;
  top: 0.15rem;
  right: 0.2rem;
  border: none;
  padding: 0.04rem 0.15rem;
  background: red;
  color: white;
  border-radius: 50%;
}
}
</style>