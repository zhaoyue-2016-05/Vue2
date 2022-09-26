<template>
  <ul class="todo-main">
    <itemCom></itemCom>
  </ul>
</template>

<script>
import itemCom from './myitem'

export default {
  name: "listCom",
  data() {
    return {};
  },
  components: {
    itemCom
  }
};
</script>

<style lang="less">
.todo-main {
  margin: 0;
  padding: 0;
  list-style: none;
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
.btn:hover {
  background: #b74040;
  cursor: pointer;
}
.btn:active {
  background: #ddd;
}
</style>
