<template>
    <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="white" class="slide">
            <van-swipe-item v-for="(item,index) in bannerList" :key="index">
                <img :src="item" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    name:"swiper",
    data() {
        return {
            bannerList: [
                "https://cdn.it120.cc/apifactory/2018/11/07/ad7e06f98e8910ff789b6e577b36c20b.jpg",
                "https://cdn.it120.cc/apifactory/2018/11/07/76d9a2c2bd56c4ac0497b5d360c6bc06.png",
                "https://cdn.it120.cc/apifactory/2018/11/06/b7edaeccb6423e6dcea8f6ccd3fa2f21.jpg"
            ]
        };
  }
}
</script>
<style lang="less" scoped>
.swiper{
    width:100%;
    height:6rem;
    .slide{
        width:100%;
        height: 100%;
        img{
            width: 100%;
            height:100%;
        }
    }
}
</style>