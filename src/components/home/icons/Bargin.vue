<template>
  <div class="gift">
    <fanhui></fanhui>
    <p class="li">砍价列表</p>
  </div>
</template>
<script>
import Fanhui from "@/components/public/fanhui"
export default {
  name: "bargin",
  components:{
    Fanhui  
  }
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
