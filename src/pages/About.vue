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

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to,from,next){
    console.log(to,from,next)
    console.log(to, from, next)
    if (to.meta.isAuth) { //判断是否需要鉴权
      if (localStorage.getItem('school') === 'mingqi') {
        next()
      } else {
        alert('不正确地址')
      }
    } else {
      next()
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to,from,next){
    console.log(to,from,next)
  },

  beforeDestroy() {
    console.log('About组件即将被销毁了')
  }
}
</script>

<style scoped>

</style>