<template>
  <div id="app">

    <TestCom></TestCom>

  </div>
</template>
<script>
// 引入组件
import TestCom from "./components/Test.vue";
export default {
  name: "App",
  data() {
    return {

    };
  },
  components: {
    TestCom
  }
};
</script>
<style>
</style>
