<template>
  <div class="page-header">
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="go">测试一下go</button>
  </div>
</template>

<script>
export default {
  name: "bannerCom",
  methods:{
    back(){
      this.$router.back();
    },
    forward(){
      this.$router.forward()
    },
    go(){
      this.$router.go(2) // -2后退跳过2个跳转  2前进跳过2个跳转
    }

  }
}
</script>

<style scoped>

</style>