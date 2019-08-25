<template>
    <div>
        <div class="cont">
            <!-- 轮播 -->
            <swiper></swiper>
            <!-- 图标 -->
            <icons></icons>
            <!-- 全民砍价 -->
            <cutprice></cutprice>
            <!-- 精选专题 -->
            <sort></sort>
            <!-- 人气专题 -->
            <peopleqi></peopleqi>
        </div>
        <!-- 底部 -->
        <footersd></footersd>
    </div>
</template>
<script>
import Footersd from "@/components/public/Footers";         //底部
import Swiper from "@/components/public/Swiper";            //轮播 
import Icons from "@/components/home/Icons";                //图标
import Cutprice from "@/components/home/Cutprice";          //全民砍价
import Sort from "@/components/home/Sort";                  //精选专题
import Peopleqi from "@/components/home/Peopleqi";                  //人气专题
export default {
    name:"home",
    components:{
        Footersd,
        Swiper,
        Icons,
        Cutprice,
        Sort,
        Peopleqi
  }
}
</script>
<style scoped>
.cont{
    position:relative;
    bottom:1rem;
}
</style>