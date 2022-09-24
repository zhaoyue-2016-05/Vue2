/* 
  关于不同版本的Vue:
    1.vue.js与vue.runtime.xxx.js的区别
      一、vue.js是完整版的Vue，包含：核心功能+模板解析器。
      二、vue.runtime.xxx.js是运行版的vue，只包含：核心功能：没有模板解析器

    2.因为vue.runtime.xxx.js没有解析器，所以不能使用template配置项，需要使用render函数接收收到的createElement函数去指定具体内容。
*/
/* 
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false
// 创建Vue实例对象 --- vm
new Vue({
  // render的意思是渲染
  // 用函数名方式带传参
  /*   
  render(createElement){
      return createElement('h1' , '你好啊')
    } 
  */
   // 用箭头函数方式 
  /* render:createElement => createElement('h1' , '你好啊') */

  // 简化 用箭头函数方式 
  render: h => h(App),
}).$mount('#app')
