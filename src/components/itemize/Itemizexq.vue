<template>
    <div class="itemizexq">
        <div class="header">
            <fanhui></fanhui>
            <p>分类商品</p>
        </div>
        <div class="content">
            <div class="lei" v-show="listdata.length == 0">
                <img src="../../assets/image/kong.jpg" alt />
                <p>还没有该商品哦 ！</p>
            </div>
            <div class="recommend" v-if="listdata.length > 0">
                <div v-for="(item,index) of listdata" :key="index">
                <p>
                    <img :src="item.pic"/>
                </p>
                <p v-html="item.name"></p>
                <p>￥{{item.minPrice}}</p>
                <p>已售{{item.numberSells}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import request from "../../request/request"
import Fanhui from "@/components/public/fanhui"
export default {
    name:"itemizexq",
    data(){
        return{
            id:"",
            arr:[]
        }
    },
    components:{
        Fanhui
    },
    created() {
        this.id=this.$route.params.id
        // console.log(this.id)
         request({ 
            url:"shop/goods/list?id="+this.id
        }).then( res => {
            // console.log(res.data.data)
            this.arr = res.data.data
            // console.log(this.arr.basicInfo.name)
        })
    },
    computed: {
        listdata: function() {
            let id = this.$route.params.id;
            return this.arr.filter(function(item) {
                return item.categoryId == id;
            });
        }
  },
}
</script>
<style lang="less" scoped>
.itemizexq{
    width: 100%;
    height: 1rem;
    border-bottom: 0.01rem solid gainsboro;
    position: relative;
    .header{
        position:fixed;
        top:0;
        z-index: 2;
        background: #ffffff;
        width:100%;
    }
    p {
        font-size: 0.3rem;
        font-weight: bold;
        line-height: 1rem;
        text-align: center;
    }
}
.content{
    width: 100%;
    flex: 1;
    overflow: auto;
    position: absolute;
    top:1.1rem;
    .lei{
        width: 3rem;
        margin: 0 auto;
        text-align: center;
        margin-top: 3rem;
        img {
            width: 2rem;
        }
    }
    .recommend {
        width: 100%;
        height:100%;
        div:nth-of-type(1){
            margin-top: 0;
        }
        div:nth-of-type(2){
            margin-top: 0;
        }
        div {
            margin-top: 0.6rem;
            width: 45%;
            height: 5rem;
            float: left;
            margin-left: 0.25rem;
            position: relative;
            img {
                width: 100%;
                height: 3rem;
                border-top-left-radius: 0.1rem;
                border-top-right-radius: 0.1rem;
            }
            p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            p:nth-of-type(1) {
                font-size: 0.28rem;
                margin-top: 0.1rem;
            }
            p:nth-of-type(2) {
                font-size: 0.27rem;
                color: black;
                // margin-left: 0.1rem;
                margin-top: 0.1rem;
            }
            p:nth-of-type(3) {
                font-size: 0.3rem;
                color: red;
                position: absolute;
                top: 3.6rem;
            }
            p:nth-of-type(4) {
                font-size: 0.24rem;
                color: gray;
                position: absolute;
                top: 3.6rem;
                right: 0.1rem;
            }
        }
    }
}
</style>