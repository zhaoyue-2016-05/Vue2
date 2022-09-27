<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInRight"
        leave-active-class="animate__backOutLeft"
        >
      <h2 v-show="isShow" key="1">鸣启数字</h2>
      <h2 v-show="!isShow" key="2">鸣启数字</h2>
    </transition-group>

  </div>
</template>

<script>
import 'animate.css'
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
}

</style>
