<template>
  <div id="app">

    <studentCom></studentCom>

    <schoolCom></schoolCom>
  </div>
</template>
<script>
// 引入组件
import schoolCom from "./components/School.vue";
import studentCom from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {

    };
  },
  components: {
    schoolCom,
    studentCom
  }
};
</script>
<style>
</style>
