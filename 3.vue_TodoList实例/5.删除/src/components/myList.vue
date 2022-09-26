<template>
  <ul class="todo-main">
    <itemCom
        :todos="todos" v-for="item in todos" :key='item.id' :item="item" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></itemCom>
  </ul>
</template>

<script>
import itemCom from './myitem'

export default {
  name: "listCom",
  props:['todos','checkTodo' , 'deleteTodo'],
  data() {
    return {

    };
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
