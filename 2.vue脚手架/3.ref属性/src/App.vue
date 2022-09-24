<template>
  <div id="app">

    <h1 v-text="msg" id="title" ref="title"></h1>
    <button ref="btn" @click="showMsg">点输出上方的DOM元素</button>

    <schoolCom ref="school" />
    <studentCom />
  </div>
</template>
<script>
// 引入组件
import schoolCom from "../components/School.vue";
import studentCom from "../components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      msg:'欢迎来鸣启数字科技工作室'
    }
  },
  components: {
    schoolCom,
    studentCom,
  },
  methods: {
    showMsg(){
      console.log(document.getElementById('title'))

      console.log(this.$refs) // 对象
      console.log(this.$refs['title']) // 真实DOM元素
      console.log(this.$refs['btn']) // 真实DOM元素
      console.log(this.$refs['school']) // schoolCom组件的实例对象（vc）
    }
  },
  mounted() {
    
  },
};
</script>
<style>
</style>
