<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!--      <input type="checkbox" :checked="isAll" @change="checkAll">-->
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>

export default {
  name: "footerCom",
  props: ['todos', 'checkAllTodo','clearAllTodo'],
  data() {
    return {};
  },
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },
    /* isAll(){
          return this.doneTotal === this.total && this.total > 0
        },*/
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0
      },
      set(val) {
        console.log('@', val)
        this.checkAllTodo(val)
      }

    }
  },
  methods: {
    /*    checkAll(e) {
          this.checkAllTodo(e.target.checked)
        }*/
    // 清空已完成
    clearAll() {
      this.clearAllTodo()
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
