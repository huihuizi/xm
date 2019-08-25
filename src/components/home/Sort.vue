<template>
    <div class="sort">
        <div>
            <p class="title">精选专题👉</p>
        </div>
        <div  class="content">
            <div v-for="(item,index) in arrs" :key="index" @click="sxq(item.id)"> 
                <a href="javascript:;">
                    <img :src="item.pic" alt="">
                </a>
                <p class="p1">{{ item.title }}</p>
                <p class="p2">{{ item.descript }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import request from "../../request/request"
export default {
    name:"sort",
    data(){
        return{
            arrs:[]
        }
    },
    created(){
        request({
            url:"cms/news/list"
        }).then( res => {
            // console.log(res.data.data)
            this.arrs = res.data.data
        })
    },
   methods:{
        sxq(id){
            this.$router.push({name:'Sortxq',params:{id:id}})
        }
    },
}
</script>
<style lang="less" scoped>
.sort{
    border-bottom: 0.2rem solid gainsboro;
    .title{
        width: 100%;
        height:1rem;
        font-size: 0.3rem;
        line-height: 1rem;
        text-align: center;
        font-weight: bold;
    }
    .content{
        width: 100%;
        height: 4.67rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        overflow: auto;
        &::-webkit-scrollbar { // &在sass中就表示要修饰的父元素即.pics_wall
            display: none; //Safari and Chrome
        }
        div{
            width: 80%;
            height: 100%;
            margin-left: 0.2rem;
            a{
                img{
                    width: 6rem;
                    height: 3.5rem;
                    border-radius: 0.1rem;
                }
            }
            .p1{
                margin-top: 0.1rem;
                font-size: 0.3rem;
                font-weight: bold;
                margin-left: 0.2rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .p2{
                margin-top: -0.1rem;
                font-size: 0.25rem;
                margin-left: 0.2rem;
                color: gray;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>