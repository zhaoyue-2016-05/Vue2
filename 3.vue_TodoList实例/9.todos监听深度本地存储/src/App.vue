<template>
  <div id="app">
    <div class="todo-wrap">
      <headerCom :addTodo="addTodo"></headerCom>
      <listCom :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></listCom>
      <footerCom :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></footerCom>
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
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  components: {
    headerCom,
    footerCom,
    listCom
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    // 勾选or取消勾选一个tood
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    // 删除一个列
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  watch: {
    // todos(value) {
    //   localStorage.setItem('todos', JSON.stringify(value))
    // },
    todos: {
      immediate: true,
      deep:true,
      handler(value){
        localStorage.setItem('todos' , JSON.stringify(value))
      }
    }
  }
};
</script>
<style lang="less">
* {
  box-sizing: border-box;
}

.todo-wrap {
  padding: 15px;
  width: 400px;
  border: 1px solid #628dce;
  border-radius: 10px;
}
</style>
