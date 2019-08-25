<template>
    <div class="icons">
        <router-link to="/sign" tag="div">
            <div>
                <p>
                    <img src="../../assets/image/icons1.png" alt="">
                </p>
                <p>签到</p>
            </div>
        </router-link>
        
        <router-link to="/gift" tag="div">
            <p>
                <img src="../../assets/image/icons2.jpg" alt="">
            </p>
            <p>礼券</p>
        </router-link>
        <router-link to="/bargin" tag="div">
            <p>
                <img src="../../assets/image/icons3.jpg" alt="">
            </p>
            <p>砍价</p>
        </router-link>
        <router-link to="/colimn" tag="div">
            <p>
                <img src="../../assets/image/icons4.jpg" alt="">
            </p>
            <p>专栏</p>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"icons"
}
</script>
<style lang="less" scoped>
.icons{
    width: 100%;
    height: 2rem;
    display: flex;
    border-bottom: 0.2rem solid gainsboro;
    justify-content: space-around;
    align-items: flex-end;
    text-align: center;
    border-top-left-radius: 12%;
    border-top-right-radius: 12%;
    margin-top: -0.2rem;
    position: relative;
    z-index: 2;
    background: white;
    >div{
        flex:1;
        padding-bottom:0.2rem;
        p{
            font-size: 15px;
        }
        img {
            width: 0.8rem;
            height: 0.8rem;
        }
    }
}
</style>