<template>
  <div>
    Home
  </div>
</template>

<script>
export default {
  name: "HomeCom",
  mounted() {
    console.log('HomeCom组件挂载完毕了')
  },
  beforeDestroy() {
    console.log('Home组件即将被销毁了')
  }
}
</script>

<style scoped>

</style>