<template>
    <div>
        <a href="javascript:;">
            <span class="fan" @click.prevent="fan">👈</span>
        </a>
    </div>
</template>
<script>
export default {
    name:"fanhui",
    methods:{
        fan(){
            window.history.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
.fan{
    background: white;
    border-radius: 50%;
    padding: 0.1rem;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.4rem;
    text-align: center;
    background: gold;
}
</style>