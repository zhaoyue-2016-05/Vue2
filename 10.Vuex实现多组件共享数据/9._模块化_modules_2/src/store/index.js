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
        JIA(state, val) {
            console.log('mutations的JIS被调用了')
            state.sum += val
        },
        MINUS(state, val) {
            console.log('mutations的MINUS被调用了')
            state.sum -= val
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
    actions: {
        addPersonWang(context , val){
            if(val.name.indexOf('王') === 0) {
                context.commit('ADD_Person',val)
            } else {
                alert('不是姓王，请输入姓王')
            }
        }
    },
    mutations: {
        ADD_Person(state, obj) {
            console.log('mutations中的ADD_Person被调用了', state, obj)
            state.personList.unshift(obj)
        }
    },
    state: {
        personList: [
            {id: '001', name: '咪咪'},
            {id: '002', name: '阿伟'}
        ]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}

//创建store并暴露store
export default new Vuex.Store({
    modules:{
        countObj:countOptions,
        personObj:personOptions
    }
})
