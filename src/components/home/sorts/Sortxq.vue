<template>
  <div class="gift">
    <fanhui></fanhui>
    <p class="li">{{arr.title}}</p>
    <p style="text-align:center">-------------------</p>
    <img :src="arr.pic" style="height:4.5rem">
    <p v-html="arr.content"></p>
  </div>
</template>
<script>
import request from "@/request/request"
import Fanhui from "@/components/public/fanhui"
export default {
  name: "colimn",
  components:{
    Fanhui  
  },
  data(){
      return{
          id:"",
          arr:[]
      }
  },
  created() {
        this.id=this.$route.params.id
        // console.log(this.id)
         request({
            url:"cms/news/detail?id="+this.id
        }).then( res => {
            // console.log(res.data.data)
            this.arr = res.data.data
        })
    },
};
</script>
<style scoped lang="less">
.li {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-weight: bold;
  border-bottom: 0.01rem solid gainsboro;
}
</style>
