import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import state from "./state/state"
import mutations from "./mutations/mutations"
// import actions from "./actions/actions"
// import getters from "./getters/getters"


// 创建 store 仓库
var store = new Vuex.Store({
    state,                            //状态  存放数据的
    mutations,                        // 是存放的所有事件方法参数就是state本身,
                                     // mutations 是处理state的所有事件方法,
    // actions,                         //存放异步的方法
    // getters                        //跟 computed 计算属性一样 
   
})
// 将 store 仓库注入到vm中去

export default store;