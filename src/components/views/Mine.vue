<template>
    <div class="me">
        <div class="mine">
            <div class="title">
                <img src="../../assets/image/e.jpg" alt />
                <p>hz</p>
                <p>积分:20+</p>
            </div>
            <div class="pay">
                <p>
                    <img src="../../assets/image/x.jpg" alt />
                    <span>新上线更稳定的付费快递查询接口</span>
                </p>
            </div> 
            <!-- 我的订单 -->
            <div class="my-pay">
                <!-- <router-link to="/mineshop"> -->
                <div>
                    <p>
                        <img src="../../assets/image/p.jpg" alt />
                        <span style="color:black">我的订单</span>
                        <span>></span>
                    </p>
                </div>
                <!-- </router-link> -->
            </div>
            <div class="pay-icon">
                <div>
                    <!-- <router-link to="/mineshop/paying"> -->
                        <img src="../../assets/image/a.jpg" alt />
                        <p style="color:black">待付款</p>
                    <!-- </router-link> -->
                </div>
                <div>
                    <!-- <router-link to="/mineshop/sending"> -->
                        <img src="../../assets/image/b.jpg" alt />
                        <p style="color:black">待发货</p>
                    <!-- </router-link> -->
                    </div>
                    <div>
                    <!-- <router-link to="/mineshop/harvesting"> -->
                        <img src="../../assets/image/c.jpg" alt />
                        <p style="color:black">待收货</p>
                    <!-- </router-link> -->
                    </div>
                    <div>
                    <!-- <router-link to="/mineshop/assessing"> -->
                        <img src="../../assets/image/d.jpg" alt />
                        <p style="color:black">待评价</p>
                    <!-- </router-link> -->
                </div>
            </div>
            <!-- 六个方块 -->
            <div class="pay-icons">
                <div>
                    <img src="../../assets/image/aa.jpg" alt />
                    <p>我的余额</p>
                </div>
                <div>
                    <img src="../../assets/image/f.jpg" alt />
                    <p>我的砍价</p>
                </div>
                <div>
                <!-- <router-link to="/gift"> -->
                    <img src="../../assets/image/g.jpg" alt />
                    <p style="color:black">我的礼券</p>
                <!-- </router-link> -->
                </div>
                <!-- <div style="position:relative;"> -->
                <router-link to="/mine/shouc" tag="div" style="position:relative">
                    <img src="../../assets/image/h.jpg" alt />
                    <p>我的收藏</p>
                    <span class="bians">{{this.$store.state.shouc}}</span>
                </router-link>
               <!-- </div> -->
               <div>
                <!-- <router-link to="/address" tag="div"> -->
                    <img src="../../assets/image/i.jpg" alt />
                    <p>我的地址</p>
                <!-- </router-link> -->
                </div>
                <div>
                    <img src="../../assets/image/o.jpg" alt />
                    <p>联系客服</p>
                </div>
            </div>
        </div>
        <footersd></footersd>
    </div>
</template>
<script>
import Footersd from "@/components/public/Footers";
export default {
    name:"mine",
    components:{
        Footersd
  }
}
</script>
<style lang="less" scoped>
.me{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .mine {
        width: 100%;
        flex: 1;
        overflow: auto;
        // height: 3rem;
        background: #C6B692;
        position: relative;
        .title{
            width: 100%;
            height: 3rem;
            background: #C6B692;
            position: relative;
            img{
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
                position: absolute;
                top: 1.3rem;
                left: 0.5rem;
            }
            p:nth-of-type(1){
                color: white;
                font-size: 16px;
                font-weight: bold;
                position: absolute;
                top: 1.4rem;
                left: 2rem;
            }
            p:nth-of-type(2){
                color: white;
                font-size: 0.2rem;
                position: absolute;
                top: 2rem;
                left: 2rem;
                background: #B3A078;
                padding: 0.05rem;
            }
        }
        .pay{
            background: white;
            width: 100%;
            height: 0.8rem;
            border-bottom: 0.15rem solid #F5F5F5;
            p{
                line-height: 0.8rem;
                color: red;
                margin-left: 0.2rem;
                img{
                    width: 0.4rem;
                }
            }
        }
        .my-pay{
            background: white;
            width: 100%;
            height: 1rem;
            p{
                line-height: 1rem;
                margin-left: 0.2rem;
                img {
                    width: 0.4rem;
                }
                span:nth-of-type(2) {
                    padding-left: 5rem;
                }
            }
        }
        .pay-icon{
            background: white;
            width: 100%;
            display: flex;
            border-bottom: 0.15rem solid #F5F5F5;
            div{
                width: 25%;
                text-align: center;
                margin-top: 0.1rem;
                img{
                    width: 0.5rem;
                    height: 0.5rem;
                }
                p {
                    margin-top: 0.1rem;
                    font-size: 0.25rem;
                }
            }
        }
        .pay-icons{
            width: 100%;
            height: 3.5rem;
            background: white;
            div{
                margin-top: 0.5rem;
                float: left;
                width: 33%;
                text-align: center;
                img{
                    width: 0.5rem;
                    height: 0.5rem;
                }
                p{
                    margin-top: 0.1rem;
                    font-size: 0.25rem;
                }
            }
        }
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
        top: -0.2rem;
        left: 1.4rem;
  }
}
</style>