<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 传统样式写法 -->
    <h1 v-show="isShow" class="come">动画</h1>
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

.come {
  animation: animationStyle 1s;
}

.go {
  animation: animationStyle 1s reverse;
}

@keyframes animationStyle {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
