<template>
    <div class="box">
        <div class="content">
            <div class="sign">
                <div class="top">
                    <fanhui></fanhui>
                    <p class="p1">您的可用积分</p>
                    <p class="p2">0</p>
                    <p class="p3"></p>
                </div>
                <p class="cont">签到</p>
                <div class="bottom">
                    <div class="div1">
                        <p>购物消费</p>
                        <p style="margin-top: -0.3rem;">购物完成，确认收货立返积分</p>
                        <router-link to="/home" class=""><button data-v-366a0166="">去购物</button></router-link>
                    </div>
                    <div class="div2">
                        <p>积分兑换</p>
                        <p style="margin-top: -0.3rem;">积分兑好礼，20积分即可兑换礼券</p>
                        <router-link to="/home" class=""><button data-v-366a0166="">去兑换</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Fanhui from "@/components/public/fanhui"
export default {
    name:"sing",
    components:{
        Fanhui
    }
}
</script>
<style lang="less" scoped>
.sign{
    width: 100%;
    height: 100%;
    .top{
        width: 100%;
        height: 3.5rem;
        background: oldlace;
        position: relative;
        .p1{
            font-size: 0.3rem;
            text-align: center;
            padding-top: 1rem;
        }
        .p2{
            font-size: 0.5rem;
            text-align: center;
        }
        .p3{
            width: 100%;
            height: 1rem;
            background: rgba(199,186,154,0.9);
        }
    }
    .cont{
        text-align: center;
        width: 40%;
        height: 0.8rem;
        margin: 0 auto;
        border-radius: 0.5rem;
        background: #584b4b;
        color: #f5ecec;
        line-height: 0.8rem;
        margin-top: 0.5rem;
    }
    .bottom{
        margin-top: 0.5rem;
        >div{
            width: 90%;
            margin: 0 auto;
            margin-top: 0.4rem;
            height: 1.5rem;
            border-radius: 0.1rem;
            position: relative;
        }
        .div1{
            background: #f5d6d6;
            p{
                color: #e2ad4b;
                padding-top: 0.25rem;
                margin-left: 0.3rem;
            }
            button{
                border-radius: 0.05rem;
                border: none;
                background: #e2ad4b;
                color: white;
                padding: 0.05rem;
                position: absolute;
                top: 0.5rem;
                right: 0.6rem;
            }
        }
        .div2{
            background: #d6d2d2;
            p{
                color: #7a6868;
                padding-top: 0.25rem;
                margin-left: 0.3rem;
            }
            button{
                border-radius: 0.05rem;
                border: none;
                background: #7a6868;
                color: white;
                padding: 0.05rem;
                position: absolute;
                top: 0.5rem;
                right: 0.6rem;
            }
        }
    }
}
</style>