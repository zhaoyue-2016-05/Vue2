<template>
<!--
  第一步：需要先启动serve服务
  第二步：npm i axios
  第三步：测试
 -->
  <div>
    <button @click="getStudent">获取学生消息</button>
    <button @click="getCars">获取汽车消息</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    getStudent() {
      axios.get('http://localhost:8080/studentPath/students').then(
          response => {
            console.log('请求成功了',response.data)
          },
          error => {
            console.log('请求失败了',error.message)
          }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/carsPath/cars').then(
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
