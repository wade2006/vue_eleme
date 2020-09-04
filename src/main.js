//入口js
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'  

/* eslint-disable no-new */

Vue.use(MintUI)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
// render :h=>h(App)
  router,  //使用vue-router
  store    //使用vuex
})
