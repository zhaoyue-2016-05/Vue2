<template>
  <div>
    <ul>
      <li>消息编号:{{id}}</li>
      <li>消息标题:{{title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailCom",
  props:['id','title'],
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>