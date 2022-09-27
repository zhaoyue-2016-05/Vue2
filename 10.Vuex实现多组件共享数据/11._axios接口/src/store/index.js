// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)




//创建store并暴露store
export default new Vuex.Store({
    modules:{
        countObj:countOptions,
        personObj:personOptions
    }
})
