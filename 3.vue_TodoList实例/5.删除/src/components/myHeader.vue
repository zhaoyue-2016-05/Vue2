<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "headerCom",
  props: ['addTodo'],
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add() {
      //校验数据
      if (!this.title) return alert('输入名字')
      // 将用户的输入包装成一个todo对象
      const todoObj = {id: nanoid(), title: this.title, done: false}
      //通知APp组件去添加一个todo对象
      this.addTodo(todoObj)
      // 清空输入
      this.title = ''
    }
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
