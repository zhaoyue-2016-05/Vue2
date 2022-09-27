<template>
  <ul class="todo-main">
    <transition-group name="ani" appear>
      <itemCom :todos="todos" v-for="item in todos" :key='item.id' :item="item"></itemCom>
    </transition-group>
  </ul>
</template>

<script>
import itemCom from './myitem'

export default {
  name: "listCom",
  props:['todos'],
  data() {
    return {

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
.btn-edit {
  background: dodgerblue;
  color: #fff;
}
.btn:hover {
  background: #b74040;
  cursor: pointer;
}
.btn:active {
  background: #ddd;
}
.ani-enter-active {
  animation: animationStyle 0.5s linear;
}

.ani-leave-active {
  animation: animationStyle 0.5s reverse;
}

@keyframes animationStyle {
  from {
    transform: translateX(-400px);
  }
  to {
    transform: translateX(0);
  }
}
</style>
