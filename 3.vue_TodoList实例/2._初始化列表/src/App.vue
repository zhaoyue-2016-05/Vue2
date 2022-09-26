<template>
  <div id="app">
    <div class="todo-wrap">
      <headerCom></headerCom>
      <listCom></listCom>
      <footerCom></footerCom>
    </div>
  </div>
</template>
<script>
// 引入组件
import headerCom from "./components/myHeader.vue";
import footerCom from "./components/myFooter.vue";
import listCom from "./components/myList.vue";
export default {
  name: "App",
  data() {
    return {

    };
  },
  components: {
    headerCom,
    footerCom,
    listCom
  }
};
</script>
<style lang="less">
*{
  box-sizing: border-box;
}
.todo-wrap {
  padding: 15px;
  width: 400px;
  border: 1px solid #628dce;
  border-radius: 10px;
}
</style>
