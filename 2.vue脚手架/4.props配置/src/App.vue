<template>
  <div id="app">
    <studentCom :name="name" :age="age" :sex="sex"  />
  </div>
</template>
<script>
// 引入组件
import studentCom from "../components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      name: "赵越",
      age: 32,
      sex: "男",
    };
  },
  components: {
    studentCom,
  },
};
</script>
<style>
</style>
