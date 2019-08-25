<template>
    <div class="wrapper" ref="aa">
        <div class="content clearfix">
            <slot></slot>
        </div>
    </div>    
</template>
<script>
import Bscroll from "better-scroll"
export default {
    name:"scroll",
    data(){
        return{
            bs:null
        }
    },
    mounted(){
        this.bs = new Bscroll(this.$refs.aa,{
            probeType:2,        //实时监听 scroll 事件,2  3  可以监听,0 1 时，不会实时监听
            pullUpLoad:true                       //false 不会开启上拉加载功能，true 或者 object 可以开启上拉刷新
        })
    },
    // methods:{
    //     itemxq(id){
    //         this.$router.push({name:'Itemizexq',params:{id:id}})
    //         console.log(22)
    //     }
    // }
}
</script>
<style scoped>
.wrapper{
    overflow: hidden;
    position: absolute;
    top:44px; 
    bottom:49px;
    left:2.4rem;
    width:5rem;
}
</style>