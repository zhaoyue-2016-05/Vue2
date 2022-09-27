<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- 第一种写法 -->
    <h1>第一种写法</h1>
    <transition name="ani" appear>
      <div v-show="isShow">
        <h2>鸣启数字</h2>
        <h2>鸣启数字</h2>
        <h2>鸣启数字</h2>
      </div>
    </transition>

    <!-- 第二种写法 -->
    <h1>第二种写法</h1>
    <transition-group name="ani" appear>
      <h2 v-show="isShow" key="1">鸣启数字</h2>
      <h2 v-show="!isShow" key="2">鸣启数字</h2>
      <h2 v-show="isShow" key="3">鸣启数字</h2>
    </transition-group>

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
h2 {
  text-align: center;
  background-color: cornflowerblue;
//transition: .5s linear;
}

/* 进入的起点 */ /* 离开的终点 */
.ani-enter, .ani-leave-to {
  transform: translateX(-100%);
}

/*  */
.ani-enter-active, .ani-leave-active {
  transition: .5s linear;
}

/* 进入的终点 */ /* 离开的起点 */
.ani-enter-to, .ani-leave {
  transform: translateX(0);
}
</style>
