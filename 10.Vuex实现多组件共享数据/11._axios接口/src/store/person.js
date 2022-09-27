//人员管理功能相关的配置
import axios from "axios";
import {nanoid} from "nanoid";


export default {
    namespaced: true,
    actions: {
        addPersonWang(context, val) {
            if (val.name.indexOf('王') === 0) {
                context.commit('ADD_Person', val)
            } else {
                alert('不是姓王，请输入姓王')
            }
        },
        addPersonServer(context){
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_Person',{id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
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
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}