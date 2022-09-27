<template>
  <li class="todo-li">
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/>
      <span v-show="!item.isEdit">{{ item.title }}</span>
      <input v-show="item.isEdit" ref="inputTitle" type="text" :value="item.title" @blur="handleBlur(item,$event)">
    </label>
    <div>
      <button v-show="!item.isEdit" class="btn btn-edit" @click="handleEdit(item)">编辑</button>
      <button class="btn btn-danger" @click="handleDelete(item)">删除</button>
    </div>
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
      this.$bus.$emit('checkTodo', id);
    },
    // 删除
    handleDelete(id) {
      if (confirm('确定删除了吗？')) {
        // this.$bus.$emit('deleteTodo' , id);
        pubsub.publish('deleteTodo', id)
      }
    },
    // 编辑
    handleEdit(item) {
      //如果item身上有isEdit
      // eslint-disable-next-line no-prototype-builtins
      if (item.hasOwnProperty('isEdit')) {
        console.log('身上有isEdit')
        item.isEdit = true
      } else {
        console.log('身上没有isEdit')
        this.$set(item, 'isEdit', true)
      }
      // 在下一次DOM更新结束后执行其指定的回调，$nextTick
      this.$nextTick(()=>{
        console.log(this)
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点回调(真正执行修改逻辑)
    handleBlur(item,e) {
      item.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo' , item.id ,e.target.value)
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
  display: inline-block;
}
</style>
