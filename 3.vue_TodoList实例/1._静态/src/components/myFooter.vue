<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox">
    </label>
    <span>
      <span>已完成0</span> / 全部2
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>

export default {
  name: "footerCom",
  data() {
    return {

    };
  }
};
</script>

<style lang="less">
.todo-footer {

}
.btn {
  padding: 5px;
  border: none;
  border-radius: 10px;
}

.btn-danger {
  background: darkred;
  color: #fff;
}
</style>
