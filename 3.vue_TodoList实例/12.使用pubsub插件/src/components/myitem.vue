<template>
  <li class="todo-li">
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/>
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(item.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "itemCom",
  // 声明接收todo对象
  props: ['item'],
  data() {
    return {};
  },
  methods: {
    // 勾选
    handleCheck(id) {
      this.$bus.$emit('checkTodo' , id);
    },
    handleDelete(id){
      if(confirm('确定删除了吗？')){
        // this.$bus.$emit('deleteTodo' , id);
        pubsub.publish('deleteTodo' , id)
      }
    }
  }
};
</script>

<style lang="less">
.todo-li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  .btn {
    display: none;
  }
}
.todo-li:hover {
  background: #ddd;
  cursor: pointer;
}
.todo-li:hover .btn {
  display: block;
}
</style>
