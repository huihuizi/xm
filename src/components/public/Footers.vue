<template>
    <div class="footer">
        <div>
        <router-link to="/home" tag="div">
          <div class="icon">
            <font-awesome-icon :icon="['fas','home']"></font-awesome-icon>
          </div>
          <span>首页</span>
        </router-link>
      </div>
      <div>
        <router-link to="/itemize" tag="div">
          <div class="icon">
            <font-awesome-icon :icon="['fas','archive']"></font-awesome-icon>
          </div>
          <span>分类</span>
        </router-link>
      </div>
      <div>
        <router-link to="/car" tag="div">
          <div class="icon"><font-awesome-icon :icon="['fas','shopping-cart']"></font-awesome-icon></div>
          <span>购物车</span>
          <span class="bian">0</span>
        </router-link>
      </div>
      <div>
        <router-link to="/mine" tag="div">
          <div class="icon"><font-awesome-icon :icon="['fas','user']"></font-awesome-icon></div>
          <span>个人</span>
          <span class="bians">0</span>
        </router-link>
      </div>
    </div>
</template>
<script>
export default {
    name:"footers"
}
</script>
<style lang="less" scoped>
.footer{
  position:fixed;
  width:100%;
  bottom:0;
  display:flex;
  justify-content: space-around;
  align-items: center;
  border-top: 0.01rem solid gainsboro;
  height:1rem;
  >div{
    flex: 1;
    text-align:center;
    // line-height: 40px;
      .icon{
        font-size:0.4rem;
        color: gainsboro;
    }
    .bian{
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
      border-radius: 50%;
      background: red;
      color: white;
      text-align: center;
      position: absolute;
      top: 0.05rem;
      left: 4.95rem;
    }
    .bians{
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
      border-radius: 50%;
      background: red;
      color: white;
      text-align: center;
      position: absolute;
      top: 0.05rem;
      left: 6.7rem;
    }
  }
.router-link-active{
  color: #a02d26;
  .icon{
    color: #a02d26;
  }
}
}

</style>