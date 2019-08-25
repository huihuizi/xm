<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
*{
  margin:0;
  padding:0;
}
a{
  text-decoration: none;
}
ul li{
  list-style: none;
  font-style: normal;
}
body{
  font-size:14px;
}
img{
    vertical-align: middle;
}
h4, .h4, h5, .h5, h6, .h6 {
    margin-top: 10px;
    margin-bottom: 10px;
}
.clearfix:after{
  content: "";
  height: 0;
  display: block;
  clear: both;
  visibility: hidden;
  zoom: 1;
}
p{
  margin:0 0 10px;
}
</style>
