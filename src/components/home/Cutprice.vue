<template>
    <div class="cutprice">
        <div>
            <p class="title">全民砍价👉</p>
        </div>
        <div class="item" v-for="(item,index) in arrs" :key="index">
            <div class="left">
                <img :src="item.pic" alt="">
            </div>
            <div class="right">
                <h5>{{ item.name }}</h5>
                <h6>封闭式设计猫咪独享</h6>
                <p class="dijia">
                    <span>￥{{item.pingtuanPrice}}</span>
                    <br />
                    低价
                </p>
                <p>
                    ￥{{item.minPrice}}
                    <br />
                    低价
                </p>
                <p>
                    {{item.minScore}}件
                    <br />
                    低价
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import request from "../../request/request"
export default {
    name:"cutprice",
    data(){
        return{
            arrs:[]
        }
    },
    created(){
        request({
            url:"shop/goods/kanjia/list/"
        }).then( res => {
            // console.log(res.data.data.goodsMap)
            this.arrs = res.data.data.goodsMap
        })
    }
}
</script>
<style lang="less" scoped>
.cutprice{
    border-bottom: 0.2rem solid gainsboro;
    .title{
        width: 100%;
        height:0.8rem;
        font-size: 0.3rem;
        line-height: 1rem;
        text-align: center;
        font-weight: bold;
    }
    .item{
        display:flex;
        width: 100%;
        height: 2.5rem;
        border-top: 0.01rem solid gainsboro;
        .left{
            width:35%;
            img{
                width: 80%;
                height: 80%;
                margin-top: 0.2rem;
                margin-left: 0.2rem;
                border-radius: 0.1rem;
            }
        }
        .right{
            float: left;
            width: 65%;
            margin-top: 0.1rem;
            h5{
                font-weight: bold;
                margin-left: 0.2rem;
                font-size:14px;
            }
            h6{
                margin-left: 0.2rem;
                color: gray;
            }
            p{
                text-align: center;
                float: left;
                margin-left: 0.3rem;
                margin-top: 0.1rem;
                color: gray;
            }
            .dijia{
                margin-top: 0.07rem;
                color: black;
                margin-left: 0.1rem;
                margin-right: 0.3rem;
                font-size: 0.28rem;
                span{
                    color: red;
                    font-size: 0.3rem;
                }
            }
        }
    }
}
</style>