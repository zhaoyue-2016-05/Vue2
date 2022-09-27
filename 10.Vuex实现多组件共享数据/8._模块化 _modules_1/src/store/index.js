// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

//求和功能相关的配置
const countOptions = {
    namespaced:true,
    actions: {
        odd: function (context, val) {
            console.log('actions中的odd被调用了')
            if (context.state.sum % 2) {
                context.commit('JIA', val)
            }
        },
        wait: function (context, val) {
            console.log('actions中的wait被调用了')
            setTimeout(() => {
                context.commit('JIA', val)
            }, 1000)
        }
    },
    mutations: {
        JIA(conText, val) {
            console.log('mutations的JIS被调用了')
            conText.sum += val
        },
        MINUS(conText, val) {
            console.log('mutations的MINUS被调用了')
            conText.sum -= val
        },
    },
    state: {
        sum: 1, //当前的和
        name: '鸣启',
        subject: 'web前端JavaScript',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

//人员管理功能相关的配置
const personOptions = {
    namespaced:true,
    actions: {},
    mutations: {
        ADD_Person(state, val) {
            console.log('mutations中的ADD_Person被调用了', state, val)
            state.personList.unshift(val)
        }
    },
    state: {
        personList: [
            {id: '001', name: '咪咪'},
            {id: '002', name: '阿伟'}
        ]
    },
    getters: {}
}

//创建store并暴露store
export default new Vuex.Store({
    modules:{
        countObj:countOptions,
        personObj:personOptions
    }
})
