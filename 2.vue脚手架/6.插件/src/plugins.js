export default {
    install(Vue ,a,b,c) {
        console.log('@@使用插件', Vue)
        console.log('@@第二个参数接收', a,b,c)
        // 全局过滤器
        Vue.filter('mySlice', function (val) {
            return val.slice(0, 4)
        })

        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时  注意 此处是this是windnow
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element) {
                element.focus();
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        // 给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.demo = () => {
            alert('弹出插件')
        }
    }
}
