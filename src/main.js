import Vue from 'vue'
import App from './App'
import router from './router'

// 引入字体图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faHome, faArchive, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret,faUser, faHome, faArchive, faShoppingCart, faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
// 引入vant 轮播
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
