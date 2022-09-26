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

export default {
  name: "itemCom",
  // 声明接收todo对象
  props: ['item', 'checkTodo' , 'deleteTodo'],
  data() {
    return {};
  },
  methods: {
    // 勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      this.checkTodo(id);
    },
    // 通知App组件将对应的todo对象的删除
    handleDelete(id){
      if(confirm('确定删除了吗？')){
        this.deleteTodo(id)
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
