<template>
    <div>
        <swiper></swiper>
        我是home页
        <footersd></footersd>
    </div>
</template>
<script>
import Footersd from "@/components/public/Footers";
import Swiper from "@/components/public/Swiper";
export default {
    name:"home",
    components:{
        Footersd,
        Swiper
  }
}
</script>
<style scoped>

</style>