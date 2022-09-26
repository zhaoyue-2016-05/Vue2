<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认">
  </div>
</template>

<script>

export default {
  name: "headerCom",
  data() {
    return {

    };
  }
};
</script>

<style lang="less">
.todo-header {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-radius: 10px;
  input {
    padding: 10px;
    width: 100%;
    background-color: #ddd;
    color: #fff;
    border: none;
  }
}
</style>
