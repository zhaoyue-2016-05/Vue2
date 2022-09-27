<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- transition标签里带不带name都可以， 不带就默认v- -->
    <transition name="ani" appear>
      <h1 v-show="isShow" class="come">动画</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TestCom",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
  text-align: center;
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
