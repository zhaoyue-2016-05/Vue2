<template>
  <li class="todo-li">
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/>
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="item.done"/>-->
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>

export default {
  name: "itemCom",
  // 声明接收todo对象
  props: ['item', 'checkTodo'],
  data() {
    return {};
  },
  methods: {
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      this.checkTodo(id);
    }
  }
};
</script>

<style lang="less">
.todo-li {
  margin-bottom: 10px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}
</style>
