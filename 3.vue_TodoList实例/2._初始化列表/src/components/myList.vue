<template>
  <ul class="todo-main">
    <itemCom :todos="todos" v-for="item in todos" :key='item.id' :item="item"></itemCom>
  </ul>
</template>

<script>
import itemCom from './myitem'

export default {
  name: "listCom",
  data() {
    return {
      todos:[
        {id:'0001' ,title:'早餐', done:true},
        {id:'0002' ,title:'上班', done:true},
        {id:'0003' ,title:'中午', done:false},
        {id:'0004' ,title:'下班', done:true},
        {id:'0005' ,title:'回家', done:true},
        {id:'0006' ,title:'睡觉', done:false},
      ]
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
