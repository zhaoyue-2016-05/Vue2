<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox">
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>

export default {
  name: "footerCom",
  props: ['todos'],
  data() {
    return {};
  },
  computed: {
    doneTotal() {
      // 不推荐性能太差
      /* let i = 0
      this.todos.forEach((todo)=>{
        if(todo.done)i++
      })
      return i*/
    /* return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)*/
    //  简化
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    }
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
