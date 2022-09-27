<template>
<!--
  第一步：需要先启动serve服务 找文件名：MyServe 输出：node server_vue1.js 和 server_vue2.js
  第二步：npm i axios
  第三步：测试
 -->
  <div>
    <button @click="getStudent">获取学生消息</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    getStudent() {
      axios.get('http://10.12.12.215:8080/build/students.json').then(
          response => {
            console.log('请求成功了',response.data)
          },
          error => {
            console.log('请求失败了',error.message)
          }
      )
    }
  }
}
</script>
<style scoped>

</style>
