<template>
  <li class="todo-li">
    <label>
      <input type="checkbox" :checked="item.done"/>
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>

export default {
  name: "itemCom",
  // 声明接收todo对象
  props:['item'],
  data() {
    return {

    };
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
