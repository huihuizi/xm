<template>
    <div class="fenlei clearfix">
        <div class="search">
            <font-awesome-icon :icon="['fas','search']" class="sear"/>
            <input type="text" placeholder="搜索商品">
        </div>
        <div class="bg"></div>
        <div class="left">
            <ul>
                <li @click="fenlei('all')" :class="{li_active: val == 'all' }" >所有分类</li>
                <li @click="fenlei('15114')" :class="{li_active: val == '15114' }" >居家生活</li>
                <li @click="fenlei('15115')" :class="{li_active: val == '15115' }" >配件装饰</li>
                <li @click="fenlei('15116')" :class="{li_active: val == '15116' }" >新品服饰</li>
            </ul>
        </div>
        <!-- <scroll> -->
            <div class="right">
                <div class="lunbo">
                    <van-swipe :autoplay="3000" indicator-color="white" class="slide">
                        <van-swipe-item class="slideshow">
                        <img src="../../assets/image/lunbo.jpg" alt="">
                        </van-swipe-item>
                        <van-swipe-item class="slideshow">
                        <img src="../../assets/image/lunbo.jpg">
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <div class="iconss">
                    <div v-for="(item,index) in arr" :key="index" v-show="item.pid==val||val=='all'" @click="itemxq(item.id)">
                        <!-- <router-link :to="'/itemize/itemizexq'" > -->
                        <a href="javascript:;">
                            <p><img :src="item.icon"></p>
                            <p style="color: black">{{item.name}}</p>
                        </a>
                        <!-- </router-link> -->
                    </div>
                </div>
            </div>
        <!-- </scroll> -->
        <footersd></footersd>
    </div>
</template>
<script>
import request from "../../request/request"
import Footersd from "@/components/public/Footers";
export default {
    name:"itemize",
    data(){
        return{
            arr:[],
            val:"all"
        }
    },
    components:{
        Footersd
    },
    
    methods:{
        fenlei(val){
            // 根据pid的值进行匹配
            this.val = val
            // console.log(this.val)
        },
        itemxq(id){
            this.$router.push({name:'Itemizexq',params:{id:id}})
        }
    },
    created(){
        request({
            url:"shop/goods/category/all"
        }).then( res => {
            // console.log(res.data.data)
            this.arr = res.data.data
            // console.log(this.arr)
        })
    },
}
</script>
<style lang="less" scoped>
.fenlei{
    box-sizing: border-box;
    position:relative;
    height:100%;
    .search{
        width: 100%;
        height: 1rem;
        position: fixed;
        z-index:2;
        background: #ffffff;
        .sear{
            position: absolute;
            top: 0.3rem;
            left: 0.5rem;
        }
        input{
            margin-top: 0.1rem;
            margin-bottom: 0.1rem;
            border-radius: 20px;
            border: none;
            background: gainsboro;
            width: 5rem;
            height:0.7rem;
            padding-left: 0.7rem;
            outline: none;
            margin-left: 0.2rem;
        }
    }
    .bg{
        width: 100%;
        height: 0.01rem;
        border: 0.01rem solid gainsboro;
        // margin-top: 0.2rem;
        box-sizing: border-box;
        position: fixed;
        top:1rem;
        z-index: 2;
    }
    .left{
        float:left;
        height:100%;
        position:fixed;
        top:1.2rem;
        ul{
            li{
                line-height: 0.8rem;
                margin-left: 0.5rem;
                margin-top: 0.2rem;
            }
            .li_active {
                height: 0.8rem;
                color: #a02d26;
                font-size: 0.3rem;
                border-left: 0.05rem solid #a02d26;
                padding-left: 0.45rem;
                margin-left: 0rem;
                font-weight: bold;
            }
        }
    }
    .right{
        float: right;
        width:5rem;
        position: absolute;
        top:1.2rem;
        right:0;
        .lunbo{
            width: 5rem;
            height: 1.6rem;
            border-radius: 0.1rem;
            float: right;
            margin-top: 0.1rem;
            display: -webkit-box;
            overflow: auto;
            div{
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 0.1rem;
                }
            }
        }
        .iconss{
            width: 4.7rem;
            border-left: 1px solid gainsboro;
            float: right;
            padding-right: 0.3rem;
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;
            div{
                margin-top: 0.1rem;
                text-align: center;
                font-size: 0.25rem;
                width: 33%;
                img{
                    width: 100%;
                    height: 1.4rem;
                    padding: 0.1rem;
                }
            }
        }
    }
}
</style>