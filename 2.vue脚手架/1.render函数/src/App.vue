<template>
  <div id="app">
        <schoolCom />
        <studentCom />
  </div>
</template>
<script>
// 引入组件
import schoolCom from '../components/School.vue'
import studentCom from '../components/Student.vue'
export default {
    name:'App',
    components:{
        schoolCom,
        studentCom
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
