<template>
    <div class="people">
        <div>
            <p class="title">人气专题👉</p>
        </div>
        <div  class="recommend clearfix" >
            <div v-for="(item,index) in arrs" :key="index" @click="pxq(item.id)">
                <a href="javascript:;">
                    <img :src="item.pic" alt="">
                </a>
                <p class="p1" v-html="item.name"></p>
                <p class="p2">全场模板使用优惠券立减88元</p>
                <p class="p3">￥{{item.originalPrice}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import request from "../../request/request"
export default {
    name:"peopleqi",
    data(){
        return{
            arrs:[]
        }
    },
    created(){
        request({
            url:"shop/goods/list"
        }).then( res => {
            // console.log(res.data.data)
            this.arrs = res.data.data
            this.arrs = this.arrs.filter(item => {
               return item.recommendStatusStr == '推荐' && item.categoryId == 15120;
            });
        })
    },
    methods:{
        pxq(id){
            this.$router.push({name:'Peoplexq',params:{id:id}})
        }
    }
}
</script>
<style lang="less" scoped>
.people{
    border-bottom: 0.2rem solid gainsboro;
    .title{
        width: 100%;
        height:1rem;
        font-size: 0.3rem;
        line-height: 1rem;
        text-align: center;
        font-weight: bold;
    }
    .recommend{
        width: 100%;
        div{
            width: 45%;
            float: left;
            margin-left: 0.25rem;
            a{
                img{
                    width: 100%;
                    height: 3rem;
                    border-top-left-radius: 0.1rem;
                    border-top-right-radius: 0.1rem;
                }
            }
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .p1{
                font-size: 0.28rem;
                margin-top: 0.1rem;
            }
            .p2{
                margin-top: -0.2rem;
                font-size: 0.24rem;
                color: gray;
            }
            .p3{
                font-size: 0.3rem;
                color: red;
            }
        }
    }
}
</style>