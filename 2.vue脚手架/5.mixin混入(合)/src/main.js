import Vue from 'vue'
import App from './App.vue'

import {hunhe} from './mixin'
Vue.config.productionTip = false

Vue.mixin(hunhe)
new Vue({
  render: h => h(App),
}).$mount('#app')
