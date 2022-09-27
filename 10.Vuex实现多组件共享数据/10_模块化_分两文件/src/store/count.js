//求和功能相关的配置
export default {
    namespaced: true,
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