<template>
<div>
  <ul>
    <li>News001 <input type="text"></li>
    <li>News002 <input type="text"></li>
    <li>News003 <input type="text"></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "NewsCom",
  beforeDestroy() {
    console.log('News组件即将被销毁了')
  }
}
</script>

<style scoped>

</style>