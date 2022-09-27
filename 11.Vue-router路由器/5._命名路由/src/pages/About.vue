<template>
  <div>
    About
  </div>
</template>

<script>
export default {
  name: "AboutCom",
  mounted() {
    console.log('About组件挂载完毕了')
  },
  beforeDestroy() {
    console.log('About组件即将被销毁了')
  }
}
</script>

<style scoped>

</style>