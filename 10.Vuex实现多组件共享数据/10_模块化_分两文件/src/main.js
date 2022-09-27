import Vue from 'vue'
import App from './App.vue'
// 引入其他插件
import vueResource from "vue-resource";

// 引入自store
import store from './store'

Vue.config.productionTip = false
// 使用插件 vc
Vue.use(vueResource)


new Vue({
  render: h => h(App),
    store,
}).$mount('#app')
